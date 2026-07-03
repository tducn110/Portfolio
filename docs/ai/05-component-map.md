# Component Map

## Runtime Entry Map

index.html
-> src/main.tsx
-> src/app/App.tsx
-> src/app/portfolio/*

## Rendered Component Tree

App
-> BootScreen
-> ThreeBackgroundLoader
-> ThreeBackground conditional/lazy
-> Nav
-> main
-> Hero
-> MediaFrame
-> GeneratedProof fallback conditional
-> OriginSection
-> FeatureCard
-> MediaFrame
-> ProjectsSection
-> ProjectCard
-> MediaFrame
-> GeneratedProof fallback conditional
-> ProcessSection
-> ServiceSection
-> MediaFrame
-> ContactSection
-> Footer
-> BrainCircuit ambient mark

## Locator Attributes

The following runtime elements now have data-component and data-file attributes:

* App: src/app/App.tsx
* Nav: src/app/portfolio/Nav.tsx
* Hero: src/app/portfolio/Hero.tsx
* OriginSection: src/app/portfolio/OriginSection.tsx
* ProjectsSection: src/app/portfolio/ProjectsSection.tsx
* ProcessSection: src/app/portfolio/ProcessSection.tsx
* ServiceSection: src/app/portfolio/ServiceSection.tsx
* ContactSection: src/app/portfolio/ContactSection.tsx
* Footer: src/app/portfolio/Footer.tsx

## Runtime Content Owners

* Nav labels: src/app/content/portfolioContent.ts
* Project data: src/app/content/portfolioContent.ts
* Origin cards/capabilities: src/app/content/portfolioContent.ts
* Process steps: src/app/content/portfolioContent.ts
* Service details/trust points: src/app/content/portfolioContent.ts
* Hero marketing copy/CTA labels: src/app/content/portfolioContent.ts
* Service heading/CTA copy: src/app/content/portfolioContent.ts
* Contact copy/contact links: src/app/content/portfolioContent.ts
* Footer short copy: src/app/content/portfolioContent.ts
* Generated proof labels/text: src/app/content/portfolioContent.ts
* Media paths and generated fallback variants: src/app/content/portfolioMedia.ts

## Remaining Hardcoded Runtime Copy

Runtime marketing copy from the Phase 4 target components has been moved into src/app/content/portfolioContent.ts.

Current content registry exports include:

* heroContent
* serviceSectionContent
* contactSectionContent
* footerContent
* generatedProofContent
* stackLayers
* collaborationProtocol
* serviceCta
* projectPipeline

Known remaining hardcoded runtime copy:

* No known remaining marketing copy in Hero, ServiceSection, ContactSection, Footer, or GeneratedProof.
* Non-marketing technical strings may still exist in runtime components and should be traced before moving.

## Runtime Motion Owners

* Main GSAP orchestration and cursor RAF cleanup: src/app/hooks/usePortfolioMotion.ts
* Boot/loading animation: src/app/portfolio/BootScreen.tsx
* Lazy Three gate: src/app/portfolio/ThreeBackgroundLoader.tsx
* WebGL background: src/app/portfolio/ThreeBackground.tsx
* Video/image fallback behavior: src/app/portfolio/MediaFrame.tsx
* CSS keyframes/responsive visuals: src/styles/theme.css

## Runtime Motion Status

* usePortfolioMotion.ts cancels the cursor dot requestAnimationFrame loop during cleanup.
* BootScreen destination id mismatch fixed (services → service).
* BootScreen module destinations now use semantic button elements with role="menuitem".
* BootScreen completeBoot skips GSAP fade under prefers-reduced-motion.
* BootScreen "Enter Portfolio Normally" prompt is now a semantic button element.
* BootScreen root element has role="dialog" and aria-label.
* ThreeBackground WebGL failure fallback remains deferred.

## Runtime Media Status

* portfolioMedia.ts has been normalized to avoid referencing known missing public media files.
* Missing hero/origin/system/story/service/game media slots currently rely on GeneratedProof fallbacks.
* Existing project posters remain wired for Finance Tracker, Unsaid Words, and PingBall.
* Existing Font of Intent video/poster assets are wired through portfolioMedia.ts.
* Test capture assets under public/media/portfolio/font-of-intent-test*.png remain artifact candidates and must not be deleted without browser verification.

## Scaffold / Non-Runtime Candidates

Do not delete yet.

* src/app/components/*
* src/app/components/ui/*
* src/app/components/figma/ImageWithFallback.tsx
* src/imports/pasted_text/*
* default_shadcn_theme.css
* record_font_of_intent*.mjs
* test_font*.mjs/js
* test_crop*.mjs
* repomix-output.xml
* extracted_colors.json
* public/media/portfolio/font-of-intent-test*.png

## Do Not Touch Without Trace

* src/styles/theme.css
* src/app/hooks/usePortfolioMotion.ts
* src/app/portfolio/ThreeBackground.tsx
* package.json
* lock files
* src/app/components/ui/*
* public/media/portfolio/*
