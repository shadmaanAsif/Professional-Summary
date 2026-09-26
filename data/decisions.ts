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
    context:
      'Three independently-maintained client applications (iOS, Android, desktop) were carrying duplicate copies of the same business logic behind separate presentation layers.',
    options: 'Keep business logic embedded per client and rely on manual sync, or extract it once behind a shared abstraction consumed by all three.',
    decision: 'Extracted a shared SDK abstraction layer that decouples business logic from presentation.',
    tradeoffs: 'A shared layer means every client depends on one contract — good for consistency, but it raises the bar for changing that contract safely.',
    consequences: '~60% less duplicated logic across clients; architecture changes now have to be designed for three consumers at once, not one.',
  },
  {
    id: 'ADR-002',
    title: 'Standardizing a Monorepo & Micro-Frontend Delivery Model',
    context: "Delivery wasn't standardized across the teams shipping alongside frontend — architecture decisions were being made frontend-only.",
    options: 'Leave each team and app with its own repository and pipeline, or standardize on one monorepo and delivery model across product, backend, and platform.',
    decision:
      'Standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipped through CI/CD to AWS, Vercel, and Cloudflare.',
    tradeoffs: 'A shared delivery model constrains individual teams’ tooling choices in exchange for one consistent release cadence and shared contracts.',
    consequences: 'Reshaped how product, backend, and platform teams collaborate on contracts, deployment workflows, and release cadence.',
  },
  {
    id: 'ADR-003',
    title: 'Replacing Ad-Hoc State with MobX + React Query',
    context:
      'Ad-hoc state patterns were producing state-related defects and a slow ramp-up path for new engineers; pricing and availability also needed to stay consistent across concurrent clients.',
    options: 'Keep ad-hoc, per-feature state handling, or adopt one predictable, testable state and data-flow model across the app.',
    decision: 'Adopted MobX and React Query as the client-store layer, with polling-based synchronization for real-time consistency.',
    tradeoffs: 'An opinionated shared state model reduces per-feature flexibility, in exchange for removing the inconsistency and defect surface ad-hoc patterns created.',
    consequences: 'State-related defects down ~35%; new-engineer ramp-up cut from weeks to days.',
  },
  {
    id: 'ADR-004',
    title: 'Frontend Performance as a Default, Not a Cleanup Pass',
    context: 'Bundle size and load time were capping organic reach on a conversion-driven booking platform.',
    options: 'Treat performance as a periodic optimization pass, or bake SSR, code-splitting, and asset budgets into the default delivery process.',
    decision: 'Made SSR, code splitting, lazy loading, and asset optimization standard on every feature, not a later cleanup pass.',
    tradeoffs: 'Raises the bar and review overhead for every feature shipped, in exchange for not accumulating a performance debt that has to be repaid later.',
    consequences: '65% smaller bundles, ~45% faster LCP, ~25% organic traffic growth.',
  },
  {
    id: 'ADR-005',
    title: 'Adopting AI-Assisted Engineering as a Team Practice',
    context: 'The team was experimenting informally with AI coding tools without a shared, daily-use practice.',
    options: "Leave AI tool adoption to individual engineers' discretion, or drive a deliberate, team-wide shift to daily AI-assisted delivery.",
    decision: 'Drove team-wide adoption of Claude Code, Cursor, and GitHub Copilot alongside MCP-based tooling and AI-assisted code review.',
    tradeoffs:
      'Standardizing shared AI tooling and workflow means investing in team-wide guidance and review norms, in exchange for consistent, compounding gains instead of isolated individual speedups.',
    consequences: '~25% faster feature delivery; AI-assisted code review became a standard part of the workflow, not an experiment.',
  },
]
