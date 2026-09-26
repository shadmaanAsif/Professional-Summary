export type ArchitectureDiagramId = 'sdk-layer' | 'pipeline' | 'data-flow' | 'impact-metrics'

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
      'Three client applications each carried their own copy of the same business logic behind separate presentation layers. I designed a shared SDK abstraction layer that decoupled business logic from presentation for all three, eliminating ~60% of duplicated logic across iOS, Android, and desktop.',
    constraints:
      'Three independently-shipping client applications (iOS, Android, desktop) needed to stay behavior-identical while each kept its own release cadence.',
    options:
      'Keep business logic embedded per client and rely on manual sync between them, or extract it once behind a shared interface every client consumes.',
    decision: 'Extracted a shared SDK abstraction layer that decouples business logic from presentation.',
    tradeoffs:
      'A shared layer gives every client one contract to build against, which raises the bar for changing that contract safely — in exchange for removing duplicated, drift-prone logic.',
    outcome: '~60% less duplicated logic across the three client applications.',
  },
  {
    id: 'pipeline',
    code: 'A.02',
    title: 'Delivery Pipeline — Monorepo to Multi-Cloud',
    summary:
      'I standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipping through CI/CD to AWS, Vercel, and Cloudflare.',
    constraints:
      "Architecture decisions were being made frontend-only, and delivery wasn't standardized across the teams shipping alongside it.",
    options:
      'Leave each team with its own repository and pipeline, or standardize on one monorepo and delivery model shared across product, backend, and platform teams.',
    decision:
      'Standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipped through CI/CD to AWS, Vercel, and Cloudflare.',
    tradeoffs:
      'A shared delivery model constrains individual teams’ tooling choices in exchange for one consistent release cadence and shared contracts across teams.',
    outcome: 'Reshaped how product, backend, and platform teams collaborate on shared contracts, deployment workflows, and release cadence.',
  },
  {
    id: 'data-flow',
    code: 'A.03',
    title: 'State & Real-Time Data Flow',
    summary:
      'Predictable client-store synchronization and polling, built on MobX and React Query, that keep pricing and availability consistent across clients under concurrent load.',
    conceptual: true,
    constraints: 'Distributed pricing and availability had to stay consistent across concurrent clients under load.',
    options:
      'Keep ad-hoc, per-feature state handling, or adopt one predictable, testable state and data-flow model across the app.',
    decision: 'Adopted MobX and React Query as the client-store layer, with polling-based synchronization for real-time consistency.',
    outcome: 'State-related defects down ~35%; new-engineer ramp-up cut from weeks to days.',
  },
  {
    id: 'impact-metrics',
    code: 'A.04',
    title: 'Impact at a Glance',
    summary: 'The measurable results of the architecture work above, drawn directly from delivery outcomes at Almosafer.',
  },
]
