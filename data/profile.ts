export interface HeroContent {
  name: string
  kicker: string
  title: string
  statement: string
  location: string
  availability: string
  stackTags: string[]
}

export interface AboutContent {
  heading: string
  paragraphs: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  location: string
  period: string
  stack: string[]
  highlights: string[]
}

export interface ExpertiseGroup {
  category: string
  items: string[]
}

export interface ImpactMetric {
  label: string
  value: string
  magnitude: number
}

export interface HeadlineStat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export interface ApproachPrinciple {
  title: string
  detail: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface ContactContent {
  heading: string
  message: string
  links: ContactLink[]
  location: string
}

export interface Profile {
  hero: HeroContent
  about: AboutContent
  experience: ExperienceEntry[]
  expertise: ExpertiseGroup[]
  impactMetrics: ImpactMetric[]
  headlineStats: HeadlineStat[]
  approach: ApproachPrinciple[]
  contact: ContactContent
  education: string
}

export const profile: Profile = {
  hero: {
    name: 'Mohammad Shadmaan Asif',
    kicker: 'Software Architecture · Platform Engineering · Full-Stack Delivery',
    title: 'Staff Software Engineer',
    statement:
      "I design and own the architecture behind platforms that serve millions of users across web and mobile — the SDKs, design systems, APIs, and delivery pipelines underneath React/Next.js and Node.js, not just the interface on top of them.",
    location: 'Dubai, UAE',
    availability: 'Open to remote & hybrid',
    stackTags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  about: {
    heading: 'About',
    paragraphs: [
      "I've spent ten years moving from shipping features to owning the systems features are built on. I started resolving defects and building React/Redux applications at DXC Technology, Infosys, and Hexaware Technologies, and since 2021 I've owned architecture at Almosafer, the Middle East's leading travel platform — a booking and e-commerce environment built on React, Next.js, TypeScript, and Node.js.",
      "My focus sits at the intersection of frontend, backend, and platform: a shared SDK abstraction layer that decoupled business logic from presentation across three client applications, a 40+ component design system, Node.js APIs and distributed-systems integration behind the booking and payment flows, and a monorepo and micro-frontend architecture delivered through Docker, Kubernetes, and CI/CD to AWS, Vercel, and Cloudflare. None of these were frontend-only decisions — they shaped how product, backend, and platform teams share contracts, deployment workflows, and release cadence.",
      "I treat leverage as seriously as depth. I mentor engineers, run structured code reviews and design-pattern guidance, and translate architecture trade-offs into reporting senior stakeholders can act on. I also led my team from experimenting with AI-assisted development to shipping with it daily — Claude Code, Cursor, GitHub Copilot, MCP, and LLM integrations — and I build my own JavaScript and Node.js tooling to remove repetitive work wherever I find it. I'm based in Dubai and open to remote or hybrid roles.",
    ],
  },
  experience: [
    {
      company: 'Almosafer',
      role: 'Senior Specialist Engineer',
      location: 'Dubai, UAE',
      period: 'Aug 2021 – Present',
      stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MobX', 'React Query', 'Docker', 'Kubernetes'],
      highlights: [
        'Own architecture end to end across the stack — architected a 40+ component design system on Next.js and Material UI, and an SDK abstraction layer that decoupled business logic from presentation, eliminating ~60% of duplicated code across three client apps serving iOS, Android, and desktop.',
        'Engineered Node.js API orchestration and client-store synchronization/polling workflows that keep distributed pricing and availability consistent across clients under concurrent load, behind end-to-end booking and payment integrations.',
        'Cut bundle size 65% and improved LCP ~45% through SSR, code splitting, and asset optimization, lifting organic traffic ~25%.',
        "Mentored 6 engineers, cut PR review turnaround ~50% with structured code-review standards, and led the team's shift to daily AI-assisted delivery with Claude Code, Cursor, and GitHub Copilot — accelerating feature delivery ~25%.",
      ],
    },
    {
      company: 'Hexaware Technologies',
      role: 'Senior Software Engineer',
      location: 'India',
      period: 'Nov 2020 – Aug 2021',
      stack: ['React', 'Redux', 'JavaScript', 'Webpack', 'Babel'],
      highlights: [
        'Designed and delivered a production React and Redux application from the ground up, establishing the Webpack/Babel build pipeline and a modular component architecture that cut initial load time ~30%.',
        'Led the frontend team and mentored 4 junior developers, building a review-driven culture that improved delivery consistency.',
      ],
    },
    {
      company: 'Infosys',
      role: 'Senior Consultant',
      location: 'India',
      period: 'Nov 2019 – Nov 2020',
      stack: ['React', 'Redux', 'JavaScript', 'Webpack', 'Babel'],
      highlights: [
        'Modernized a legacy front-end application to React, Redux, Babel, and Webpack, replacing legacy patterns with a modular component structure that cut UI duplication ~40%.',
        'Centralized application state and standardized component-to-component communication with Redux actions and reducers.',
      ],
    },
    {
      company: 'DXC Technology',
      role: 'Software Engineer',
      location: 'India',
      period: 'Nov 2016 – Nov 2019',
      stack: ['React', 'Redux', 'JavaScript', 'Webpack', 'Babel'],
      highlights: [
        'Built and maintained React and Redux application features across three years of continuous delivery.',
        'Diagnosed and resolved 100+ defects, improving application stability and release reliability.',
      ],
    },
  ],
  expertise: [
    {
      category: 'Software Architecture & System Design',
      items: [
        'Frontend Architecture',
        'Design Systems',
        'SDK & Reusable Component Libraries',
        'Micro Frontends',
        'Monorepos (Lerna)',
        'Microservices',
        'Design Patterns',
        'SOLID',
      ],
    },
    {
      category: 'Frontend Engineering',
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3 / SCSS',
        'JSX',
        'CSS-in-JS',
        'Material UI',
        'Web Components',
        'Storybook',
        'Responsive Design',
        'Accessibility (a11y)',
      ],
    },
    {
      category: 'Backend Engineering',
      items: ['Node.js', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Distributed Systems Integration'],
    },
    {
      category: 'Node.js & Backend Tooling',
      items: ['Node.js API Orchestration', 'JavaScript / Node.js Automation Scripting', 'Independent Internal Tooling Development'],
    },
    {
      category: 'APIs & Integrations',
      items: ['REST APIs', 'GraphQL', 'WebSocket', 'Payment Gateway Integration'],
    },
    {
      category: 'Performance & Scalability',
      items: [
        'SSR',
        'Static Generation',
        'Lazy Loading',
        'Code Splitting',
        'Bundle & Asset Optimization',
        'Core Web Vitals',
        'SEO & Ranking',
        'Real-Time / Polling Data Flows',
        'Client-Store Synchronization',
      ],
    },
    {
      category: 'Developer Experience & Shared Platforms',
      items: [
        'CI/CD',
        'Docker',
        'Kubernetes',
        'AWS / Vercel / Cloudflare',
        'Storybook',
        'AI-Assisted Development (Claude Code, Cursor, Copilot, MCP)',
        'AI-Assisted Code Review & Automation',
        'Grafana Monitoring',
      ],
    },
    {
      category: 'Technical Leadership & Mentorship',
      items: [
        'Mentoring (10 developers across roles)',
        'Structured Code Reviews & Design-Pattern Guidance',
        'Team Management',
        'Cross-Functional Collaboration',
        'Stakeholder Reporting',
        'Agile Methodology',
        'Driving Org-Wide AI Adoption',
        'Figma / Sketch Collaboration',
      ],
    },
  ],
  impactMetrics: [
    { label: 'Bundle size', value: '−65%', magnitude: 65 },
    { label: 'Largest Contentful Paint', value: '~−45%', magnitude: 45 },
    { label: 'Duplicated logic across clients', value: '−60%', magnitude: 60 },
    { label: 'PR review turnaround', value: '~−50%', magnitude: 50 },
    { label: 'Production defect escapes', value: '~−40%', magnitude: 40 },
    { label: 'State-related defects', value: '~−35%', magnitude: 35 },
    { label: 'New-feature UI build time', value: '~−30%', magnitude: 30 },
    { label: 'Organic traffic', value: '+25%', magnitude: 25 },
    { label: 'Feature delivery speed (AI-assisted)', value: '~+25%', magnitude: 25 },
  ],
  headlineStats: [
    { value: 10, suffix: '+', label: 'Years of engineering experience' },
    { value: 40, suffix: '+', label: 'Shared components in the design system' },
    { value: 60, prefix: '−', suffix: '%', label: 'Duplicated logic across client apps' },
    { value: 65, prefix: '−', suffix: '%', label: 'Bundle size' },
    { value: 45, prefix: '~−', suffix: '%', label: 'Largest Contentful Paint' },
    { value: 25, prefix: '~+', suffix: '%', label: 'Feature delivery speed (AI-assisted)' },
  ],
  approach: [
    {
      title: 'Architecture is a shared contract, not a frontend concern',
      detail:
        "The SDK layer, monorepo, and delivery pipeline I own weren't frontend-only decisions — they shaped how product, backend, and platform teams collaborate on shared contracts, deployment workflows, and release cadence.",
    },
    {
      title: 'Performance is a default requirement, not a later optimization',
      detail:
        'SSR, code splitting, lazy loading, and asset optimization are standard tooling on every feature I ship, not a cleanup pass — that discipline is what took bundle size down 65% and LCP down ~45%.',
    },
    {
      title: 'Predictable data flow over ad-hoc state',
      detail:
        'Replacing ad-hoc state patterns with MobX and React Query cut state-related defects ~35% and shortened new-engineer ramp-up from weeks to days — the architecture choice was also a maintainability and onboarding choice.',
    },
    {
      title: 'Leverage through people, not just code',
      detail:
        'I mentor engineers, run structured code reviews and design-pattern guidance, and translate architecture trade-offs into reporting senior stakeholders can act on.',
    },
    {
      title: 'Deliberate adoption of new tooling',
      detail:
        'I drove my team from experimenting with AI-assisted engineering to shipping with it daily — Claude Code, Cursor, GitHub Copilot, MCP — and I build my own Node.js automation tooling to eliminate repetitive work.',
    },
  ],
  contact: {
    heading: 'Contact',
    message: "I'm open to remote and hybrid roles where I can set technical direction across teams. If that's what you're hiring for, reach out.",
    links: [
      { label: 'Email', value: 'shadmanasif10@gmail.com', href: 'mailto:shadmanasif10@gmail.com' },
      { label: 'LinkedIn', value: 'mohammad-shadmaan-asif', href: 'https://linkedin.com/in/mohammad-shadmaan-asif' },
      { label: 'GitHub', value: 'shadmaanAsif', href: 'https://github.com/shadmaanAsif' },
    ],
    location: 'Dubai, UAE',
  },
  education: 'B.Tech, Information Technology — JNTUH, 2016',
}
