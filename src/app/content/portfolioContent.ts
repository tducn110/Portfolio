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
};

export type Project = {
  name: string;
  type: string;
  problem: string;
  solution: string;
  role: string;
  stack: string;
  themeColor?: string;
  link?: string;
  status: "shipped" | "experiment" | "prototype" | "refactor";
};

export type ProcessStep = {
  label: string;
  title: string;
  body: string;
  points: string[];
  icon: "brain" | "layout" | "code" | "refresh";
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
    body: "I started with small, real projects — a student event landing page, an anonymous support wall, a finance tool, and an early game prototype. The point was never polish first. It was learning how to turn uncertainty into a working first version, then improving from there.",
  },
  {
    icon: "database",
    title: "System Thinking",
    body: "A usable product needs more than a screen. I think through user flow, schema design, API structure, validation, testing, deployment, and the refactor that makes the next version easier. Every layer connects.",
  },
  {
    icon: "pen",
    title: "Story And Structure",
    body: "I believe everyone has their own strength. A good portfolio should make those strengths visible — showing progress, decisions, projects, and the kind of problems a person can solve. That's why I build them.",
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
    name: "Font of Intent",
    type: "Vercel Project",
    problem: "When building modern web apps, managing custom fonts and layout intent across components can become messy and fragmented.",
    solution: "A streamlined approach to applying intent-based typography, deployed via Vercel for instant preview and performance.",
    role: "Developer",
    stack: "React, Next.js, Vercel, Typography Systems",
    themeColor: "220 10% 40%", /* slate/gray */
    link: "https://github.com/tducn110/Font-of-Intent",
    status: "shipped",
  },
  {
    name: "Finance Tracker V3",
    type: "Budget-first finance app",
    problem:
      "Most expense trackers record what already happened. This project asks what is safe to spend before the transaction happens.",
    solution:
      "Budgets, wallets, recurring bills, savings goals, analytics, and AI Quick Add connect into one planning-first money system.",
    role: "Team lead, backend, database, architecture",
    stack: "Next.js, TypeScript, Hono, Zod, Supabase PostgreSQL, Drizzle, Turborepo",
    themeColor: "160 60% 40%", /* green/mint */
    link: "https://finance-for-me-local.vercel.app",
    status: "shipped",
  },
  {
    name: "Unsaid Words, Shared Hearts",
    type: "Anonymous support wall",
    problem:
      "Some thoughts are hard to say out loud. The experience needed to feel quiet, anonymous, and protected — a safe place to let words exist.",
    solution:
      "Notes, comfort replies, and supporter moderation create a controlled public wall for emotional expression without judgment.",
    role: "Creator, product flow, frontend, Supabase data layer",
    stack: "React, Supabase, Postgres, RPC flows, moderation states",
    themeColor: "260 50% 60%", /* lavender/purple */
    link: "https://unsaidwords.vercel.app",
    status: "shipped",
  },
  {
    name: "PingBall Landing Page",
    type: "Student event page",
    problem:
      "A tournament needs clear registration, schedule, rules, and trust — without overloading visitors with noise.",
    solution:
      "A fast, readable layout that respects the user's time. Clear hierarchy, rules section, and a simple registration flow.",
    role: "Frontend logic, structure, styling",
    stack: "React, responsive design patterns",
    themeColor: "25 80% 50%", /* orange */
    link: "https://pingball.vercel.app",
    status: "shipped",
  },
  {
    name: "First Game Prototype",
    type: "Interaction experiment",
    problem:
      "Game interfaces need fast feedback, clear states, and interaction rules that feel learnable — not just functional.",
    solution:
      "A basic system that loads assets, runs a game loop, and handles collisions in the browser.",
    role: "Game loop, canvas rendering, collision math",
    stack: "HTML Canvas, Vanilla JS, RequestAnimationFrame",
    themeColor: "350 60% 50%", /* red */
    status: "prototype",
  },
];

export type PipelineStep = {
  step: string;
  status: string;
  active?: boolean;
};

export const projectPipeline: PipelineStep[] = [
  { step: "Understand", status: "Completed" },
  { step: "Shape", status: "Completed" },
  { step: "Build", status: "In Progress (68%)", active: true },
  { step: "Refactor", status: "Pending" }
];


export const processSteps: ProcessStep[] = [
  {
    label: "PHASE 01",
    title: "Understand",
    body: "Before writing any code, I define the problem space. A good portfolio or product needs to tell a clear story, not just show features.",
    points: [
      "Extracting the core narrative",
      "Mapping the user journey",
      "Defining technical constraints"
    ],
    icon: "brain"
  },
  {
    label: "PHASE 02",
    title: "Shape",
    body: "Turning messy ideas into a structured system. This is where the database schema, API contracts, and UI flow are planned.",
    points: [
      "Data flow and schema design",
      "Component hierarchy mapping",
      "AI-assisted architecture planning"
    ],
    icon: "layout"
  },
  {
    label: "PHASE 03",
    title: "Build",
    body: "Shipping the first working version fast. I focus on clean structure and deterministic logic over premature optimization.",
    points: [
      "TypeScript & React implementation",
      "Full-stack integration (Next.js/Supabase)",
      "Responsive, story-driven UI rendering"
    ],
    icon: "code"
  },
  {
    label: "PHASE 04",
    title: "Refactor",
    body: "Cleaning the rough edges and preparing for handoff. A project isn't done until the codebase is legible and edge cases are tested.",
    points: [
      "Trimming conceptual fat and unused code",
      "Performance and accessibility audits",
      "Handoff documentation and deployment"
    ],
    icon: "refresh"
  }
];

export const trustPoints = [
  "Product thinking, not only coding",
  "Fast learning and honest adaptation",
  "Responsible from idea to delivery",
  "Comfortable across UI, backend, database, and deployment",
];

export type StackLayer = {
  label: string;
  title: string;
  body: string;
  icon: "layers" | "database" | "server";
  techs: string[];
};

export const stackLayers: StackLayer[] = [
  {
    label: "LAYER 01",
    title: "Frontend Interface",
    body: "Crafting highly responsive, accessible, and performant user interfaces. Emphasizing typography, space, and motion to create editorial-grade experiences.",
    icon: "layers",
    techs: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    label: "LAYER 02",
    title: "Backend Logic",
    body: "Developing resilient API architectures and secure data handling mechanisms designed for scale and maintainability.",
    icon: "database",
    techs: ["Next.js", "Supabase", "Zod", "PostgreSQL"],
  },
  {
    label: "LAYER 03",
    title: "Infrastructure",
    body: "Architecting cloud environments and deployment strategies ensuring high availability and zero-downtime updates.",
    icon: "server",
    techs: ["Vercel", "GitHub Actions", "Docker", "AWS"],
  }
];

export type ProtocolStep = {
  step: string;
  title: string;
  body: string;
};

export const collaborationProtocol: ProtocolStep[] = [
  {
    step: "01",
    title: "Discovery Brief",
    body: "A comprehensive discussion outlining architecture decisions, stack selection, and scalability models before writing a single line of code.",
  },
  {
    step: "02",
    title: "Structure & Prototype",
    body: "Mapping out the user flow and database schema. Building a clickable shell to validate assumptions early.",
  },
  {
    step: "03",
    title: "Build & Refactor",
    body: "Shipping functional features iteratively. Cleaning the codebase continuously to maintain structural integrity.",
  },
  {
    step: "04",
    title: "Production Handoff",
    body: "Thorough editorial-grade documentation covering codebase structure, deployment pipelines, and API references for internal maintenance.",
  }
];

export const heroContent = {
  flowAriaLabel: "Product building flow diagram",
  processorLabel: "Normalize",
  processorStatuses: ["Event", "Ingest", "Route", "Refactor"],
  eyebrow: "CSE student / full-stack builder / AI-assisted workflow",
  titleLines: ["I shape rough ideas into", "products people can use."],
  body: "I'm Nguyen Tam Duc — a Computer Science and Engineering student from Da Nang. I may not know everything deeply at first, but I start moving early, learn fast, adapt, and build until the product works.",
  actions: {
    projects: {
      label: "View Projects",
      href: "#projects",
    },
    service: {
      label: "Work With Me",
      href: "#service",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/tducn110",
    },
  },
} as const;

export const serviceSectionContent = {
  stackTitle: "The Stack Architecture",
  stackKicker: "01 // STRUCTURAL OVERVIEW",
  protocolTitle: "Collaboration Protocol.",
  protocolBody: "My process is structured, transparent, and driven by continuous delivery. I work closely with you to understand the problem before building the solution.",
} as const;

export const serviceCta = {
  kicker: "NTD TECHNICAL EDITORIAL",
  title: "Start a Project.",
  body: "I am open to new full-stack development projects. Tell me what you want to build, and I can help turn your idea into a clean interactive web experience.",
  buttonLabel: "Project Inquiry",
  buttonHref: "#contact"
} as const;

export const contactSectionContent = {
  eyebrow: "Contact",
  title: "Let’s build something that matters.",
  body: "Bring a rough idea, a project that needs structure, or a portfolio story that’s hard to explain — I’ll help shape it into something clear and usable.",
  links: {
    email: {
      label: "n.tduc011006dn@gmail.com",
      href: "mailto:n.tduc011006dn@gmail.com",
    },
    github: {
      label: "github.com/tducn110",
      href: "https://github.com/tducn110",
    },
    location: {
      label: "Da Nang, Viet Nam",
    },
  },
} as const;

export const footerContent = {
  name: "Nguyen Tam Duc",
  body: "CSE student and early-stage product builder. I start moving when projects begin.",
} as const;

