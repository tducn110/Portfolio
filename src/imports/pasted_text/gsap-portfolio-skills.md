Đúng, m đang bị nhầm chỗ này: **“GSAP skill” không phải là một cái skill bí ẩn cần copy là chạy được**. Với portfolio của m, “GSAP skill” nên hiểu là **một bộ pattern animation**: biết dùng GSAP để tạo hero reveal, floating layer, scroll parallax, project card reveal, process line animation.

GSAP là thư viện animation JavaScript, dùng được với nhiều framework như React, Vue, Webflow, WordPress; core của nó tạo animation bằng Tween/Timeline, còn plugin như ScrollTrigger xử lý animation theo scroll. ([GSAP][1])

---

# 1. M cần biết GSAP ở mức nào?

M **không cần học hết GSAP**. Với portfolio này, m chỉ cần học 20% dùng nhiều nhất:

| GSAP skill                     | Dùng để làm gì trong portfolio của m                             | Mức cần học             |
| ------------------------------ | ---------------------------------------------------------------- | ----------------------- |
| `gsap.to()`                    | Cho element di chuyển từ trạng thái hiện tại sang trạng thái mới | Bắt buộc                |
| `gsap.from()`                  | Element xuất hiện từ dưới lên / mờ sang rõ                       | Bắt buộc                |
| `gsap.fromTo()`                | Kiểm soát cả điểm bắt đầu và kết thúc                            | Bắt buộc                |
| `gsap.timeline()`              | Chạy nhiều animation theo thứ tự                                 | Bắt buộc                |
| `stagger`                      | Cho nhiều card/tag hiện lần lượt                                 | Bắt buộc                |
| `ScrollTrigger`                | Animation khi scroll tới section                                 | Bắt buộc                |
| `scrub`                        | Scroll tới đâu animation chạy tới đó                             | Nên biết                |
| `pin`                          | Giữ section đứng yên khi scroll                                  | Optional                |
| `matchMedia`                   | Desktop có parallax, mobile tắt bớt                              | Nên biết                |
| `useGSAP()` / `gsap.context()` | Dùng GSAP sạch trong React, có cleanup                           | Bắt buộc nếu dùng React |

GSAP có plugin **ScrollTrigger** để trigger animation theo scroll, hỗ trợ scrub, pin, snap và các animation liên quan đến scroll. ([GSAP][2]) Với React, GSAP có hướng dẫn dùng `useGSAP()` vì hook này hỗ trợ cleanup animation theo best practice; `gsap.context()` cũng giúp gom animation/ScrollTrigger lại để revert hoặc kill khi component unmount. ([GSAP][3])

---

# 2. Tư duy đúng: cái gì dùng CSS, cái gì dùng GSAP?

Đừng dùng GSAP cho mọi thứ.

| Loại motion                   | Nên dùng           |
| ----------------------------- | ------------------ |
| Button hover                  | CSS                |
| Card hover lift               | CSS                |
| Floating loop rất nhẹ         | CSS hoặc GSAP      |
| Hero entrance sequence        | GSAP               |
| Scroll reveal section         | GSAP ScrollTrigger |
| Parallax layer theo scroll    | GSAP ScrollTrigger |
| Mouse parallax                | JavaScript + GSAP  |
| Process line chạy theo scroll | GSAP ScrollTrigger |
| Text reveal từng đoạn         | GSAP               |
| Mobile animation              | CSS/GSAP rất nhẹ   |

Rule cho m:

```txt
CSS = motion nhỏ, đơn giản, lặp lại
GSAP = motion có sequence, scroll, parallax, timeline
```

---

# 3. Bộ “GSAP skill” đúng cho portfolio của m

## Skill 1: Hero Entrance

Dùng khi trang mới load.

Hiệu ứng:

```txt
Background layer hiện nhẹ
Hero label fade in
Heading trượt lên
Subtitle trượt lên
CTA hiện sau
Floating cards hiện cuối
```

Ý nghĩa: tạo cảm giác portfolio có chủ đích, không phải static page.

---

## Skill 2: Floating Layers

Dùng cho background “nổi lên / hạ xuống”.

Các element:

```txt
Idea
Flow
UI
Database
API
Test
Deploy
Refactor
Finance card
Note card
Event card
Game card
```

Motion:

```txt
translateY: -10px → 10px
duration: 5–12s
repeat: infinite
yoyo: true
ease: sine.inOut
delay khác nhau
```

Cái này tạo cảm giác “Building in Layers”.

---

## Skill 3: Scroll Reveal

Dùng cho section:

```txt
Who I Am
What I’m Building
Projects
Why Work With Me
Contact
```

Motion:

```txt
opacity 0 → 1
y 40 → 0
stagger 0.1s
trigger khi section vào viewport
```

Đây là GSAP skill dễ nhất mà nhìn chuyên nghiệp nhất.

---

## Skill 4: Scroll Parallax

Dùng cho background layer.

Ví dụ:

```txt
Grid đi rất chậm
Blob đi vừa
Mini cards đi nhanh hơn
Main content đứng yên
```

Nó tạo depth. Nhưng chỉ nên dùng ở hero và project section.

---

## Skill 5: Project Card Case Study Reveal

Dùng cho project cards.

Mỗi card khi scroll tới:

```txt
card đi lên
opacity tăng
border glow nhẹ
project visual fragment trôi nhẹ
```

Với portfolio của m, đây là phần quan trọng vì project là bằng chứng.

---

## Skill 6: Process Line Animation

Section “How I Solve Problems” nên có line:

```txt
Understand → Shape → Build → Refactor → Use AI Carefully
```

Khi scroll, line chạy từ trái sang phải hoặc từ trên xuống dưới.

Nó giúp người xem hiểu m giải quyết vấn đề có quy trình.

---

# 4. Bảng roadmap học GSAP cho m

| Phase   | Học gì                         | Kết quả                         |
| ------- | ------------------------------ | ------------------------------- |
| Phase 1 | `gsap.to`, `from`, `fromTo`    | Animate được 1 element          |
| Phase 2 | `timeline`, `stagger`          | Làm được hero intro             |
| Phase 3 | `ScrollTrigger`                | Section reveal theo scroll      |
| Phase 4 | `scrub`, parallax              | Layer chạy khác tốc độ          |
| Phase 5 | React `useGSAP` cleanup        | Code sạch, không leak animation |
| Phase 6 | Optimize mobile/reduced motion | Không lag, không rối            |

M học theo đúng thứ tự này là đủ.

---

# 5. Code mẫu cực cơ bản

## Cài GSAP

```bash
npm install gsap @gsap/react
```

## Dùng trong React

```tsx
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-label", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(".hero-title", {
          opacity: 0,
          y: 40,
          duration: 0.8,
        })
        .from(".hero-subtitle", {
          opacity: 0,
          y: 30,
          duration: 0.6,
        })
        .from(".hero-cta", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.1,
        });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="hero">
      <p className="hero-label">CSE Student · Full-stack Product Builder</p>
      <h1 className="hero-title">I turn rough ideas into usable products.</h1>
      <p className="hero-subtitle">
        I build full-stack web apps, portfolio websites, and emotional digital
        experiences.
      </p>
      <div>
        <button className="hero-cta">View Projects</button>
        <button className="hero-cta">Work With Me</button>
      </div>
    </section>
  );
}
```

---

# 6. Floating layer code mẫu

```tsx
useGSAP(
  () => {
    gsap.to(".float-layer", {
      y: 18,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.4,
        from: "random",
      },
    });
  },
  { scope: root }
);
```

HTML/JSX idea:

```tsx
<div className="float-layer">Idea</div>
<div className="float-layer">Flow</div>
<div className="float-layer">UI</div>
<div className="float-layer">Database</div>
<div className="float-layer">API</div>
```

---

# 7. Scroll reveal code mẫu

```tsx
useGSAP(
  () => {
    gsap.from(".reveal-card", {
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 75%",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  },
  { scope: root }
);
```

Dùng cho project cards:

```tsx
<section className="projects-section">
  <article className="reveal-card">Finance Tracker V3</article>
  <article className="reveal-card">Unsaid Words</article>
  <article className="reveal-card">PingBall</article>
</section>
```

---

# 8. Parallax layer code mẫu

```tsx
useGSAP(
  () => {
    gsap.to(".parallax-slow", {
      y: -80,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".parallax-fast", {
      y: -180,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  },
  { scope: root }
);
```

Ý nghĩa:

```txt
Layer slow = background xa
Layer fast = object gần hơn
```

---

# 9. Mouse parallax nên để sau

Mouse parallax đẹp nhưng dễ lỗi nếu làm sớm. Chỉ dùng desktop.

```tsx
useGSAP(
  () => {
    const cards = gsap.utils.toArray<HTMLElement>(".mouse-layer");

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      cards.forEach((card, index) => {
        const depth = (index + 1) * 8;

        gsap.to(card, {
          x: x * depth,
          y: y * depth,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  },
  { scope: root }
);
```

Nhưng phase đầu **chưa cần**.

---

# 10. Bảng GSAP skill copy vào plan

M có thể copy nguyên bảng này vào checklist project:

| Skill                          | Status | Note                             |
| ------------------------------ | ------ | -------------------------------- |
| GSAP setup in React            | Todo   | Install `gsap` and `@gsap/react` |
| Hero timeline animation        | Todo   | Label → title → subtitle → CTA   |
| Floating background layers     | Todo   | Tags/cards float up and down     |
| ScrollTrigger section reveal   | Todo   | Reveal About, Projects, Process  |
| Project card stagger animation | Todo   | Cards appear one by one          |
| Scroll parallax hero layers    | Todo   | Slow/fast layers create depth    |
| Process line animation         | Todo   | Animate problem-solving flow     |
| Desktop mouse parallax         | Later  | Only after layout stable         |
| Mobile reduced animation       | Todo   | Disable heavy motion             |
| Performance cleanup            | Todo   | Use `useGSAP`, scope, cleanup    |

---

# 11. M nên build theo thứ tự này

Đừng nhảy vào làm full parallax ngay.

```txt
1. Build static layout trước
2. Add hero timeline
3. Add floating layer loop
4. Add scroll reveal cho section
5. Add project card reveal
6. Add parallax background
7. Add mouse parallax desktop
8. Optimize mobile
```

Lý do: nếu m làm animation trước khi layout ổn, code rất dễ rối.

---

# 12. Prompt cho AI/Codex khi m muốn nó build GSAP

Dán cái này cho Figma Make hoặc Codex đều được:

```txt
Implement GSAP animations for this React portfolio using a “Building in Layers” concept.

Use GSAP and @gsap/react with proper scoped useGSAP cleanup. Register ScrollTrigger.

Animation requirements:
1. Hero timeline:
- Fade/slide in label, title, subtitle, CTA buttons, and floating cards in sequence.
- Use gsap.timeline and stagger.

2. Floating background:
- Animate floating tags and mini cards with subtle up-and-down breathing motion.
- Use repeat: -1, yoyo: true, sine.inOut.
- Different durations and delays for each element.

3. Scroll reveal:
- Use ScrollTrigger to reveal sections and cards when entering viewport.
- Use opacity, y, duration, ease, and stagger.
- Apply to About, What I’m Building, Featured Projects, Process, Why Work With Me, Contact.

4. Parallax:
- Use ScrollTrigger with scrub for background layers.
- Slow movement for distant layers, stronger movement for near layers.
- Only apply strong parallax on desktop.

5. Process animation:
- Animate the process line from Understand → Shape → Build → Refactor → Use AI carefully.

6. Performance:
- Animate only transform and opacity.
- Avoid animating top/left/width/height.
- Respect prefers-reduced-motion.
- Disable mouse parallax and heavy scroll effects on mobile.
- Keep text readable and animations subtle.
```

---

# Kết luận ngắn

M không cần “biết hết GSAP”. Với portfolio này, m chỉ cần nắm:

```txt
Tween = animate một thứ
Timeline = animate nhiều thứ theo thứ tự
ScrollTrigger = animate theo scroll
Stagger = animate nhiều element lần lượt
Parallax = layer gần/xa chạy khác tốc độ
useGSAP/context = dùng GSAP sạch trong React
```

Đủ để build portfolio layer nổi lên/hạ xuống rồi.
Cái quan trọng là: **story trước, layout trước, animation sau**.

[1]: https://gsap.com/docs/v3/Installation/?utm_source=chatgpt.com "Installation | GSAP | Docs & Learning"
[2]: https://gsap.com/docs/v3/Plugins/ScrollTrigger/?utm_source=chatgpt.com "ScrollTrigger | GSAP | Docs & Learning"
[3]: https://gsap.com/resources/React/?utm_source=chatgpt.com "React & GSAP | GSAP | Docs & Learning"
