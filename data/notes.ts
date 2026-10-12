export interface EngineeringNote {
  title: string
  detail: string
}

export const engineeringNotes: EngineeringNote[] = [
  {
    title: 'Why I extracted business logic into a shared SDK layer',
    detail:
      'Multiple client applications were each carrying the same business logic. Decoupling presentation components from it behind an SDK abstraction layer eliminated ~60% of the duplicated logic.',
  },
  {
    title: 'Performance is a default, not a later optimization pass',
    detail:
      'SSR, SSG, code splitting, lazy loading, profiling, and asset optimization took bundle size down 65% and improved LCP ~45% — which lifted organic traffic ~25%.',
  },
  {
    title: 'Predictable data flow beats ad-hoc state',
    detail:
      'Replacing ad-hoc patterns with MobX and React Query gave a predictable, testable data flow — state-related defects fell ~35% and new-engineer ramp-up dropped from weeks to days.',
  },
  {
    title: 'Moving a team from AI experiments to shipping with AI daily',
    detail:
      'Team-wide adoption of Claude Code, Cursor, and GitHub Copilot, alongside MCP-based tooling, AI-powered UI prototyping, and AI-assisted code review, accelerated feature delivery ~25%.',
  },
  {
    title: 'Turning architecture trade-offs into reporting stakeholders can act on',
    detail: 'I translate architecture and delivery trade-offs into clear technical reporting that senior stakeholders can act on.',
  },
  {
    title: 'Why aggregation belongs in a backend-for-frontend layer',
    detail:
      'Letting each client orchestrate its own calls to REST and GraphQL services looks simpler until another client needs the same aggregation logic. Next.js API routes and Express.js services aggregate those downstream endpoints into optimized payloads once, instead of in every client.',
  },
]
