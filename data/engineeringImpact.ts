export interface EngineeringImpactCategory {
  category: string
  items: string[]
}

export const engineeringImpact: EngineeringImpactCategory[] = [
  {
    category: 'Platform Engineering',
    items: [
      'Shared SDK abstraction layer decoupling business logic from presentation across three client apps',
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
      'MCP-based AI tooling and AI-assisted code review folded into the standard workflow',
    ],
  },
  {
    category: 'Scalability',
    items: [
      'Client-store synchronization and polling keeping pricing and availability consistent under concurrent load',
      'Node.js API orchestration across REST, GraphQL, and WebSocket',
      'One shared architecture serving iOS, Android, and desktop simultaneously',
    ],
  },
  {
    category: 'Engineering Quality',
    items: [
      'Jest coverage raised to 80%+',
      'Accessibility, localization, and UX standards enforced with design partners',
      '~40% fewer production defect escapes, ~35% fewer state-related defects',
    ],
  },
  {
    category: 'Technical Strategy',
    items: [
      'Standardized delivery model adopted across product, backend, and platform teams',
      'Architecture and delivery trade-offs translated into reporting senior stakeholders can act on',
      'Org-wide AI adoption driven as a deliberate technical decision, not an experiment',
    ],
  },
]
