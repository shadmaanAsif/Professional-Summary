export interface HeroContent {
  name: string
  kicker: string
  title: string
  secondaryTitle: string
  secondaryTitleHref: string
  statement: string
  location: string
  availability: string
  stackTags: string[]
}

export interface AboutPoint {
  label: string
  detail: string
}

export interface AboutContent {
  heading: string
  intro: string
  points: AboutPoint[]
  highlights?: string[]
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
    secondaryTitle: 'Founder & Solo Developer, CompareFiles.net',
    secondaryTitleHref: 'https://comparefiles.net',
    statement:
      "I design and own the architecture behind booking and e-commerce platforms across web and mobile — the SDKs, design systems, APIs, and delivery pipelines underneath React/Next.js and Node.js, not just the interface on top of them.",
    location: 'Dubai, UAE',
    availability: 'Open to remote & hybrid',
    stackTags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  about: {
    heading: 'About',
    intro:
      "Over 10 years moving from shipping features to owning the systems they run on — from resolving defects and building React/Redux apps at DXC Technology, Infosys, and Hexaware Technologies, to owning architecture at Almosafer since 2021.",
    points: [
      {
        label: 'Platform architecture',
        detail:
          'A shared SDK abstraction layer that decoupled business logic from presentation across multiple client applications, and a 40+ component design system giving iOS, Android, and desktop one consistent interface.',
      },
      {
        label: 'Backend & delivery',
        detail:
          'A Next.js and Express.js backend-for-frontend layer aggregating downstream REST and GraphQL services, plus a monorepo and micro-frontend pipeline shipped via Docker, Kubernetes, and CI/CD to AWS, Vercel, and Cloudflare.',
      },
      {
        label: 'Technical leadership',
        detail:
          'Mentoring engineers, running structured code reviews and design-pattern guidance, and translating architecture trade-offs into reporting senior stakeholders can act on.',
      },
      {
        label: 'AI-assisted engineering',
        detail: "Led my team's shift from experimenting with AI tools to shipping daily with Claude Code, Cursor, GitHub Copilot, MCP, and LLM integrations.",
      },
      {
        label: 'Independent ownership',
        detail:
          'I build JavaScript and Node.js automation tooling independently, and I founded CompareFiles.net, a live, privacy-first JSON diff tool I built, launched, and own solo, end to end.',
      },
    ],
    highlights: ['CompareFiles.net, a live, privacy-first JSON diff tool I built, launched, and own solo, end to end'],
  },
  experience: [
    {
      company: 'Almosafer',
      role: 'Senior Specialist Engineer',
      location: 'Dubai, UAE',
      period: 'Aug 2021 – Present',
      stack: [
        'Next.js',
        'React',
        'Vue.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Tailwind CSS',
        'Material UI',
        'MobX',
        'Zustand',
        'React Query',
        'Docker',
        'Kubernetes',
      ],
      highlights: [
        'Own architecture end to end — architected a 40+ component design system on Next.js, React, and Material UI, cutting new-feature UI build time ~30% and giving iOS, Android, and desktop one consistent interface.',
        'Decoupled presentation components from business logic behind an SDK abstraction layer, eliminating ~60% of duplicated logic across multiple client applications.',
        'Built Next.js API routes and Express.js services as a backend-for-frontend layer, aggregating downstream REST and GraphQL endpoints into optimized payloads, and standardized monorepo (Lerna) and micro-frontend delivery on Docker and Kubernetes, shipping through CI/CD to AWS, Vercel, and Cloudflare.',
        'Replaced ad-hoc state patterns with a predictable, testable data flow on MobX and React Query, cutting state-related defects ~35% and shortening new-engineer ramp-up from weeks to days, and implemented client-store synchronization, WebSocket, and SSE-driven polling workflows that keep distributed pricing and availability consistent across clients under concurrent load.',
        'Built end-to-end booking workflows and payment integrations, engineering the responsive UI architecture behind the conversion funnel on web and mobile.',
        'Cut bundle size 65% and improved LCP ~45% through SSR, SSG, code splitting, lazy loading, profiling, and asset optimization, lifting organic traffic ~25%.',
        'Raised test coverage to 80%+ with Jest, React Testing Library, Playwright, and Cypress, and enforced usability, localization, and accessibility standards with UX/UI — cutting production defect escape ~40%.',
        'Mentored 6 developers, instituted structured code reviews and design-pattern guidance that cut PR review turnaround ~50%, and translated architecture and delivery trade-offs into reporting senior stakeholders could act on.',
        'Drove team-wide adoption of Claude Code, Cursor, and GitHub Copilot alongside MCP-based tooling, AI-powered UI prototyping, and AI-assisted code review, accelerating feature delivery ~25%.',
      ],
    },
    {
      company: 'Hexaware Technologies',
      role: 'Senior Software Engineer',
      location: 'India',
      period: 'Nov 2020 – Aug 2021',
      stack: ['React', 'Redux', 'JavaScript', 'Webpack', 'Babel', 'REST APIs'],
      highlights: [
        'Designed and delivered a production React and Redux application from the ground up, establishing the Webpack and Babel build pipeline and a modular component architecture that cut initial load time ~30%.',
        'Led the frontend team and mentored 4 junior developers, building a review-driven culture that improved delivery consistency and reduced rework.',
        'Partnered with backend engineers to resolve defects and harden the application, sustaining usability, accessibility, and performance standards across releases.',
      ],
    },
    {
      company: 'Infosys',
      role: 'Senior Consultant',
      location: 'India',
      period: 'Nov 2019 – Nov 2020',
      stack: ['React', 'Redux', 'JavaScript', 'Webpack', 'Babel'],
      highlights: [
        'Developed a front-end web application in React with Redux, Babel, and Webpack, replacing legacy patterns with a modular component structure that cut UI duplication ~40%.',
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
        'Built and maintained React and Redux application features, wiring component communication through Redux actions and reducers.',
        'Diagnosed and resolved 100+ defects, improving application stability and release reliability across three years of continuous delivery.',
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
        'Modular Architecture',
        'Micro Frontends',
        'Monorepos (Lerna)',
        'Microservices',
        'Design Patterns',
        'SOLID',
        'Clean Code',
      ],
    },
    {
      category: 'Frontend Engineering',
      items: [
        'React',
        'Next.js',
        'Vue.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3 / SCSS',
        'Tailwind CSS',
        'JSX',
        'CSS-in-JS',
        'Material UI',
        'Bootstrap',
        'Web Components',
        'Storybook',
        'PWA',
        'Component-Driven Development',
        'Responsive Design',
        'Accessibility (a11y)',
      ],
    },
    {
      category: 'State Management & Data Flow',
      items: [
        'MobX',
        'Redux',
        'Zustand',
        'Context API',
        'React Query',
        'Client-Store Synchronization',
        'Real-Time Data Flows (WebSocket, SSE, Polling)',
      ],
    },
    {
      category: 'Backend, APIs & Data',
      items: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'WebSocket',
        'SSE',
        'Next.js API Routes',
        'Backend-for-Frontend Orchestration',
        'Node.js API Orchestration',
        'Distributed Systems Integration',
        'Payment Gateway Integration',
        'SQL',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      category: 'Performance & SEO',
      items: [
        'SSR',
        'Static Generation',
        'Lazy Loading',
        'Code Splitting',
        'Profiling',
        'Bundle & Asset Optimization',
        'Core Web Vitals',
        'SEO & Ranking',
      ],
    },
    {
      category: 'Testing & Quality',
      items: [
        'Jest',
        'React Testing Library',
        'Playwright',
        'Cypress',
        'Enzyme',
        'Unit / Integration / E2E Testing',
        'Code Reviews',
        'Localization & Accessibility Standards',
        'UX/UI Standards Compliance',
      ],
    },
    {
      category: 'DevOps & Cloud',
      items: [
        'CI/CD',
        'GitHub Actions',
        'GitLab CI',
        'Docker',
        'Kubernetes',
        'AWS / Vercel / Cloudflare',
        'Heroku',
        'Grafana Monitoring',
        'Webpack',
        'Babel',
        'Git',
      ],
    },
    {
      category: 'AI & Automation',
      items: [
        'Claude Code',
        'Cursor',
        'GitHub Copilot',
        'Model Context Protocol (MCP)',
        'Coding Agents',
        'Prompt Engineering',
        'LLM API Integrations',
        'AI-Powered UIs',
        'AI-Assisted Code Review & Automation',
        'JavaScript / Node.js Scripting',
      ],
    },
    {
      category: 'Technical Leadership & Mentorship',
      items: [
        'Technical Leadership',
        'Mentoring (6 at Almosafer, 4 at Hexaware)',
        'Structured Code Reviews & Design-Pattern Guidance',
        'Team Management',
        'Cross-Functional Collaboration',
        'Agile / Scrum',
        'Stakeholder Reporting',
        'Secure Development',
        'Driving Team-Wide AI Adoption',
        'Figma / Sketch Collaboration',
      ],
    },
  ],
  impactMetrics: [
    { label: 'Bundle size', value: '−65%', magnitude: 65 },
    { label: 'Largest Contentful Paint', value: '~−45%', magnitude: 45 },
    { label: 'Duplicated logic across clients', value: '~−60%', magnitude: 60 },
    { label: 'PR review turnaround', value: '~−50%', magnitude: 50 },
    { label: 'Production defect escapes', value: '~−40%', magnitude: 40 },
    { label: 'State-related defects', value: '~−35%', magnitude: 35 },
    { label: 'New-feature UI build time', value: '~−30%', magnitude: 30 },
    { label: 'Organic traffic', value: '~+25%', magnitude: 25 },
    { label: 'Feature delivery speed (AI-assisted)', value: '~+25%', magnitude: 25 },
  ],
  headlineStats: [
    { value: 10, suffix: '+', label: 'Years of engineering experience' },
    { value: 40, suffix: '+', label: 'Shared components in the design system' },
    { value: 60, prefix: '~−', suffix: '%', label: 'Duplicated logic across client apps' },
    { value: 65, prefix: '−', suffix: '%', label: 'Bundle size' },
    { value: 45, prefix: '~−', suffix: '%', label: 'Largest Contentful Paint' },
    { value: 25, prefix: '~+', suffix: '%', label: 'Feature delivery speed (AI-assisted)' },
  ],
  approach: [
    {
      title: 'Architecture is a shared contract, not a frontend concern',
      detail:
        'The SDK abstraction layer, backend-for-frontend services, monorepo, and delivery pipeline I built are shared platform decisions — decoupling business logic from presentation eliminated ~60% of duplicated logic across multiple client applications.',
    },
    {
      title: 'Performance is a default requirement, not a later optimization',
      detail:
        'SSR, SSG, code splitting, lazy loading, profiling, and asset optimization are part of how I build, not a cleanup pass — they took bundle size down 65% and LCP down ~45%, and lifted organic traffic ~25%.',
    },
    {
      title: 'Predictable data flow over ad-hoc state',
      detail:
        'Replacing ad-hoc state patterns with MobX and React Query cut state-related defects ~35% and shortened new-engineer ramp-up from weeks to days. Client-store synchronization with WebSocket and SSE-driven polling keeps pricing and availability consistent across clients under concurrent load.',
    },
    {
      title: 'Leverage through people, not just code',
      detail:
        'I mentor engineers, run structured code reviews and design-pattern guidance, and translate architecture trade-offs into reporting senior stakeholders can act on.',
    },
    {
      title: 'Deliberate adoption of new tooling',
      detail:
        'I drove my team from experimenting with AI-assisted engineering to shipping with it daily — Claude Code, Cursor, GitHub Copilot, MCP — and I independently build JavaScript and Node.js automation tooling.',
    },
  ],
  contact: {
    heading: 'Contact',
    message: "I'm open to remote and hybrid roles where I can set technical direction across teams. If that's what you're hiring for, reach out.",
    links: [
      { label: 'Email', value: 'shadmanasif10@gmail.com', href: 'mailto:shadmanasif10@gmail.com' },
      { label: 'LinkedIn', value: 'mohammad-shadmaan-asif-161bb1117', href: 'https://www.linkedin.com/in/mohammad-shadmaan-asif-161bb1117/' },
      { label: 'GitHub', value: 'shadmaanAsif', href: 'https://github.com/shadmaanAsif' },
      { label: 'Website', value: 'comparefiles.net', href: 'https://comparefiles.net' },
    ],
    location: 'Dubai, UAE',
  },
  education: 'B.Tech, Information Technology — Jawaharlal Nehru Technological University Hyderabad (JNTUH), 2016',
}
