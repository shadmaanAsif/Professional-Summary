export interface CaseStudy {
  slug: string
  code: string
  title: string
  summary: string
  stack: string[]
  problem: string
  decision: string
  tradeoffs: string
  implementation: string
  impactAndLessons: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sdk-abstraction-layer',
    code: 'CS.01',
    title: 'SDK Abstraction Layer',
    summary: 'Eliminating ~60% of duplicated business logic across three client applications.',
    stack: ['TypeScript', 'React', 'Next.js'],
    problem:
      'Three client applications — iOS, Android, and desktop — carried their own copies of the same business logic behind separate presentation layers, so every rule change had to land three times.',
    decision:
      'Designed a shared SDK abstraction layer that decouples business logic from presentation, giving every client one source of truth to build against.',
    tradeoffs:
      'A shared abstraction means every client depends on one contract — an upfront design cost, and a higher bar for changing that contract safely — in exchange for no longer paying the cost of triplicated, drifting logic.',
    implementation:
      'Delivered as the shared logic layer underneath the existing presentation code on all three client applications, consumed identically by iOS, Android, and desktop.',
    impactAndLessons:
      'Eliminated ~60% of duplicated logic across the three client applications. The broader lesson: at this scope, an architecture decision is a cross-client contract, not a single team’s internal refactor.',
  },
  {
    slug: 'unified-design-system',
    code: 'CS.02',
    title: 'Unified Design System',
    summary: '40+ shared components replacing three separate, drifting UI implementations.',
    stack: ['React', 'Next.js', 'Material UI'],
    problem:
      'iOS, Android, and desktop each rendered their own version of the interface, so every new feature meant rebuilding the same UI three times, with visual and behavioral drift between them.',
    decision:
      'Architected 40+ reusable, pixel-perfect Next.js and React components on Material UI as a single shared design system consumed by all three client surfaces.',
    tradeoffs:
      'A shared component library adds review and versioning discipline for every change, in exchange for removing duplicated UI work and cross-platform inconsistency.',
    implementation:
      'Built as a shared, reusable component library on Next.js, React, and Material UI, consumed directly by the iOS, Android, and desktop client applications.',
    impactAndLessons: 'One consistent interface across platforms, and ~30% faster new-feature UI build time.',
  },
  {
    slug: 'monorepo-delivery-pipeline',
    code: 'CS.03',
    title: 'Monorepo & Multi-Cloud Delivery Pipeline',
    summary: 'Standardizing delivery across product, backend, and platform teams.',
    stack: ['Lerna', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Vercel', 'Cloudflare'],
    problem:
      "Architecture decisions were being made frontend-only, and delivery wasn't standardized across the teams that shipped alongside it — each with its own tooling and release rhythm.",
    decision:
      'Standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipping through CI/CD to AWS, Vercel, and Cloudflare.',
    tradeoffs:
      'A shared delivery model constrains individual teams’ tooling choices, in exchange for one consistent release cadence and a shared contract everyone ships against.',
    implementation: 'Lerna monorepo, Docker/Kubernetes containerization, and CI/CD pipelines targeting AWS, Vercel, and Cloudflare.',
    impactAndLessons:
      'Reshaped how product, backend, and platform teams collaborate on shared contracts, deployment workflows, and release cadence — not just a frontend build change.',
  },
  {
    slug: 'predictable-state-architecture',
    code: 'CS.04',
    title: 'Predictable State Architecture',
    summary: 'Replacing ad-hoc state with a testable data flow that holds up under concurrent load.',
    stack: ['MobX', 'React Query'],
    problem:
      'Ad-hoc state patterns were producing state-related defects and a slow ramp-up path for new engineers, while distributed pricing and availability needed to stay consistent across concurrent clients.',
    decision:
      'Replaced ad-hoc state with a predictable, testable data flow on MobX and React Query, with client-store synchronization and polling for real-time consistency.',
    tradeoffs:
      'An opinionated, shared state model reduces per-feature flexibility, in exchange for removing the inconsistency and defect surface that ad-hoc patterns created.',
    implementation: 'MobX and React Query as the client-store layer, with polling workflows keeping pricing and availability in sync across clients.',
    impactAndLessons: 'State-related defects down ~35%; new-engineer ramp-up shortened from weeks to days.',
  },
  {
    slug: 'performance-seo-overhaul',
    code: 'CS.05',
    title: 'Performance & SEO Overhaul',
    summary: '65% smaller bundles and ~45% faster page loads on a conversion-driven platform.',
    stack: ['SSR', 'Code Splitting', 'Lazy Loading', 'Core Web Vitals'],
    problem: 'Bundle size and page-load times were capping organic reach on a conversion-driven booking platform.',
    decision: 'Drove SSR adoption, code splitting, lazy loading, and asset optimization across the client applications.',
    tradeoffs:
      'Treating performance as a standing engineering budget raises the bar (and review overhead) on every feature shipped, in exchange for not accumulating performance debt that has to be repaid later.',
    implementation: 'SSR, code splitting, lazy loading, and asset optimization applied across the client applications as standard practice, not a one-off pass.',
    impactAndLessons: '65% smaller bundles, ~45% faster LCP, and ~25% organic traffic growth.',
  },
  {
    slug: 'booking-payments-conversion-funnel',
    code: 'CS.06',
    title: 'Booking & Payments Conversion Funnel',
    summary: 'The end-to-end UI architecture behind the platform’s core conversion path.',
    stack: ['React', 'Next.js', 'Payment Gateway Integration'],
    problem:
      'The booking-and-payment path is the core conversion funnel for a travel platform — it has to hold up across web and mobile under real purchase pressure, not just look consistent.',
    decision:
      'Built the end-to-end booking workflows and payment integrations, engineering the responsive UI architecture behind the funnel for both web and mobile.',
    tradeoffs:
      'Serving the funnel from shared logic and components across web and mobile costs more upfront design effort than building each surface separately, in exchange for one conversion path to test, fix, and improve instead of two.',
    implementation: 'End-to-end booking workflows and payment gateway integration, with a responsive UI architecture shared across web and mobile.',
    impactAndLessons:
      'The source material doesn’t break out a conversion-rate metric specific to this funnel — the performance gains (Case Study CS.05) and state-consistency gains (Case Study CS.04) above are the measurable outcomes that apply directly to it, rather than a separate number invented for this page.',
  },
]
