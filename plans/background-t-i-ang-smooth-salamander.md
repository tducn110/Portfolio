# Plan: Full GSAP Animation System + Image Replacement

## Context
Portfolio hiện đang dùng `motion/react` cho entrance animations và `useInView` (Intersection Observer) cho scroll-triggered effects. GSAP chỉ được dùng cho parallax orb ở Hero. Mục tiêu: implement hệ thống animation GSAP đầy đủ theo "Building in Layers" concept từ guide đính kèm, đồng thời thay thế tất cả placeholder Unsplash bằng ảnh thật hơn.

## Scope of Changes

### 1. Install `@gsap/react`
- Run: `pnpm add @gsap/react`
- Used for `useGSAP()` hook — proper scoped cleanup thay vì `useEffect` raw

### 2. Upgrade `src/app/hooks/useParallax.ts`
- Replace `useEffect`-based parallax with `useGSAP()` from `@gsap/react`
- Keeps existing `useParallax` + `useStoryReveal` API

### 3. Create `src/app/hooks/useScrollReveal.ts` (new)
- Wraps `useGSAP()` + `ScrollTrigger` for reusable section-level scroll reveals
- Signature: `useScrollReveal(selector: string)` → returns `{ ref }`
- Animates: `opacity 0→1`, `y 30→0`, `stagger 0.1`, `ease: power2.out`
- Triggers at `start: "top 78%"`, respects `prefers-reduced-motion`

### 4. Upgrade `Hero.tsx` — GSAP Timeline + Floating Layers
**Remove**: `motion` imports and `initial/animate/transition` props  
**Add**:
- `useRef` + `useGSAP({ scope: rootRef })` with a `gsap.timeline()`:
  - `.from(".hero-label", { opacity:0, y:20, duration:0.6 })`
  - `.from(".hero-title", { opacity:0, y:40, duration:0.8 }, "-=0.3")`
  - `.from(".hero-subtitle", { opacity:0, y:25, duration:0.6 }, "-=0.4")`
  - `.from(".hero-cta", { opacity:0, y:16, stagger:0.1, duration:0.5 }, "-=0.3")`
  - `.from(".hero-facts", { opacity:0, y:16, duration:0.5 }, "-=0.2")`
- Add className markers: `hero-label`, `hero-title`, `hero-subtitle`, `hero-cta`, `hero-facts`
- **Floating layers** block (aria-hidden): 8 pill tags (`Idea`, `Flow`, `UI`, `Database`, `API`, `Test`, `Deploy`, `Refactor`) positioned absolutely around the hero, animated with:
  ```
  gsap.to(".float-layer", { y:14, repeat:-1, yoyo:true, ease:"sine.inOut", stagger:{ each:0.5, from:"random" }, duration: 5–9 per tag })
  ```
  Only on `pointer: fine` devices (desktop), hidden on mobile

### 5. Replace Motion → GSAP in Section Components
For each of: `About.tsx`, `WhatIDo.tsx`, `Projects.tsx`, `Process.tsx`, `WhyMe.tsx`, `Interests.tsx`, `Contact.tsx`:
- Remove `import { motion } from "motion/react"` and `useInView` import
- Replace `<motion.div initial/animate>` wrappers with plain `<div>` + className markers
- Use `useScrollReveal(".gsap-reveal")` hook pattern
- Add `.gsap-reveal` className to heading blocks and cards

### 6. Process Line Animation (`Process.tsx`)
- The vertical connector `<div>` (left: 23, height: full) gets `ref` + GSAP ScrollTrigger:
  ```
  gsap.fromTo(lineRef.current, { scaleY:0, transformOrigin:"top center" }, {
    scaleY:1, ease:"none",
    scrollTrigger: { trigger: sectionRef.current, start:"top 70%", end:"bottom 80%", scrub:1 }
  })
  ```
- Step cards already stagger in via `useScrollReveal`

### 7. Replace All Unsplash Placeholder Images

| Location | Current photo ID | New URL |
|---|---|---|
| About — portrait | `photo-1622151834677` | `photo-1637563680361-3e7ee7599318` (man at laptop, Penfer) |
| Projects — Finance Tracker | `photo-1542831371` | `photo-1551288049-bebda4e38f71` (analytics dashboard, Luke Chesser) |
| Projects — Unsaid Words | `photo-1607799279861` | `photo-1521931961826-fe48677230a5` (smartphone messaging, Christian Wiediger) |
| Projects — PingBall | `photo-1461749280684` | `photo-1676827613262-5fba25cee5fd` (ping pong paddles, Inkiipow) |
| Projects — Game Prototype | `photo-1760008486593` | `photo-1550745165-9bc0b252726f` (vintage console, Lorenzo Herrera) |
| Interests — Workspace | `photo-1705947172050` | `photo-1542315192-1f61a1792f33` (dual monitor desk, Jannis Brandt) |
| Interests — Game | `photo-1612534859320` | `photo-1498736297812-3a08021f206f` (arcade cabinets, Ben Neale) |
| Interests — Design | `photo-1606126979000` | `photo-1576153192396-180ecef2a715` (design sketch notebook, Amélie Mourichon) |
| Interests — Da Nang | `photo-1606127195437` | `photo-1735348568927-7933a6952154` (beach, Da Nang, Kaung Myat Min) |

Each URL uses the pattern: `https://images.unsplash.com/{photo-id}?w=800&auto=format&fit=crop`

### 8. Performance Guards
- All GSAP animations wrapped in `if (reduced()) return;` check
- `matchMedia("(pointer: fine)")` gates floating layers (desktop-only)
- `useGSAP()` scope + cleanup prevents memory leaks
- Only animate `transform` + `opacity` (no layout properties)

## Files to Modify
- `package.json` — add `@gsap/react`
- `src/app/hooks/useParallax.ts` — upgrade to `useGSAP()`
- `src/app/hooks/useScrollReveal.ts` — **new file**
- `src/app/components/Hero.tsx` — timeline + floating layers, replace Motion
- `src/app/components/About.tsx` — replace Motion + useInView
- `src/app/components/WhatIDo.tsx` — replace Motion + useInView
- `src/app/components/Projects.tsx` — replace Motion + useInView
- `src/app/components/Process.tsx` — replace Motion + useInView, add line animation
- `src/app/components/WhyMe.tsx` — replace Motion + useInView
- `src/app/components/Interests.tsx` — replace Motion + useInView, update images
- `src/app/components/Contact.tsx` — replace Motion + useInView
- `src/app/components/About.tsx` — update portrait image URL

## Verification
1. Preview renders Hero with staggered text entrance (no flicker, no layout shift)
2. Floating tech tags gently bob in background (desktop only)
3. Scroll through each section — cards/headings fade-rise into view smoothly
4. Process connector line scaleY animates top→bottom as you scroll through it
5. All 9 images load correctly (not broken, correct aspect ratios maintained)
6. DevTools: check for no orphaned ScrollTrigger instances on unmount
7. Test with `prefers-reduced-motion: reduce` set — all animations should be skipped
