Đúng. Nhưng **không nên “cái gì cũng parallax”** vì sẽ rất nặng và dễ rối mắt. Portfolio của m nên dùng concept:

> **Building in Layers** — mỗi layer tượng trưng cho một phần m build product: Idea → Flow → UI → Database → API → Test → Deploy.

Dưới đây là bảng hoàn chỉnh để m dùng làm spec cho Figma Make / dev sau này.

---

## 1. Bảng kiến trúc layer background

| Layer | Tên layer          | Ý nghĩa story               | Thành phần visual                                     | Motion                        | Dùng GSAP?                | Độ ưu tiên |
| ----- | ------------------ | --------------------------- | ----------------------------------------------------- | ----------------------------- | ------------------------- | ---------- |
| 0     | Base Background    | Nền hệ thống / structure    | Dark background, subtle noise, grid mờ                | Gần như đứng yên              | Không cần, CSS là đủ      | Bắt buộc   |
| 1     | Ambient Glow       | Cảm giác chiều sâu / energy | Blob blur tím/xanh, radial gradient                   | Trôi rất chậm, scale nhẹ      | Có thể dùng GSAP hoặc CSS | Bắt buộc   |
| 2     | Structure Lines    | Kiến trúc / connection      | Line mảnh, node nhỏ, grid path                        | Di chuyển rất nhẹ theo scroll | GSAP nhẹ                  | Nên có     |
| 3     | Floating Keywords  | Cách m build sản phẩm       | Tags: Idea, Flow, UI, API, DB, Test, Deploy           | Nổi lên xuống, lệch nhịp      | GSAP tốt                  | Bắt buộc   |
| 4     | Product Fragments  | Project của m               | Mini card, mini browser window, note card, chart card | Parallax theo mouse + scroll  | GSAP                      | Bắt buộc   |
| 5     | Case Study Cards   | Proof / project showcase    | Finance, Unsaid Words, PingBall, Game Prototype cards | Stack nổi lên khi scroll      | GSAP ScrollTrigger        | Bắt buộc   |
| 6     | Foreground Content | Text chính                  | Hero title, subtitle, CTA                             | Reveal nhẹ, không quá bay     | GSAP reveal nhẹ           | Bắt buộc   |
| 7     | Micro Details      | Premium polish              | Cursor glow, small particles, border glow             | Rất nhẹ, optional             | Optional                  | Sau cùng   |

---

## 2. Bảng hiệu ứng cho từng layer

| Layer           | Hiệu ứng chính              |       Cường độ nên dùng | Timing            | Ghi chú                                    |
| --------------- | --------------------------- | ----------------------: | ----------------- | ------------------------------------------ |
| Grid background | Static hoặc drift rất nhẹ   |                   2–4px | 20–30s loop       | Đừng cho grid chạy mạnh, dễ chóng mặt      |
| Blurred blobs   | Float + scale               | 10–30px, scale 1 → 1.08 | 8–16s loop        | Nên blur lớn, opacity thấp                 |
| Lines/nodes     | Scroll parallax chậm        |                  5–15px | Theo scroll       | Tạo cảm giác system architecture           |
| Keyword tags    | Floating up/down            |                  8–20px | 5–10s loop        | Mỗi tag delay khác nhau                    |
| Mini cards      | Mouse parallax + float      |                 15–40px | Theo mouse + loop | Nên có blur/opacity khác nhau để tạo depth |
| Project cards   | Scroll reveal + stack shift |                 20–80px | Khi vào viewport  | Dùng cho Featured Projects                 |
| Main text       | Fade + y reveal             |                 20–40px | 0.6–1s            | Text phải dễ đọc, không animate quá nhiều  |
| CTA buttons     | Hover lift + glow           |                   2–6px | 0.2–0.3s          | Nhỏ thôi, professional hơn                 |

---

## 3. Bảng map visual với story của m

| Story của m                     | Visual nên dùng           | Layer phù hợp | Text/keyword đi kèm        |
| ------------------------------- | ------------------------- | ------------- | -------------------------- |
| M bắt đầu từ idea rối           | Floating messy cards      | Layer 3–4     | Rough Idea, Start, Explore |
| M biết biến idea thành flow     | Flow lines, arrows, nodes | Layer 2       | User Flow, Structure       |
| M build UI                      | Mini browser windows      | Layer 4       | Interface, Components      |
| M hiểu database/API             | Schema blocks, API tags   | Layer 2–4     | Database, API, Backend     |
| M biết test/deploy              | Terminal/code cards       | Layer 4       | Test, Deploy, Refactor     |
| M giúp người khác show strength | Portfolio cards nổi lên   | Layer 5       | Your Strengths, Your Story |
| M là AI-native builder          | Subtle AI nodes/glow      | Layer 1–2     | AI-assisted Workflow       |

---

## 4. Bảng section nào dùng hiệu ứng gì

| Section              | Mục tiêu              | Hiệu ứng nên dùng                                 | GSAP type                           | Ghi chú                               |
| -------------------- | --------------------- | ------------------------------------------------- | ----------------------------------- | ------------------------------------- |
| Hero                 | Gây ấn tượng đầu tiên | Multi-layer parallax, floating cards, text reveal | `gsap.to`, mouse parallax, timeline | Đây là nơi dùng effect mạnh nhất      |
| Who I Am             | Kể story cá nhân      | Text reveal theo đoạn, background chậm lại        | ScrollTrigger reveal                | Nên calm, dễ đọc                      |
| What I’m Building    | Show hướng build      | Cards nổi lên từng cái                            | Stagger reveal                      | Dùng card-based layout                |
| Featured Projects    | Proof mạnh nhất       | Project cards stack/parallax nhẹ                  | ScrollTrigger + stagger             | Không làm quá rối vì cần đọc nội dung |
| How I Solve Problems | Quy trình             | Horizontal flow line hoặc step reveal             | ScrollTrigger                       | Có thể animate line chạy qua các bước |
| Why Work With Me     | Trust section         | Fade in + subtle glow                             | Simple reveal                       | Nên nghiêm túc, ít hiệu ứng           |
| Portfolio Service    | CTA bán portfolio     | Before/after card hoặc floating strength cards    | ScrollTrigger                       | Nên làm nổi bật                       |
| Contact              | Chốt hành động        | CTA card lift + background glow                   | Hover + reveal                      | Rõ button GitHub/Email                |

---

## 5. Bảng GSAP effect nên dùng

| Effect                 | Dùng cho                      | Có cần không? | Gợi ý                                        |
| ---------------------- | ----------------------------- | ------------- | -------------------------------------------- |
| `gsap.fromTo()`        | Text reveal, card reveal      | Bắt buộc      | Dễ kiểm soát                                 |
| `gsap.timeline()`      | Hero entrance sequence        | Bắt buộc      | Cho title, subtitle, CTA, cards vào lần lượt |
| `ScrollTrigger`        | Section reveal, project cards | Bắt buộc      | Dùng nhiều nhưng vừa phải                    |
| `scrub`                | Parallax theo scroll          | Nên có        | Chỉ dùng cho background/card lớn             |
| `stagger`              | Cards/tags xuất hiện lần lượt | Bắt buộc      | Rất hợp portfolio                            |
| Mouse parallax         | Hero layer movement           | Nên có        | Chỉ desktop, tắt trên mobile                 |
| Infinite floating loop | Tags, blobs, mini cards       | Nên có        | Có thể làm bằng CSS hoặc GSAP                |
| Pin section            | Process hoặc Projects         | Optional      | Dùng ít, không pin quá nhiều                 |
| Text split animation   | Hero heading                  | Optional      | Nếu làm đẹp thì dùng, không bắt buộc         |
| Cursor glow            | Premium detail                | Optional      | Tắt trên mobile                              |

---

## 6. Bảng mức độ animation theo device

| Device               | Nên dùng                                                        | Không nên dùng                                     |
| -------------------- | --------------------------------------------------------------- | -------------------------------------------------- |
| Desktop              | Mouse parallax, scroll parallax, floating cards, stagger reveal | Quá nhiều particles, 3D nặng, blur quá lớn         |
| Tablet               | Scroll reveal, floating nhẹ, ít parallax hơn                    | Mouse parallax phức tạp                            |
| Mobile               | Fade/reveal đơn giản, card stack, background static/float nhẹ   | Mouse parallax, pinned section dài, quá nhiều blur |
| Low-performance mode | Tắt parallax, giữ text reveal nhẹ                               | Infinite animation nhiều layer                     |

---

## 7. Bảng z-index / depth chuẩn

| Depth          | Layer              | z-index |     Blur | Opacity |
| -------------- | ------------------ | ------: | -------: | ------: |
| Xa nhất        | Noise + grid       |       0 |        0 |  10–20% |
| Xa             | Glow blobs         |       1 | 40–100px |  20–40% |
| Trung bình     | Lines/nodes        |       2 |    0–4px |  15–35% |
| Trung bình gần | Floating tags      |       3 |    0–2px |  40–70% |
| Gần            | Mini project cards |       4 |    0–8px |  50–85% |
| Rất gần        | Main content       |      10 |        0 |    100% |
| Trên cùng      | Navbar / cursor    |   20–50 |        0 |    100% |

---

## 8. Bảng project visual fragment

| Project            | Mini visual fragment                            | Text nhỏ trên card       | Motion              |
| ------------------ | ----------------------------------------------- | ------------------------ | ------------------- |
| Finance Tracker V3 | Chart card, wallet balance, budget progress bar | Budget-first finance app | Float + slight tilt |
| Unsaid Words       | Anonymous note card, soft message bubble        | Anonymous support wall   | Float chậm, mềm     |
| PingBall           | Event badge, tournament bracket mini            | Event landing page       | Slide nhẹ           |
| First Game         | Shader square, pixel/grid, C# tag               | Game prototype           | Glow/scale nhẹ      |
| Portfolio Service  | Before/after profile card                       | Make strengths stand out | Lift khi scroll     |

---

## 9. Bảng animation priority

| Priority | Animation                  | Lý do                    |
| -------- | -------------------------- | ------------------------ |
| P0       | Hero text reveal           | Bắt buộc để landing mượt |
| P0       | Floating tags/cards        | Tạo concept “layers”     |
| P0       | Project card reveal        | Showcase phải đẹp        |
| P1       | Scroll parallax background | Tạo chiều sâu            |
| P1       | Process line animation     | Kể cách m solve problem  |
| P1       | CTA hover glow             | Tăng cảm giác premium    |
| P2       | Mouse parallax             | Đẹp nhưng không bắt buộc |
| P2       | Cursor glow                | Polish thêm              |
| P3       | Pin section                | Chỉ dùng nếu layout ổn   |
| P3       | Particle system            | Dễ nặng, chỉ thêm sau    |

---

## 10. Bảng performance rules

| Rule                                        | Lý do                                       |
| ------------------------------------------- | ------------------------------------------- |
| Không animate quá 20–30 element cùng lúc    | Tránh lag                                   |
| Ưu tiên `transform: translate/scale/rotate` | Mượt hơn top/left                           |
| Hạn chế blur lớn trên nhiều element         | Blur rất nặng                               |
| Mouse parallax chỉ bật desktop              | Mobile không cần                            |
| Respect `prefers-reduced-motion`            | Người dùng không thích motion vẫn dùng được |
| Background không được làm text khó đọc      | Content quan trọng hơn effect               |
| Dùng opacity thấp cho decorative layers     | Tránh rối                                   |
| Chỉ Hero nên nhiều effect                   | Các section sau cần đọc dễ                  |
| Không dùng pin section quá dài              | Dễ gây khó chịu khi scroll                  |
| Lazy-load heavy sections                    | Tối ưu performance                          |

---

## 11. Bảng layout tổng thể nên build

| Section           | Layout                                     | Background layer        | Motion level   |
| ----------------- | ------------------------------------------ | ----------------------- | -------------- |
| Hero              | Center/left text + floating cards sau lưng | Full multi-layer        | Cao            |
| Who I Am          | 2 columns: story + quick facts             | Grid/glow nhẹ           | Thấp           |
| What I’m Building | 6 cards grid                               | Tags float nhẹ          | Trung bình     |
| Featured Projects | Big case-study cards                       | Project fragments       | Trung bình-cao |
| Process           | Horizontal/vertical timeline               | Animated line           | Trung bình     |
| Why Work With Me  | Text + trust cards                         | Minimal glow            | Thấp           |
| Portfolio Service | CTA card lớn                               | Floating strength cards | Trung bình     |
| Contact           | Large final CTA                            | Glow + simple cards     | Thấp           |

---

## 12. Bảng content + visual kết hợp

| Text                                                          | Visual đi kèm                                           |
| ------------------------------------------------------------- | ------------------------------------------------------- |
| “I turn rough ideas into usable full-stack products.”         | Các layer floating từ messy cards thành organized cards |
| “I am learning how to build complete products.”               | Flow: Idea → UI → DB → API → Deploy                     |
| “Everyone has their own strengths.”                           | Floating profile/portfolio cards                        |
| “I help shape the story.”                                     | Text blocks/card chuyển từ rối sang rõ                  |
| “I do not only build pages.”                                  | Split view: page UI + system architecture behind it     |
| “Let’s turn your story into a portfolio people can remember.” | CTA card nổi lên phía trước                             |

---

## 13. Prompt cho Figma Make

Dán prompt này vào Figma Make:

```txt
Create a modern personal portfolio website for Nguyen Tam Duc with a “Building in Layers” concept.

The website should feel like a thoughtful AI-native full-stack product builder portfolio. Use a clean black/white visual style with subtle purple or blue accent. The design should be personal, modern, premium, and story-driven, not generic corporate.

Main visual idea:
Use a multi-layer floating background that represents how a product is built from many layers: Idea, Flow, UI, Database, API, Testing, Deploy, Refactor.

Create layered depth:
- Base dark background with subtle grid and noise
- Soft blurred gradient blobs
- Thin system lines and nodes
- Floating keyword tags such as Idea, Flow, UI, API, DB, Test, Deploy, Refactor
- Floating mini UI fragments such as finance chart card, anonymous note card, event landing card, shader/game card
- Main content in the foreground with strong readability

Motion direction:
Design the UI so it can support GSAP animations later:
- Subtle up-and-down breathing motion for tags and cards
- Different layers moving at different speeds for parallax depth
- Hero text reveal animation
- Project cards reveal on scroll
- Process section with animated flow line
- CTA cards with hover lift and subtle glow
- Mouse parallax only on desktop
- Mobile should use simplified static/fade animations

Sections:
1. Hero
Heading: “I turn rough ideas into usable full-stack products.”
Subheading: “I’m Nguyen Tam Duc, a CSE student from Da Nang building full-stack web apps, portfolio websites, emotional digital experiences, and game-inspired prototypes.”
Buttons: View Projects, Work With Me, GitHub
Quick facts: GPA 3.7, Da Nang Viet Nam, TypeScript, React, Next.js, Supabase, PostgreSQL

2. Who I Am
Tell a short personal story about starting with messy ideas, learning through real projects, and becoming a developer who builds complete products, not only UI.

3. What I’m Building
Create cards for Full-stack web apps, Portfolio websites, Finance tools, Emotional web experiences, Event landing pages, Game-inspired prototypes.

4. Featured Projects
Use case-study style cards with Problem, Solution, My Role, Stack.
Projects:
- Finance Tracker V3: budget-first personal finance app. Role: Team Lead, Backend, Database, Architecture.
- Unsaid Words, Shared Hearts: anonymous note wall with comfort replies and supporter moderation. Role: Creator, Product Flow, Frontend, Supabase data layer.
- PingBall Landing Page: student event landing page for tournament information and registration. Role: Frontend developer and layout planner.
- First Game Prototype: early game development experiment with ShaderLab, HLSL, C#, and interaction.

5. How I Solve Problems
Show process: Understand the problem → Shape the flow → Build the system → Refactor and improve → Use AI carefully.

6. Why Work With Me
Message: “I do not only build pages. I help shape the story, structure the message, solve the real problem, and turn unclear ideas into something people can understand and trust.”

7. Portfolio Website Service
Heading: “Your strengths deserve a website that shows them clearly.”
Explain that Tam Duc builds portfolio websites for students, developers, creators, and small project owners who want to present their story, skills, and projects better.
CTA: “Let’s turn your story into a portfolio people can remember.”

8. Contact
Heading: “Let’s build something useful.”
Buttons: GitHub, Email, Contact Me.

Design requirements:
- Strong typography
- Clean responsive layout
- Sticky navbar
- Layered floating background
- Project cards like case studies
- Clear CTA sections
- Good whitespace
- Mobile-friendly design
- Avoid too many colors
- Make text highly readable over the background
```

---

## 14. Kết luận hướng build

T khuyên m build theo mức này:

| Giai đoạn | Làm gì                                       |
| --------- | -------------------------------------------- |
| Phase 1   | Layout + content + static layered background |
| Phase 2   | Thêm floating animation cho tags/cards       |
| Phase 3   | Thêm GSAP ScrollTrigger cho project/process  |
| Phase 4   | Thêm mouse parallax desktop                  |
| Phase 5   | Optimize mobile + reduced motion             |

Cách này an toàn hơn là nhảy vào làm full GSAP ngay từ đầu. Portfolio của m cần **story rõ trước**, effect chỉ là thứ làm story nổi lên.
