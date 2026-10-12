export interface EngineeringImpactCategory {
  category: string
  items: string[]
}

export const engineeringImpact: EngineeringImpactCategory[] = [
  {
    category: 'Platform Engineering',
    items: [
      'SDK abstraction layer decoupling business logic from presentation, eliminating ~60% of duplicated logic across multiple client applications',
      '40+ component design system unifying iOS, Android, and desktop',
      'Standardized monorepo (Lerna) and micro-frontend architecture',
    ],
  },
  {
    category: 'Performance Engineering',
    items: [
      'SSR, code splitting, lazy loading, and asset optimization as standard practice',
      '65% smaller bundles, ~45% faster LCP',
      '~25% organic traffic growth from Core Web Vitals and SEO gains',
    ],
  },
  {
    category: 'Developer Experience',
    items: [
      'Containerized delivery (Docker, Kubernetes) through CI/CD to AWS, Vercel, and Cloudflare',
      'Structured code-review standards cutting PR turnaround ~50%',
      'Team-wide adoption of MCP-based AI tooling and AI-assisted code review',
    ],
  },
  {
    category: 'Scalability',
    items: [
      'Client-store synchronization, WebSocket, and SSE-driven polling keeping pricing and availability consistent under concurrent load',
      'Backend-for-frontend orchestration on Next.js API routes and Express.js, aggregating downstream REST and GraphQL endpoints into optimized payloads',
      'Single codebase serving iOS, Android, and desktop',
    ],
  },
  {
    category: 'Engineering Quality',
    items: [
      'Test coverage raised to 80%+ with Jest, React Testing Library, Playwright, and Cypress',
      'Accessibility, localization, and UX standards enforced with design partners',
      '~40% fewer production defect escapes, ~35% fewer state-related defects',
    ],
  },
  {
    category: 'Technical Strategy',
    items: [
      'Mentored 6 developers and instituted structured code reviews and design-pattern guidance',
      'Architecture and delivery trade-offs translated into reporting senior stakeholders can act on',
      'Team-wide AI adoption driven from experimentation to daily delivery',
    ],
  },
]
