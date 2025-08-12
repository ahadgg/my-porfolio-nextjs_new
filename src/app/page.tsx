import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";
import { ExperienceItem, ProjectItem, WritingItem } from "@/components/types";

export default function Home() {
  // About section data
  // About section data
  const aboutData = {
    introduction: [
      "As a Software Engineer with a Master's degree in Computer Science and 4+ years of enterprise-level experience, I architect and deliver scalable web applications that serve millions of users. My expertise spans full-stack development, distributed systems, and AI-powered solutions, with a proven track record of leading technical initiatives from conception to production deployment.",
      
      "I excel at solving complex technical challenges through strategic technology choices and robust architectural patterns. My experience includes building high-performance SaaS platforms, enterprise-grade systems, and innovative IoT solutions using both monolithic and microservices architectures. I'm passionate about clean code, system reliability, and delivering measurable business impact through technology.",
      
      // "Currently, I'm driving AI innovation in production environments, specializing in large language model integration, custom model fine-tuning, and sophisticated RAG implementations. I leverage cutting-edge frameworks like LangChain and LangGraph to build intelligent systems that enhance user experiences and automate complex business processes."
    ],
    company: {
      name: "LeaseMagnets",
      url: "https://leasemagnets.com"
    },
    skills: {
      frontend: [
        "React", "Next.js", "TypeScript", "React Native", "Redux Toolkit", 
        "Tailwind CSS", "Framer Motion", "Webpack", "Vite"
      ],
      backend: [
        "Node.js", "Express.js", "NestJS", "Python", "Flask", "FastAPI",
        "GraphQL", "REST APIs", "Microservices"
      ],
      databases: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", 
        "Supabase", 
        //"Prisma ORM"
      ],
      cloud: [
        "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", 
        "CI/CD Pipelines", "Monitoring & Logging"
      ],
      ai: [
        "LLaMA", "OpenAI GPT", "Fine-Tuning", "RAG Architecture", 
        "Vector Databases", "LangChain", "LangGraph", "Prompt Engineering"
      ],
      // architecture: [
      //   "Domain-Driven Design", "Event-Driven Architecture", "CQRS", 
      //   "Clean Architecture", "Design Patterns"
      // ]
    }
  };
  

  // Experience data
  // Experience data
const experiences: ExperienceItem[] = [
  {
    period: "Oct 2021 — Present",
    role: "Software Engineer (Remote)",
    company: "LeaseMagnets",
    companyUrl: "https://leasemagnets.com",
    points: [
      "Designed and maintained REST APIs and event-driven services (Flask, Node.js) and migrated legacy MySQL workloads to Supabase/Postgres with zero-downtime cutover using phased read/write routing.",
      "Built media and lead pipelines: upload → transcode (Coconut.co) → store (GCS/Supabase) → signed delivery; automated attribution, follow-ups, and webhook fan-out (Twilio, SendGrid).",
      "Implemented scheduled jobs and background workers (Rocketry/cron + Redis) for analytics aggregation, email drips, and SLA-critical retries.",
      "Instrumented product analytics and warehousing (Jitsu → BigQuery) for cohorting, funnel metrics, UTM/source attribution, and unit-level engagement insights.",
      "Hardened platform: JWT/OAuth, rate limiting, CORS policies, audit logs, secrets mgmt via env/CI; added Sentry error tracing and structured logging.",
      "Built reusable React/Next.js modules and state patterns (Zustand) for embeddable tour widgets, scheduler, and AI chat; shipped performance wins via code-splitting and image/CDN tuning.",
      "Delivered PMS integrations (Entrata/Yardi) for unit syncing, lead ingestion, and status webhooks; added idempotent handlers and backfill tooling."
    ],
    technologies: [
      "Flask", "Node.js", "Next.js", "React", "TypeScript", "Zustand",
      "Supabase (Postgres, Auth, Realtime)", "Google Cloud Storage", "BigQuery",
      "Redis", "Rocketry", "Coconut.co", "OpenAI", "Twilio", "SendGrid",
      "Jitsu", "Sentry", "Vercel", "GCP"
    ]
  },
  {
    period: "Aug 2021 — Oct 2022",
    role: "Backend Developer (Hybrid)",
    company: "ZeeSoft",
    companyUrl: "#",
    points: [
      "Developed scalable REST APIs (Node.js/Express) with input validation (Joi), RBAC, rate limiting, and request correlation for observability.",
      "Integrated APIs with React apps and standardized state using Redux Toolkit; shipped pagination, optimistic updates, and error boundaries.",
      "Adopted Next.js SSR/ISR for SEO-critical pages and faster TTFB; built dynamic routing and edge-friendly caching strategies.",
      "Delivered OpenAI-powered features (prompt orchestration, safety filters) across medical datasets and job platforms with guardrails and auditability.",
      "Optimized MongoDB with compound indexes, TTL collections, and background migrations; implemented CI/CD, containerized services, and health checks."
    ],
    technologies: [
      "Node.js", "Express", "Next.js", "React", "Redux Toolkit",
      "MongoDB", "Joi", "OpenAI", "Docker", "NGINX", "GitHub Actions"
    ]
  },
  {
    period: "Jan 2021 — Aug 2021",
    role: "MERN Stack Developer (Onsite)",
    company: "Zeoel",
    companyUrl: "#",
    points: [
      "Built and documented REST APIs (Express) used by React and React Native clients; standardized error shapes and versioned routes.",
      "Implemented Redux Toolkit patterns and normalized entities for performant lists, offline-friendly flows, and predictable updates.",
      "Modeled scalable MongoDB schemas with Mongoose (refs, partial indexes, lean queries) to improve query performance and reliability.",
      "Integrated front-end API layers with robust forms (React Hook Form/Yup), route guards, and lazy loading to reduce bundle size.",
      "Mentored interns on MERN fundamentals, code reviews, and Git workflows; introduced linting, Prettier, and commit hooks."
    ],
    technologies: [
      "React", "React Native", "Node.js", "Express", "MongoDB",
      "Mongoose", "Redux Toolkit", "JavaScript", "Yup", "React Hook Form"
    ]
  }
];

  // Projects data
  const projects: ProjectItem[] = [
    {
      "title": "Tour | AI-Powered Virtual Sales Concierge for Property Managers",
      "description": "Enterprise-grade virtual leasing platform delivering 24/7 AI-guided tours, live video sessions, and interactive floor plan showcases. Features include embeddable widgets, PMS integrations (Entrata, Yardi), AI-driven follow-ups, multi-source lead attribution, and real-time engagement analytics. Achieved over 1.1M tours for 130+ property managers, boosting lead conversions by 75% and closing rates by 25%. Designed for high scalability, security, and seamless integration across property management workflows.",
      "imageUrl": "/leasemagnets.png",
      "projectUrl": "https://leasemagnets.app/",
      "technologies": [
        "Next.js",
        "TypeScript",
        "Zustand",
        "OpenAI",
        "Supabase",
        "Flask",
        "PostgreSQL",
        "SQLAlchemy",
        "Redis",
        "OAuth2",
        "Docker",
        "GCP"
      ]
    },    
    {
      "title": "ScaleConvo | AI-Powered Conversational Platform for Business Communications",
      "description": "Omnichannel AI communication platform that reimagines business phone numbers. Delivers human-like voice calls, SMS, and email at scale with real-time analytics, CRM integrations, and multilingual support. Enables autonomous and assistive AI agents for appointment scheduling, customer support, lead follow-ups, and sentiment-driven actions. Designed for high scalability, secure deployments, and rapid no-code setup, serving industries from property management to logistics.",
      "imageUrl": "/scaleconvo.png",
      "projectUrl": "https://scaleconvo.com/",
      "technologies": [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Zustand",
        "Vite",
        "OpenAI API",
        "LangChain",
        "Supabase",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Redis",
        "Twilio",
        "Deepgram Speech-to-Text",
        "Docker",
      ]
    },
    {
      "title": "ManaPNL | AI-Powered Inventory & Data Management Platform",
      "description": "Full-stack platform integrating AI-powered chatbots with dynamic inventory and sales management. Utilizes Retrieval-Augmented Generation (RAG) over domain-specific datasets to deliver accurate, context-aware responses.PDF ingestion for continuous dataset improvement, and real-time analytics for sales, expenses, and inventory tracking. Designed with a secure multi-tenant architecture and robust API integrations to support high-volume data operations for retail sectors.",
      "imageUrl": "/manapnl.png",
      "projectUrl": "https://manapnl.com/",
      "technologies": [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Zustand",
        "OpenAI API",
        "LangChain",
        "LangGraph",
        "RAG (Retrieval-Augmented Generation)",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Redis",
        "Stripe API",
        "Twilio API",
        "JWT Authentication",
        "Docker",
        "VPS",
        "Github CI/CD"
      ]
    },    
    {
      title: "AI-Powered Medical Chatbot with Voice Integration",
      description: "Integrated OpenAI with a medical dataset to develop a chatbot capable of providing accurate, data-driven responses. Enabled speech-to-text feature allowing users to communicate via voice, with the chatbot offering tailored medical advice. Implemented functionality for users to upload PDFs to update and enhance the OpenAI-trained dataset, ensuring the chatbot remains accurate and relevant.",
      imageUrl: "/aiscribe.png",
      projectUrl: "https://ai-scribe-v2.onrender.com",
      technologies: [
        "Next.js", "OpenAI", "RAG", "Google Cloud Speech-to-Text", "Supabase", "Zustand", "Redux", "TypeScript"
      ]
    },
    {
      title: "Sports Sponsorship Storefront with Dynamic Video Content Engine",
      description: "Enabled automated adaptation of visual content across multiple formats — including social media, LED boards, and stadium screens — through a centralized, template-driven system. Reduced manual effort by 80% and unlocked new sponsorship revenue streams through structured, visually-driven asset packaging.",
      imageUrl: "/automadic.png",
      projectUrl: "https://automadic.io/",
      technologies: [
        "Next.js", "Supabase", "Zustand", "WebSocket",  "TypeScript", 
      ]
    },
    {
      "title": "Freshlay | Online Food & Grocery Ordering and Delivery Platform",
      "description": "End-to-end food and grocery delivery ecosystem with customer web and mobile apps, rider app, and real-time order tracking. Built RESTful APIs with secure JWT-based authentication and Redux-powered state management for seamless cross-platform performance. Features include real-time rider–customer chat, WebSocket-driven live order status updates, Mapbox-powered delivery tracking, and in-app push notifications. Integrated Twilio for SMS alerts, custom email services for transactional updates, and role-based dashboards for customers, riders, and admins. React Native rider app enables live location sharing, optimized delivery routing, and streamlined task management, while the customer app supports instant ordering, payment processing, and live ETA updates.",
      "imageUrl": "/freshlay.png",
      "projectUrl": "https://freshlay.com",
      "technologies": [
        "Node.js",
        "Express",
        "React",
        "Redux",
        "React Native",
        "MongoDB",
        "WebSocket",
        "Mapbox",
        "JWT",
        "Twilio API",
        "Socket.IO",
        "Axios",
        "VPS",
        "NGINX",
      ]
    },
    
    {
      title: "Water Analysis System",
      description: "Developed RESTful APIs and implemented the MQTT protocol for seamless communication with online devices. Utilized WebSockets to monitor sensor readings in real-time and enable device control directly from the frontend. Designed and implemented comprehensive analytics for device performance and data readings, enhancing system functionality and user engagement.",
      imageUrl: "/iot.png",
      projectUrl: "https://admin.dataontag.it",
      technologies: [
        "React", "Node.js", "MQTT", "WebSocket", "MongoDB", "IoT", "Real-time Analytics"
      ]
    },
    {
      title: "Car Rental Service Platform",
      description: "Developed a user-friendly platform for seamless bookings, affordable rates, and a wide selection of vehicles. Created comprehensive backend APIs for vehicle management, booking system, and user authentication. Implemented responsive frontend design for optimal user experience across devices.",
      imageUrl: "/agilecar.png",
      projectUrl: "https://www.agilecarrental.com/",
      technologies: [
        "React", "Node.js", "Express.js", "MongoDB", "Redux", "REST APIs"
      ]
    },
    {
      title: "CareGigs |AI-driven Job Platform for Medical Professionals",
      description: "Created a web and app platform for job seekers, incorporating Affinda for CV matching and personalized job suggestions, focusing on medical professionals. Built comprehensive user profiles, job matching algorithms, and integrated third-party services for enhanced functionality.",
      imageUrl: "/caregigs.png",
      projectUrl: "https://caregigs-landing.vercel.app",
      technologies: [
        "Next.js", "React Native", "Node.js", "MongoDB", "Affinda API", "OpenAI", "Redux"
      ]
    }
  ];

  // Writing data - keeping the original article
  const articles: WritingItem[] = [
    // {
    //   year: "2023",
    //   title: "Plaid Integration in React and Payment",
    //   description: "Processing",
    //   imageUrl: "/plaid.webp",
    //   articleUrl: "https://medium.com/@safeerahmad5454/a-deep-dive-into-plaid-payment-gateway-integration-for-distinct-payment-flows-in-react-14aef4628285"
    // }
  ];

  return (
    <main className="py-24">
      <About {...aboutData} />
      <Experience experiences={experiences} resumeUrl="/muhammad-ahad-resume.pdf" />
      <Projects projects={projects} />
      <Writing articles={articles} />
      <Footer />
    </main>
  );
}