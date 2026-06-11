import type { GeneratedProofVariant } from "../portfolio/GeneratedProof";

export type PortfolioMedia = {
  type: "image" | "video";
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
    src: "/media/portfolio/hero-loop.webm",
    sources: [
      { src: "/media/portfolio/hero-loop.webm", type: "video/webm" },
      { src: "/media/portfolio/hero-loop.mp4", type: "video/mp4" },
    ],
    poster: "/media/portfolio/hero-poster.png",
    alt: "Portfolio product workflow preview",
    label: "Product workflow preview",
    generatedVariant: "hero-flow",
  },
  origin: {
    type: "image",
    src: "/media/portfolio/origin-projects.png",
    alt: "Early student projects and product experiments",
    label: "Early projects",
    generatedVariant: "story-structure",
  },
  systemThinking: {
    type: "image",
    src: "/media/portfolio/system-thinking-diagram.png",
    alt: "User flow, API structure, database and testing diagram",
    label: "System thinking map",
    generatedVariant: "system-map",
  },
  storyStructure: {
    type: "image",
    src: "/media/portfolio/story-structure.png",
    alt: "Before and after portfolio story structure preview",
    label: "Story structure proof",
    generatedVariant: "story-structure",
  },
  service: {
    type: "image",
    src: "/media/portfolio/service-proof.png",
    alt: "Portfolio service proof and before-after structure",
    label: "Portfolio proof system",
    generatedVariant: "service-proof",
  },
  projects: {
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
      src: "/media/portfolio/game-prototype-poster.png",
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
