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
  liveUrl?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sdk-abstraction-layer',
    code: 'CS.01',
    title: 'SDK Abstraction Layer',
    summary: 'Eliminating ~60% of duplicated business logic across multiple client applications.',
    stack: ['React', 'Next.js'],
    problem: 'Business logic was coupled to presentation components and duplicated across multiple client applications.',
    decision:
      'Decoupled presentation components from business logic behind an SDK abstraction layer, giving every client application one source of truth to build against.',
    tradeoffs:
      'A shared abstraction means every client depends on one contract — an upfront design cost, and a higher bar for changing that contract safely — in exchange for no longer paying the cost of duplicated, drifting logic.',
    implementation:
      'An SDK abstraction layer between presentation components and business logic, shared by the client applications as the single home for that logic.',
    impactAndLessons:
      'Eliminated ~60% of duplicated logic across multiple client applications. The broader lesson: at this scope, an architecture decision is a cross-client contract, not a single team’s internal refactor.',
  },
  {
    slug: 'unified-design-system',
    code: 'CS.02',
    title: 'Unified Design System',
    summary: '40+ shared components consolidating duplicated per-platform UI into a single codebase.',
    stack: ['React', 'Next.js', 'Material UI'],
    problem:
      'Per-platform UI for iOS, Android, and desktop was duplicated, so new features meant rebuilding the same interface for each platform and keeping them consistent.',
    decision:
      'Architected 40+ reusable, pixel-perfect Next.js and React components on Material UI, consolidating the per-platform UI into a single codebase that serves iOS, Android, and desktop.',
    tradeoffs:
      'A shared component library adds review and versioning discipline for every change, in exchange for removing duplicated UI work and cross-platform inconsistency.',
    implementation:
      'A shared, reusable component library on Next.js, React, and Material UI, giving iOS, Android, and desktop one consistent interface.',
    impactAndLessons: 'One consistent interface across iOS, Android, and desktop, and ~30% faster new-feature UI build time.',
  },
  {
    slug: 'monorepo-delivery-pipeline',
    code: 'CS.03',
    title: 'Monorepo & Delivery Pipeline',
    summary: 'One standard monorepo, micro frontend, and containerized delivery model, shipping to AWS, Vercel, and Cloudflare.',
    stack: ['Lerna', 'Micro Frontends', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Vercel', 'Cloudflare'],
    problem:
      'Delivering frontend work to several deployment targets (AWS, Vercel, Cloudflare) called for one standard repository structure and release path.',
    decision:
      'Standardized a monorepo (Lerna) and micro-frontend architecture with containerized delivery on Docker and Kubernetes, shipping through CI/CD to AWS, Vercel, and Cloudflare.',
    tradeoffs:
      'A standardized monorepo and delivery model constrains per-project tooling choices, in exchange for one consistent structure and release path.',
    implementation: 'Lerna monorepo and micro frontend architecture, with Docker/Kubernetes containerized delivery through CI/CD to AWS, Vercel, and Cloudflare.',
    impactAndLessons:
      'A single standardized structure and release path across the AWS, Vercel, and Cloudflare targets. The source doesn’t quantify an outcome for this work, so none is claimed.',
  },
  {
    slug: 'predictable-state-architecture',
    code: 'CS.04',
    title: 'Predictable State Architecture',
    summary: 'Replacing ad-hoc state with a testable data flow that holds up under concurrent load.',
    stack: ['MobX', 'React Query', 'WebSocket', 'SSE'],
    problem:
      'Ad-hoc state patterns were producing state-related defects and a slow ramp-up path for new engineers, while distributed pricing and availability needed to stay consistent across clients under concurrent load.',
    decision:
      'Replaced ad-hoc state with a predictable, testable data flow on MobX and React Query, with client-store synchronization and WebSocket and SSE-driven polling workflows for real-time consistency.',
    tradeoffs:
      'An opinionated, shared state model reduces per-feature flexibility, in exchange for removing the inconsistency and defect surface that ad-hoc patterns created.',
    implementation:
      'MobX and React Query as the client-store layer, with client-store synchronization and WebSocket and SSE-driven polling workflows keeping distributed pricing and availability consistent across clients.',
    impactAndLessons: 'State-related defects down ~35%; new-engineer ramp-up shortened from weeks to days.',
  },
  {
    slug: 'performance-seo-overhaul',
    code: 'CS.05',
    title: 'Performance & SEO Overhaul',
    summary: '65% smaller bundles and ~45% faster page loads on a conversion-driven platform.',
    stack: ['SSR', 'SSG', 'Code Splitting', 'Lazy Loading', 'Profiling', 'Core Web Vitals'],
    problem: 'Bundle size and page-load times needed to come down on a conversion-driven booking platform, where speed also feeds organic search reach.',
    decision: 'Applied SSR, SSG, code splitting, lazy loading, and asset optimization, guided by profiling.',
    tradeoffs:
      'SSR, code splitting, and lazy loading add rendering and bundling complexity to every feature, in exchange for smaller bundles and faster loads.',
    implementation: 'SSR, SSG, code splitting, lazy loading, profiling, and asset optimization.',
    impactAndLessons: '65% smaller bundles, ~45% faster LCP, and ~25% organic traffic growth.',
  },
  {
    slug: 'booking-payments-conversion-funnel',
    code: 'CS.06',
    title: 'Booking & Payments Conversion Funnel',
    summary: 'The end-to-end UI architecture behind the platform’s core conversion path.',
    stack: ['React', 'Next.js', 'Payment Gateway Integration'],
    problem:
      'The booking-and-payment path is the conversion funnel of a booking and e-commerce platform, and it has to hold up across web and mobile, not just look consistent.',
    decision:
      'Built the end-to-end booking workflows and payment integrations, engineering the responsive UI architecture behind the funnel for both web and mobile.',
    tradeoffs:
      'Engineering one responsive UI architecture for web and mobile costs more upfront design effort than building each surface separately, in exchange for one conversion path to test, fix, and improve instead of two.',
    implementation: 'End-to-end booking workflows and payment gateway integration, with a responsive UI architecture covering web and mobile.',
    impactAndLessons:
      'The source material doesn’t break out a conversion-rate or other metric specific to this funnel, so none is claimed. The platform-level gains in Case Study CS.05 (performance) and Case Study CS.04 (state) are the nearest measured outcomes.',
  },
  {
    slug: 'comparefiles-json-diff-tool',
    code: 'CS.07',
    title: 'CompareFiles.net — Privacy-First JSON Diff Tool',
    summary: 'A live, publicly available JSON diff tool where all processing runs client-side — no data leaves the browser.',
    stack: ['Next.js', 'TypeScript', 'Client-Side Processing', 'SEO'],
    problem:
      'Comparing JSON usually means pasting it into a tool that uploads it to a server, which is a non-starter for anything sensitive. A privacy-first alternative has to keep processing in the browser.',
    decision:
      'Built and launched CompareFiles.net, a privacy-first JSON diff tool with all processing client-side, ordered and unordered array diffing, JSON Pointer and ignore-path support, and a secure remote-fetch proxy for comparing remote files.',
    tradeoffs:
      'Client-side-only processing trades server-side compute for a privacy guarantee that holds even for sensitive input. The remote-fetch proxy exists only to fetch remote files; the source doesn’t detail its internals.',
    implementation:
      'Founder and solo developer, owning the full product lifecycle — strategy, architecture, UI/UX, SEO, and deployment — on Next.js and TypeScript.',
    impactAndLessons:
      'Ranks organically on Google for JSON comparison queries, driving steady user traffic without paid acquisition. The source doesn’t give a traffic number, so none is claimed.',
    liveUrl: 'https://comparefiles.net',
  },
]
