import type { GeneratedProofVariant } from "../portfolio/GeneratedProof";

export type PortfolioMedia = {
  type: "image" | "video" | "iframe";
  src?: string;
  sources?: Array<{
    src: string;
    type: string;
  }>;
  poster?: string;
  alt: string;
  label?: string;
  generatedVariant?: GeneratedProofVariant;
};

export const portfolioMedia = {
  hero: {
    type: "video",
    alt: "Portfolio product workflow preview",
    label: "Product workflow preview",
    generatedVariant: "hero-flow",
  },
  origin: {
    type: "image",
    alt: "Early student projects and product experiments",
    label: "Early projects",
    generatedVariant: "story-structure",
  },
  systemThinking: {
    type: "image",
    alt: "User flow, API structure, database and testing diagram",
    label: "System thinking map",
    generatedVariant: "system-map",
  },
  storyStructure: {
    type: "image",
    alt: "Before and after portfolio story structure preview",
    label: "Story structure proof",
    generatedVariant: "story-structure",
  },
  service: {
    type: "image",
    alt: "Portfolio service proof and before-after structure",
    label: "Portfolio proof system",
    generatedVariant: "service-proof",
  },
  projects: {
    fontOfIntent: {
      type: "video",
      src: "/media/portfolio/font-of-intent-loop.webm",
      sources: [{ src: "/media/portfolio/font-of-intent-loop.webm", type: "video/webm" }],
      poster: "/media/portfolio/font-of-intent-poster.png",
      alt: "Font of Intent project preview",
      label: "Font of Intent system",
      generatedVariant: "font-of-intent",
    },
    financeTracker: {
      type: "image",
      src: "/media/portfolio/finance-tracker-poster.png",
      alt: "Finance Tracker dashboard preview",
      label: "Budget-first finance app",
      generatedVariant: "finance-dashboard",
    },
    unsaidWords: {
      type: "image",
      src: "/media/portfolio/unsaid-words-poster.png",
      alt: "Unsaid Words Shared Hearts support wall preview",
      label: "Anonymous support wall",
      generatedVariant: "support-wall",
    },
    pingball: {
      type: "image",
      src: "/media/portfolio/pingball-poster.png",
      alt: "PingBall event landing page preview",
      label: "Student event landing page",
      generatedVariant: "event-landing",
    },
    gamePrototype: {
      type: "image",
      alt: "First game prototype interface preview",
      label: "Game prototype",
      generatedVariant: "game-interface",
    },
  },
} satisfies {
  hero: PortfolioMedia;
  origin: PortfolioMedia;
  systemThinking: PortfolioMedia;
  storyStructure: PortfolioMedia;
  service: PortfolioMedia;
  projects: Record<string, PortfolioMedia>;
};
