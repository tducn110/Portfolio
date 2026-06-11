# Plan: Migrate Animation System to GSAP + Replace Placeholder Images

## Context
The portfolio currently mixes two animation systems: `motion/react` for entrance
animations and `useInView` (IntersectionObserver, `src/app/hooks/useInView.ts`) for
scroll-triggered reveals. GSAP is only used for the single parallax orb in `Hero.tsx`
via `useParallax`. This causes inconsistent timing/easing and the prior "lắc quẻ"
jitter. The goal is to unify everything on GSAP ("building in layers" feel), add a few
calm signature effects (Hero timeline, floating tech tags, Process connector scrub), and
swap 9 placeholder Unsplash images for better-matching photos — keeping motion calm
(small `y` offsets, `prefers-reduced-motion` respected) per saved prefs.

## Scope of Changes

### 1. Install `@gsap/react`
- `pnpm add @gsap/react` — provides `useGSAP()` for scoped, auto-cleaned animations.

### 2. Upgrade `src/app/hooks/useParallax.ts`
- Re-implement `useParallax` + `useStoryReveal` on top of `useGSAP()` instead of raw
  `useEffect`/`gsap.context`. Keep the same exported API and reduced-motion guard.

### 3. New hook `src/app/hooks/useScrollReveal.ts`
- Reusable section-level reveal: `useScrollReveal(childSelector = ".gsap-reveal")` →
  returns a container `ref`.
- Animates matched children `opacity 0→1`, `y 12→0`, `stagger 0.1`, `ease power2.out`,
  `ScrollTrigger start "top 78%"`. No-op under `prefers-reduced-motion`. Keep `y` small
  (≤12px) to stay calm.

### 4. `Hero.tsx` — GSAP timeline + floating layers
- Remove `motion` import and all `initial/animate/transition` props; replace
  `motion.*` with plain elements carrying class markers: `hero-label`, `hero-title`,
  `hero-subtitle`, `hero-cta`, `hero-facts`.
- `useGSAP({ scope: rootRef })` timeline: `.from()` each marker with `opacity:0`,
  small `y` (8–12px), short durations, slight negative offsets for overlap.
- Keep the existing parallax orb (`useParallax`).
- Add an `aria-hidden` floating layer block: ~8 pill tags (Idea, Flow, UI, Database,
  API, Test, Deploy, Refactor) absolutely positioned around the hero, gently bobbing
  (`y:10–14`, `repeat:-1`, `yoyo:true`, `ease:"sine.inOut"`, random stagger). Gate behind
  `matchMedia("(pointer: fine)")` so it is desktop-only and hidden on mobile.

### 5. Replace Motion + useInView in section components
For `About.tsx`, `WhatIDo.tsx`, `Projects.tsx`, `Process.tsx`, `WhyMe.tsx`,
`Interests.tsx`, `Contact.tsx`:
- Remove `import { motion } from "motion/react"` and the `useInView` import/usage.
- Replace `motion.div` reveal wrappers with plain `div`s tagged `gsap-reveal`.
- Attach `useScrollReveal()` ref to the section root.

### 6. Process connector animation (`Process.tsx`)
- Give the vertical connector `div` (currently static, `left:23`) a `ref` and animate
  with `gsap.fromTo(line, { scaleY:0, transformOrigin:"top center" }, { scaleY:1,
  ease:"none", scrollTrigger:{ trigger: sectionRef, start:"top 70%", end:"bottom 80%",
  scrub:1 } })`. Step cards reveal via `useScrollReveal`.

### 7. Replace 9 placeholder Unsplash images
Use pattern `https://images.unsplash.com/{id}?w=800&auto=format&fit=crop`, imported
through the existing image components. Replacements:

| Location | New photo id |
|---|---|
| About — portrait | `photo-1637563680361-3e7ee7599318` |
| Projects — Finance Tracker | `photo-1551288049-bebda4e38f71` |
| Projects — Unsaid Words | `photo-1521931961826-fe48677230a5` |
| Projects — PingBall | `photo-1676827613262-5fba25cee5fd` |
| Projects — Game Prototype | `photo-1550745165-9bc0b252726f` |
| Interests — Workspace | `photo-1542315192-1f61a1792f33` |
| Interests — Game | `photo-1498736297812-3a08021f206f` |
| Interests — Design | `photo-1576153192396-180ecef2a715` |
| Interests — Da Nang | `photo-1735348568927-7933a6952154` |

### 8. Performance / safety guards
- Every animation early-returns under `prefers-reduced-motion`.
- Floating layers gated to `pointer: fine`.
- `useGSAP()` scope handles ScrollTrigger cleanup on unmount.
- Animate only `transform` + `opacity` (no layout-affecting properties).

## Files to Modify
- `package.json` — add `@gsap/react`
- `src/app/hooks/useParallax.ts` — move to `useGSAP()`
- `src/app/hooks/useScrollReveal.ts` — **new**
- `src/app/components/Hero.tsx` — timeline + floating layers, drop Motion
- `src/app/components/About.tsx` — drop Motion/useInView, new portrait image
- `src/app/components/WhatIDo.tsx` — drop Motion/useInView
- `src/app/components/Projects.tsx` — drop Motion/useInView, new project images
- `src/app/components/Process.tsx` — drop Motion/useInView, connector scrub
- `src/app/components/WhyMe.tsx` — drop Motion/useInView
- `src/app/components/Interests.tsx` — drop Motion/useInView, new images
- `src/app/components/Contact.tsx` — drop Motion/useInView
- `src/app/hooks/useInView.ts` — remove once no longer imported anywhere

## Verification
1. Preview: Hero text staggers in calmly (no flicker, no layout shift).
2. Floating tech tags bob gently in the background — desktop only, absent on mobile.
3. Scrolling each section fades/rises cards & headings smoothly into view.
4. Process connector line draws top→bottom on scroll (scrub).
5. All 9 images load with correct aspect ratios (no broken images / white gaps).
6. With `prefers-reduced-motion: reduce`, all animations are skipped.
7. No orphaned ScrollTrigger instances after navigating/unmount (useGSAP cleanup).
