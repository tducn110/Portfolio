# Portfolio Media Asset Plan

Generated HTML/CSS proof visuals are the current fallback for every media slot.
Real assets can be added later without changing section components because
`src/app/content/portfolioMedia.ts` already owns the paths and fallback variants.

## Expected Files

| Path | Type | Where Used | Recommended Content |
| --- | --- | --- | --- |
| `/media/portfolio/hero-poster.png` | Image | Hero fallback poster | Clean still frame of the portfolio/product workflow: rough input, process node, shipped outputs. |
| `/media/portfolio/hero-loop.webm` | Video | Hero primary video | Short silent loop showing the workflow system, data dots, or product-building pipeline. |
| `/media/portfolio/hero-loop.mp4` | Video | Hero secondary video | MP4 copy of the hero loop for browsers that do not prefer WebM. |
| `/media/portfolio/origin-projects.png` | Image | Origin card | Collage or structured proof of early projects: PingBall, Unsaid Words, finance app, game prototype. |
| `/media/portfolio/system-thinking-diagram.png` | Image | System Thinking card | Diagram showing user flow, API boundary, database, validation, tests, and deployment. |
| `/media/portfolio/story-structure.png` | Image | Story And Structure card | Before/after portfolio wireframe or narrative structure map. |
| `/media/portfolio/finance-tracker-poster.png` | Image | Finance Tracker project | Dashboard screenshot/poster with wallets, budgets, AI Quick Add, savings, analytics. |
| `/media/portfolio/unsaid-words-poster.png` | Image | Unsaid Words project | Anonymous note wall, comfort replies, and moderation state preview. |
| `/media/portfolio/pingball-poster.png` | Image | PingBall project | Event landing page screenshot with registration, schedule, rules, and venue details. |
| `/media/portfolio/game-prototype-poster.png` | Image | Game Prototype project | Gameplay interface or prototype HUD showing interaction/shader feedback. |
| `/media/portfolio/service-proof.png` | Image | Service section | Before/after portfolio audit, checklist, or project-story transformation proof. |

## Replacement Rules

- Hero may use video; project sections should mostly use screenshots or posters.
- Do not convert every section into video.
- Keep screenshots quiet and readable. Avoid dark, cropped, stock-like mockups.
- Keep generated proof variants as fallback until every real asset is present.
- Update only `portfolioMedia.ts` when paths or media type change.
