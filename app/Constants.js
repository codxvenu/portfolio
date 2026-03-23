 import {
  Goal,
  IconArchitecture,
  IconContext,
  IconDesign,
  IconDirection,
  IconInfra,
  IconLearning,
  IconWorkflow,
  Intro,
  PIntro,
  Projects,
  Qoute,
  Stack,
} from "@/app/component/icons";
  export const posts = [
    {
      Icon: <Intro />,
      category: "Introduction",
      username: "@VenuSharma",
      time: "Now",
      skills: {
        "Full-stack JavaScript Engineer": "",
      },
      text: `Hello,My name is Venu Sharma.
iLove To work on creative ideas , Building Structures and exploring new things.
iThink • iLearn • iBuild`,
    },
    {
      Icon: <Stack />,
      category: "Stack",
      username: "@Stack",
      time: "Now",
      skills: {
        frontend: "https://dzdw2zccyu2wu.cloudfront.net/overview/Frontend.svg",

        backend: "https://dzdw2zccyu2wu.cloudfront.net/overview/Backend.svg",

        tools: "https://dzdw2zccyu2wu.cloudfront.net/overview/Tools&DevOps.svg",

        cloud:
          "https://dzdw2zccyu2wu.cloudfront.net/overview/Cloud&Integration.svg",
      },
      conclusion: {
        content: "Always exploring better tools, patterns, and systems.",
      },
    },
    {
      Icon: <Projects />,
      category: "Projects",
      username: "@Projects",
      time: "2d",
      threadOf: "Engineering Projects",
        threadTitle : "Projects",
      text: "A breakdown of systems I have designed and built... Tap to explore architecture, challenges and optimizations.",
      replies: 6
    },
    {
      Icon: <Goal />,
      category: "Goal",
      username: "@Goal",
      time: "Now",
      skills: {
        "Current Development Goal": "",
      },
      text: `• JS & Node Core Fundamentals 
      • Building Casemate 
      • Exploring LangChain for real AI systems`,
    },
    {
      Icon: <Qoute />,
      category: "Quote",
      username: "@Quote",
      time: "Now",
      text: "",
      quote: {
        author: "Cory House",
        handle: "@CoryHouse",
        content: "Code is like humor. When you have to explain it, it’s bad.",
      },
      footer: true,
    },
    {
      Icon: <Intro />,
      category: "Tool",
      username: "@Tool",
      time: "recent",
      threadId : "Projects",
      threadTitle : "Unidown",
      threadOf: "Unidown.in",
      conclusion:{content :  `Realtime media processing with queing Process `},
      bullets: [
        "Next.js + Node based processing pipeline",
        "yt-dlp integration with streaming progress",
        "Server-side media merging & optimization",
        "SSE based realtime download tracking",
      ],
      image: "unidown.png",
      actionAllowed : true
    },
    {
  Icon: <PIntro />,
  threadId: "unidown",
  type: "intro",
  category: "System",
  username: "@unidown",
  time: "recent",
  title: "UniDown",
  text:
    "A media processing platform focused on reliable downloading, conversion and real-time feedback through structured server-side pipelines.",
},

{
  Icon: <IconContext className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "problem",
  category: "Context",
  username: "@unidown",
  time: "recent",
  title: "Why UniDown Exists",
  text:
    "Most download tools rely on unstable client-side execution. UniDown was designed to shift complexity to controlled server workflows for consistency and scalability.",
},

{
  Icon: <IconDesign className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "approach",
  category: "Design",
  username: "@unidown",
  time: "recent",
  title: "System Approach",
  text:
    "The platform prioritizes pipeline stability over feature density — ensuring predictable processing behavior across varied media sources.",
},

{
  Icon: <IconWorkflow className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "workflow",
  category: "Flow",
  username: "@unidown",
  time: "recent",
  title: "Processing Lifecycle",
  bullets: [
    "User request → validation layer",
    "Task queue → controlled execution",
    "yt-dlp → source extraction",
    "Server merge → output normalization",
    "SSE stream → realtime progress",
  ],
},

{
  Icon: <IconArchitecture className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "architecture",
  category: "Architecture",
  username: "@unidown",
  time: "recent",
  title: "Architecture Direction",
  text:
    "Designed as a queue-driven processing system where download, transformation and delivery stages remain loosely coupled yet synchronized.",
},

{
  Icon: <IconArchitecture className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "realtime",
  category: "Realtime",
  username: "@unidown",
  time: "recent",
  title: "Realtime Feedback Model",
  text:
    "Server-sent events were introduced to provide continuous visibility into task state, reducing uncertainty during long media operations.",
},

{
  Icon: <IconInfra className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "infra",
  category: "Infrastructure",
  username: "@unidown",
  time: "recent",
  title: "Operational Foundation",
  bullets: [
    "Server-side execution environment",
    "Queue orchestration for concurrency",
    "Resource-aware processing limits",
    "Deployment focused on stability",
  ],
},

{
  Icon: <IconDirection className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "direction",
  category: "Evolution",
  username: "@unidown",
  time: "recent",
  title: "Where It Is Heading",
  text:
    "UniDown is evolving toward becoming a generalized media pipeline engine rather than a single-purpose downloader.",
},

{
  Icon: <IconLearning className="w-5 h-5 text-neutral-400" />,
  threadId: "unidown",
  type: "reflection",
  category: "Learning",
  username: "@unidown",
  time: "recent",
  title: "Engineering Takeaway",
  text:
    "Building UniDown strengthened understanding of pipeline orchestration, realtime system communication and reliability-first architecture design.",
},
  {
    Icon : <PIntro />,
    threadId : "casemate",
    type: "intro",
    category: "System",
    username: "@casemate",
    time: "recent",
    title: "Casemate",
    text:
      "A structured legal workflow system designed to reduce case chaos by introducing clarity, traceability and collaborative context into everyday legal operations.",
  },

  {
    Icon: <IconContext className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "problem",
    category: "Context",
    username: "@casemate",
    time: "recent",
    title: "Why Casemate Exists",
    text:
      "Legal workflows often rely on fragmented communication, scattered documents and manual tracking. Casemate was built to bring system-level structure to this process.",
  },

  {
    Icon: <IconDesign className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "approach",
    category: "Design",
    username: "@casemate",
    time: "recent",
    title: "System Approach",
    text:
      "Instead of building a generic case tool, Casemate focuses on lifecycle clarity — ensuring every action, document and decision is traceable within a unified workflow.",
  },

  {
    Icon: <IconWorkflow className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "workflow",
    category: "Flow",
    username: "@casemate",
    time: "recent",
    title: "Case Lifecycle Thinking",
    bullets: [
      "Case creation → structured metadata",
      "Hearing timeline → chronological clarity",
      "Document flow → contextual linking",
      "Activity tracking → decision visibility",
      "Collaboration → controlled participation",
    ],
  },

  {
    Icon: <IconArchitecture className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "architecture",
    category: "Architecture",
    username: "@casemate",
    time: "recent",
    title: "Architecture Direction",
    text:
      "Designed as a modular system where case state, communication and document logic operate as independent yet synchronized layers.",
  },

  {
    Icon: <IconArchitecture className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "ai",
    category: "Intelligence",
    username: "@casemate",
    time: "recent",
    title: "AI Assisted Context",
    text:
      "Exploring AI integration to surface legal context, assist in document understanding and reduce cognitive load during complex case reviews.",
  },

  {
    Icon: <IconArchitecture className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "infra",
    category: "Infrastructure",
    username: "@casemate",
    time: "recent",
    title: "Operational Foundation",
    bullets: [
      "Secure authentication layers",
      "Document storage abstraction",
      "Real-time activity streams",
      "Scalable service boundaries",
    ],
  },

  {
    Icon: <IconDirection className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "direction",
    category: "Evolution",
    username: "@casemate",
    time: "recent",
    title: "Where It Is Heading",
    text:
      "Casemate is evolving toward becoming a decision-support system for legal professionals — not just a case tracker.",
  },

  {
    Icon: <IconLearning className="w-5 h-5 text-neutral-400" />,
    threadId : "casemate",
    type: "reflection",
    category: "Learning",
    username: "@casemate",
    time: "recent",
    title: "Engineering Takeaway",
    text:
      "Building Casemate reinforced the importance of domain-driven system design, workflow clarity and human-centered engineering in complex professional environments.",
  },
    {
      Icon: <Intro />,
      category: "System",
      username: "@System",
      time: "recent",
      threadId : "Projects",
      threadTitle : "Casemate",
      threadOf: "Casemate.in",
      conclusion:{content :  `Lawyers WorkFlow management System`},
      bullets: [
        "Case lifecycle & hearing management logic",
        "Secure document workflow design",
        "Real-time collaboration & activity tracking",
        "AI-assisted legal context exploration",
      ],
      image : "casemate.png",
      actionAllowed : true
    },
  ];