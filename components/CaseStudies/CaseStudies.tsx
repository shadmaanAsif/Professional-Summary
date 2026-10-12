import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { CaseStudy } from '@/data/caseStudies'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { Chip } from '@/components/ui/chip'

export default function CaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <Section id="case-studies">
      <SectionHeading
        eyebrow="Case Studies"
        title="Seven initiatives, one shape: problem, decision, trade-offs, impact"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={(index % 2) * 0.06}>
            <Link
              href={`/case-studies/${study.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-brand/40 hover:bg-accent/60"
            >
              <p className="font-mono text-[11px] tracking-wide text-muted-foreground">{study.code}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{study.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li key={tech}>
                    <Chip>{tech}</Chip>
                  </li>
                ))}
              </ul>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read the case study
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
