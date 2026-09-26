export interface EngineeringNote {
  title: string
  detail: string
}

export const engineeringNotes: EngineeringNote[] = [
  {
    title: 'Why I extracted a shared SDK layer instead of syncing three codebases by hand',
    detail:
      'Three clients, one set of business rules, and no shared layer meant every rule change had to land three times — and drift between them was only a matter of when, not if. A shared SDK abstraction is more upfront design work, but it turns three copies of the truth into one.',
  },
  {
    title: 'Performance is a default, not a later optimization pass',
    detail:
      'SSR, code splitting, and asset budgets are easy to defer until "there\'s time." Treating them as standard on every feature — not a cleanup sprint — is what actually took bundle size down 65% and kept it there.',
  },
  {
    title: 'Predictable data flow beats ad-hoc state, even when it\'s slower to write at first',
    detail:
      'Ad-hoc state is fast to write and slow to trust. Moving to MobX and React Query cost some upfront convention-setting, and paid it back in fewer state-related defects and a new-engineer ramp-up measured in days instead of weeks.',
  },
  {
    title: 'What it actually took to get a team shipping with AI daily',
    detail:
      "The gap between individual engineers experimenting with AI tools and a team shipping with them daily isn't the tools — it's the shared conventions for how and when to use them. That's what turned Claude Code, Cursor, and Copilot into a ~25% delivery-speed gain instead of a novelty.",
  },
  {
    title: 'Architecture is a shared contract, not a frontend concern',
    detail:
      "The SDK layer, the monorepo, and the delivery pipeline weren't frontend-only decisions. They defined how product, backend, and platform teams share contracts, deployment workflows, and release cadence — which is why they needed buy-in beyond the frontend team.",
  },
]
