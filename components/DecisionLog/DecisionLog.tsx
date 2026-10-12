import { ChevronDown } from 'lucide-react'
import type { Decision } from '@/data/decisions'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

const FIELDS: { key: keyof Decision; label: string }[] = [
  { key: 'context', label: 'Context' },
  { key: 'options', label: 'Options' },
  { key: 'decision', label: 'Decision' },
  { key: 'tradeoffs', label: 'Trade-offs' },
  { key: 'consequences', label: 'Consequences' },
]

export default function DecisionLog({ decisions }: { decisions: Decision[] }) {
  return (
    <Section id="decisions">
      <SectionHeading
        eyebrow="Engineering Decision Log"
        title="Six decisions, written as ADRs"
        description="Context, options, decision, trade-offs, consequences — for the architecture work above."
      />

      <div className="flex flex-col gap-3">
        {decisions.map((decision, index) => (
          <Reveal key={decision.id} delay={Math.min(index * 0.05, 0.2)}>
            <details className="group rounded-xl border border-border bg-card open:border-brand/30">
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="shrink-0 font-mono text-xs text-muted-foreground">{decision.id}</span>
                <span className="flex-1 text-[15px] font-medium text-foreground">{decision.title}</span>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <dl className="grid grid-cols-1 gap-5 border-t border-border px-5 py-5 sm:grid-cols-2">
                {FIELDS.map(({ key, label }) => (
                  <div key={key}>
                    <dt className="font-mono text-[11px] uppercase tracking-wide text-brand">{label}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{decision[key]}</dd>
                  </div>
                ))}
              </dl>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
