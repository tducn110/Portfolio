export type NavLink = {
  label: string;
  href: string;
};

export type HeroFact = {
  label: string;
  value: string;
};

export type BuildCard = {
  icon: "layers" | "database" | "pen";
  title: string;
  body: string;
  mediaKey: "origin" | "systemThinking" | "storyStructure";
};

export type Project = {
  name: string;
  type: string;
  mediaKey: "financeTracker" | "unsaidWords" | "pingball" | "gamePrototype";
  problem: string;
  solution: string;
  role: string;
  stack: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type ServiceDetail = {
  title: string;
  body: string;
};

export const navLinks: NavLink[] = [
  { label: "Origin", href: "#origin" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

export const facts: HeroFact[] = [
  { label: "GPA", value: "3.7 / 4.0" },
  { label: "Base", value: "Da Nang, Viet Nam" },
  { label: "Focus", value: "Full-stack product building" },
  { label: "Stack", value: "TypeScript, React, Next.js, Supabase" },
];

export const sourceTags = [
  "Rough idea",
  "User story",
  "UI flow",
  "Database",
  "API contract",
  "Test cases",
  "AI notes",
];

export const destinationTags = [
  "Full-stack app",
  "Portfolio site",
  "Event launch",
  "Support wall",
  "Game prototype",
];

export const buildCards: BuildCard[] = [
  {
    icon: "layers",
    title: "Origin",
    body: "I started with small, real projects: a student event landing page, an anonymous support wall, a finance tool, and an early game prototype. The point was not polish first. It was learning how to turn uncertainty into a working first version.",
    mediaKey: "origin",
  },
  {
    icon: "database",
    title: "System Thinking",
    body: "A usable product needs more than a screen. I think through user flow, schema design, API structure, validation, testing, deployment, and the refactor that makes the next version easier.",
    mediaKey: "systemThinking",
  },
  {
    icon: "pen",
    title: "Story And Structure",
    body: "I also build portfolio websites because a good page should make strengths visible. It should show progress, decisions, projects, and the kind of problems a person can solve.",
    mediaKey: "storyStructure",
  },
];

export const capabilities = [
  "Full-stack web apps",
  "Portfolio websites",
  "Finance tools",
  "Event landing pages",
  "Emotional web spaces",
  "Game-inspired interfaces",
];

export const projects: Project[] = [
  {
    name: "Finance Tracker V3",
    type: "Budget-first finance app",
    mediaKey: "financeTracker",
    problem:
      "Most expense trackers record what already happened. This project asks what is safe to spend before the transaction happens.",
    solution:
      "Budgets, wallets, recurring bills, savings goals, analytics, and AI Quick Add connect into one planning-first money system.",
    role: "Team lead, backend, database, architecture",
    stack: "Next.js, TypeScript, Hono, Zod, Supabase PostgreSQL, Drizzle, Turborepo",
  },
  {
    name: "Unsaid Words, Shared Hearts",
    type: "Anonymous support wall",
    mediaKey: "unsaidWords",
    problem:
      "Some thoughts are hard to say out loud. The experience needed to feel quiet, anonymous, and protected.",
    solution:
      "Notes, comfort replies, and supporter moderation create a controlled public wall for emotional expression.",
    role: "Creator, product flow, frontend, Supabase data layer",
    stack: "React, Supabase, Postgres, RPC flows, moderation states",
  },
  {
    name: "PingBall Landing Page",
    type: "Student event page",
    mediaKey: "pingball",
    problem:
      "A tournament needs clear registration, schedule, rules, and trust without overloading visitors.",
    solution:
      "A direct event landing page organizes tournament details into a simple path from interest to signup.",
    role: "Frontend developer and layout planner",
    stack: "React, responsive layout, event information architecture",
  },
  {
    name: "First Game Prototype",
    type: "Interaction experiment",
    mediaKey: "gamePrototype",
    problem:
      "Game interfaces need fast feedback, clear states, and interaction rules that feel learnable.",
    solution:
      "A small prototype explored shaders, HLSL, C#, and interaction loops as a way to understand game feel.",
    role: "Prototype builder",
    stack: "C#, HLSL, shader experiments, interaction systems",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Understand",
    body: "Find the real problem, the audience, and the first useful outcome.",
  },
  {
    title: "Shape",
    body: "Turn messy input into a user flow, content structure, and system map.",
  },
  {
    title: "Build",
    body: "Ship the interface, data model, API boundaries, and first working version.",
  },
  {
    title: "Refactor",
    body: "Clean the rough edges, test the assumptions, and make the system easier to grow.",
  },
  {
    title: "Use AI Carefully",
    body: "Use AI for research, iteration, and review while keeping product decisions intentional.",
  },
];

export const trustPoints = [
  "Product thinking, not only coding",
  "Fast learning and adaptation",
  "Responsible from idea to delivery",
  "Comfortable across UI, backend, database, and deployment",
];

export const serviceDetails: ServiceDetail[] = [
  {
    title: "What I build",
    body: "Portfolio websites, project case studies, student/developer pages, and small landing pages.",
  },
  {
    title: "What you get",
    body: "A clear story, stronger project proof, responsive UI, and a structure that is easier to present.",
  },
  {
    title: "How we work",
    body: "Audit the raw material, shape the narrative, build the page, then polish details that affect trust.",
  },
];
