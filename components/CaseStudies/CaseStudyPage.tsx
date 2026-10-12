import { ArrowUpRight } from 'lucide-react'
import type { CaseStudy } from '@/data/caseStudies'
import { Reveal } from '@/components/ui/reveal'
import { Chip } from '@/components/ui/chip'
import { Eyebrow } from '@/components/ui/eyebrow'

const STAGES: { key: keyof Pick<CaseStudy, 'problem' | 'decision' | 'tradeoffs' | 'implementation' | 'impactAndLessons'>; label: string }[] = [
  { key: 'problem', label: '01 — Problem' },
  { key: 'decision', label: '02 — Decision' },
  { key: 'tradeoffs', label: '03 — Trade-offs' },
  { key: 'implementation', label: '04 — Implementation' },
  { key: 'impactAndLessons', label: '05 — Impact & Lessons' },
]

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <article className="mx-auto max-w-(--max-width) px-6 py-12 sm:py-16">
      <Eyebrow>{study.code}</Eyebrow>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{study.title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{study.summary}</p>

      {study.liveUrl && (
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-brand"
        >
          Visit {study.liveUrl.replace('https://', '')}
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}

      <ul className="mt-6 flex flex-wrap gap-2">
        {study.stack.map((tech) => (
          <li key={tech}>
            <Chip>{tech}</Chip>
          </li>
        ))}
      </ul>

      <dl className="mt-10 flex flex-col divide-y divide-border border-t border-border">
        {STAGES.map(({ key, label }, index) => (
          <Reveal key={key} delay={Math.min(index * 0.05, 0.2)}>
            <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
              <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
              <dd
                className={
                  key === 'impactAndLessons'
                    ? 'max-w-[68ch] text-lg font-medium leading-relaxed text-foreground'
                    : 'max-w-[68ch] text-[15px] leading-relaxed text-foreground/85'
                }
              >
                {study[key]}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </article>
  )
}
