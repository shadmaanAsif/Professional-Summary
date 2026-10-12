export type ArchitectureDiagramId = 'sdk-layer' | 'api-layer' | 'pipeline' | 'data-flow' | 'impact-metrics'

export interface ArchitectureDiagram {
  id: ArchitectureDiagramId
  code: string
  title: string
  summary: string
  conceptual?: boolean
  constraints?: string
  options?: string
  decision?: string
  tradeoffs?: string
  outcome?: string
}

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: 'sdk-layer',
    code: 'A.01',
    title: 'SDK Abstraction Layer — Before → After',
    summary:
      'Business logic was duplicated across multiple client applications, coupled to their presentation components. I decoupled the two behind an SDK abstraction layer, eliminating ~60% of duplicated logic across those clients.',
    conceptual: true,
    constraints: 'Business logic was duplicated across multiple client applications and coupled to their presentation components.',
    options:
      'Keep business logic embedded in each client, or extract it once behind a shared interface every client consumes.',
    decision: 'Decoupled presentation components from business logic behind an SDK abstraction layer.',
    tradeoffs:
      'A shared layer gives every client one contract to build against, which raises the bar for changing that contract safely — in exchange for removing duplicated, drift-prone logic.',
    outcome: '~60% less duplicated logic across multiple client applications.',
  },
  {
    id: 'api-layer',
    code: 'A.02',
    title: 'API & Platform Layer — Backend-for-Frontend Orchestration',
    summary:
      'Clients needed data assembled from multiple downstream REST and GraphQL services without each one orchestrating those calls itself. I built Next.js API routes and Express.js services as a backend-for-frontend layer that aggregates downstream endpoints into optimized payloads for client consumption.',
    constraints:
      'Clients needed data assembled from multiple downstream REST and GraphQL services without each client making those calls itself.',
    options:
      'Let each client orchestrate calls to every downstream service directly, or introduce a backend-for-frontend layer that aggregates and shapes the data once.',
    decision:
      'Built Next.js API routes and Express.js services as a backend-for-frontend layer that aggregates downstream REST and GraphQL endpoints into optimized payloads for client consumption.',
    tradeoffs:
      'An orchestration layer adds a service to build, deploy, and keep available, in exchange for clients that stay simple and downstream systems that can change shape without every client changing with them.',
    outcome: 'Clients consume optimized payloads instead of orchestrating multiple downstream REST and GraphQL calls themselves.',
  },
  {
    id: 'pipeline',
    code: 'A.03',
    title: 'Delivery Pipeline — Monorepo to Production',
    summary:
      'I standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipping through CI/CD to AWS, Vercel, and Cloudflare.',
    conceptual: true,
    options: 'Leave each project with its own repository and pipeline, or standardize on one monorepo and delivery model.',
    decision:
      'Standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipped through CI/CD to AWS, Vercel, and Cloudflare.',
    tradeoffs:
      'A shared delivery model constrains individual projects’ tooling choices in exchange for one consistent structure and release path.',
  },
  {
    id: 'data-flow',
    code: 'A.04',
    title: 'State & Real-Time Data Flow',
    summary:
      'A predictable, testable data flow on MobX and React Query, with client-store synchronization, WebSocket, and SSE-driven polling keeping pricing and availability consistent across clients under concurrent load.',
    conceptual: true,
    constraints: 'Distributed pricing and availability had to stay consistent across concurrent clients under load.',
    options:
      'Keep ad-hoc, per-feature state handling, or adopt one predictable, testable state and data-flow model across the app.',
    decision:
      'Replaced ad-hoc patterns with a predictable, testable data flow on MobX and React Query, and implemented client-store synchronization, WebSocket, and SSE-driven polling workflows.',
    outcome: 'State-related defects down ~35%; new-engineer ramp-up cut from weeks to days.',
  },
  {
    id: 'impact-metrics',
    code: 'A.05',
    title: 'Impact at a Glance',
    summary: 'Measurable delivery outcomes across my work at Almosafer, as listed on my resume.',
  },
]
