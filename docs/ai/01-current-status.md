# Current Status

## Project Type

* Story-driven personal portfolio
* Creative single-page portfolio scaffold
* Current priority: creative portfolio stabilization

## Runtime Status

* Runtime path:
  index.html -> src/main.tsx -> src/app/App.tsx -> src/app/portfolio/*
* Actual route map:
  single route: /
* Router:
  no runtime router setup currently

## Latest Completed Tasks

* T-001 Portfolio Runtime & Scaffold Triage Report completed.
* T-002 Runtime section locator attributes completed.
* T-STITCH-002 ProcessSection Upgrade completed.
* T-STITCH-003 ServiceSection Upgrade completed.
* T-STITCH-004 Projects Laboratory enhancement completed.
* T-STITCH-005 Small visual fix and copy update completed.
* T-004 remaining runtime marketing copy extraction completed.
* T-006 asset registry normalization completed.
* T-008 motion cursor requestAnimationFrame cleanup completed.
* T-009 BootScreen accessibility and destination fix completed.
* npm run build passed after T-002.
* npm run build passed after T-004.
* npm run build passed after T-006.
* npm run build passed after T-008.
* npm run build passed after T-009.
* Build warning: Vite chunk size warning for large chunks.

## Current Runtime Sections

* App
* Nav
* Hero
* OriginSection
* ProjectsSection
* ProcessSection
* ServiceSection
* ContactSection
* Footer
* BootScreen
* ThreeBackgroundLoader
* ThreeBackground conditional/lazy

## Current Priorities

1. Keep runtime portfolio stable.
2. Avoid large refactors.
3. Avoid deleting scaffold until verified.
4. Avoid dependency cleanup until runtime/scaffold boundary is documented.
5. Avoid backend/Supabase/admin until creative portfolio is stable.

## Deferred

* Supabase
* Backend lead capture
* Admin dashboard
* Auth
* RLS
* Dependency cleanup
* Scaffold deletion
* Large CSS split
* Large motion refactor
* Route conversion

## Known Risks

* Worktree is dirty from earlier work.
* src/styles/theme.css is large and high-risk.
* usePortfolioMotion.ts is medium/high complexity.
* Cursor dot requestAnimationFrame now cancels on cleanup.
* ThreeBackground.tsx is guarded but performance-sensitive.
* Several scaffold folders and dependencies are likely unused but not ready for deletion.
* portfolioMedia.ts has been normalized to avoid known missing public media references.
* BootScreen destination id mismatch fixed (services → service).
* BootScreen module list items now use semantic button elements.
* BootScreen reduced-motion skips GSAP fade and uses instant scroll.
* Some expected future media assets are still documented but intentionally not referenced yet.

## Next Recommended Patch

Recommend one of:

* Three.js WebGL failure fallback (T-010)
* Scaffold cleanup verification
* Dependency usage verification
