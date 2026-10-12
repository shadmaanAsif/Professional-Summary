export interface Decision {
  id: string
  title: string
  context: string
  options: string
  decision: string
  tradeoffs: string
  consequences: string
}

export const decisions: Decision[] = [
  {
    id: 'ADR-001',
    title: 'Introducing a Shared SDK Abstraction Layer',
    context: 'Multiple client applications were carrying duplicated business logic, coupled to their presentation components.',
    options: 'Keep business logic embedded in each client, or extract it once behind a shared abstraction consumed by every client.',
    decision: 'Decoupled presentation components from business logic behind an SDK abstraction layer.',
    tradeoffs: 'A shared layer means every client depends on one contract — good for consistency, but it raises the bar for changing that contract safely.',
    consequences: '~60% less duplicated logic across multiple client applications.',
  },
  {
    id: 'ADR-002',
    title: 'Standardizing a Monorepo & Micro-Frontend Delivery Model',
    context: 'Frontend work needed one standard repository structure and delivery path across micro frontends and deployment targets.',
    options: 'Leave each app with its own repository and pipeline, or standardize on one monorepo and delivery model.',
    decision:
      'Standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipped through CI/CD to AWS, Vercel, and Cloudflare.',
    tradeoffs: 'A shared delivery model constrains individual apps’ tooling choices in exchange for one consistent delivery path.',
    consequences: 'Frontend apps share one monorepo structure and one containerized CI/CD path to AWS, Vercel, and Cloudflare.',
  },
  {
    id: 'ADR-003',
    title: 'Replacing Ad-Hoc State with MobX + React Query',
    context:
      'Ad-hoc state patterns were producing state-related defects and a slow ramp-up path for new engineers; pricing and availability also needed to stay consistent across concurrent clients.',
    options: 'Keep ad-hoc, per-feature state handling, or adopt one predictable, testable state and data-flow model across the app.',
    decision:
      'Adopted MobX and React Query for a predictable, testable data flow, and added client-store synchronization with WebSocket and SSE-driven polling workflows for real-time consistency.',
    tradeoffs: 'An opinionated shared state model reduces per-feature flexibility, in exchange for removing the inconsistency and defect surface ad-hoc patterns created.',
    consequences: 'State-related defects down ~35%; new-engineer ramp-up cut from weeks to days.',
  },
  {
    id: 'ADR-004',
    title: 'Frontend Performance as a Default, Not a Cleanup Pass',
    context: 'Bundle size and page-load speed needed to improve on a booking platform where SEO and organic traffic matter.',
    options: 'Treat performance as a periodic optimization pass, or build SSR, code splitting, and asset optimization into how features ship.',
    decision: 'Applied SSR, SSG, code splitting, lazy loading, profiling, and asset optimization as part of delivery, not a later cleanup pass.',
    tradeoffs: 'Raises the bar and review overhead for every feature shipped, in exchange for not accumulating a performance debt that has to be repaid later.',
    consequences: '65% smaller bundles, LCP improved ~45%, organic traffic up ~25%.',
  },
  {
    id: 'ADR-005',
    title: 'Adopting AI-Assisted Engineering as a Team Practice',
    context: 'The team was experimenting with AI-assisted development.',
    options: "Leave AI tool adoption to individual engineers' discretion, or drive a deliberate, team-wide shift to daily AI-assisted delivery.",
    decision:
      'Drove team-wide adoption of Claude Code, Cursor, and GitHub Copilot alongside MCP-based tooling, AI-powered UI prototyping, and AI-assisted code review.',
    tradeoffs:
      'Standardizing shared AI tooling and workflow means investing in team-wide guidance and review norms, in exchange for consistent, compounding gains instead of isolated individual speedups.',
    consequences: 'Feature delivery accelerated ~25%; the team moved from experimenting with AI-assisted development to shipping with it daily.',
  },
  {
    id: 'ADR-006',
    title: 'Introducing a Backend-for-Frontend Layer on Next.js + Express.js',
    context:
      'Clients needed data assembled from multiple downstream REST and GraphQL services; without an orchestration layer, each client would call every downstream service directly.',
    options:
      'Let each client orchestrate and shape downstream calls itself, or introduce a dedicated backend-for-frontend layer that aggregates and optimizes payloads once.',
    decision:
      'Built Next.js API routes and Express.js services as a backend-for-frontend layer, aggregating downstream REST and GraphQL endpoints into optimized payloads for client consumption.',
    tradeoffs:
      'Adds a service to build, deploy, and keep available, in exchange for clients that stay simple and downstream systems that can change shape without every client changing with them.',
    consequences: 'Clients receive optimized, aggregated payloads from one orchestration layer instead of assembling them from each downstream service.',
  },
]
