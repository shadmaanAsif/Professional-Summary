import type { ArchitectureDiagram } from '@/data/architecture'
import type { ImpactMetric } from '@/data/profile'
import SdkLayerDiagram from '@/components/Architecture/SdkLayerDiagram'
import ApiLayerDiagram from '@/components/Architecture/ApiLayerDiagram'
import PipelineDiagram from '@/components/Architecture/PipelineDiagram'
import DataFlowDiagram from '@/components/Architecture/DataFlowDiagram'
import ImpactMetrics from '@/components/Architecture/ImpactMetrics'
import { Reveal } from '@/components/ui/reveal'
import { Badge } from '@/components/ui/badge'
import { Eyebrow } from '@/components/ui/eyebrow'

const STAGE_FIELDS: { key: 'constraints' | 'options' | 'decision' | 'tradeoffs' | 'outcome'; label: string }[] = [
  { key: 'constraints', label: 'Constraints' },
  { key: 'options', label: 'Options' },
  { key: 'decision', label: 'Decision' },
  { key: 'tradeoffs', label: 'Trade-offs' },
  { key: 'outcome', label: 'Outcome' },
]

export default function ArchitecturePage({ diagrams, metrics }: { diagrams: ArchitectureDiagram[]; metrics: ImpactMetric[] }) {
  return (
    <div className="mx-auto max-w-(--max-width) px-6 py-12 sm:py-16">
      <Eyebrow>Architecture Deep-Dive</Eyebrow>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Architecture &amp; System Design</h1>
      <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-muted-foreground">
        The full detail behind each diagram on the homepage — problem, options, decision, and trade-offs. A stage is
        shown only where the source material actually supports it.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        {diagrams.map((diagram, index) => (
          <Reveal key={diagram.id} delay={Math.min(index * 0.06, 0.18)}>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex flex-1 flex-wrap items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-wide text-muted-foreground">{diagram.code}</span>
                  <h2 className="text-xl font-semibold text-foreground">{diagram.title}</h2>
                </div>
                {diagram.conceptual && (
                  <Badge variant="outline" className="font-mono text-[11px] font-normal uppercase tracking-wide text-muted-foreground">
                    Conceptual representation
                  </Badge>
                )}
              </div>
              <p className="mb-6 max-w-[68ch] text-sm leading-relaxed text-muted-foreground">{diagram.summary}</p>

              {diagram.id === 'impact-metrics' && <ImpactMetrics metrics={metrics} />}
              {diagram.id === 'sdk-layer' && <SdkLayerDiagram />}
              {diagram.id === 'api-layer' && <ApiLayerDiagram />}
              {diagram.id === 'pipeline' && <PipelineDiagram />}
              {diagram.id === 'data-flow' && <DataFlowDiagram />}

              <dl className="mt-8 grid grid-cols-1 gap-5 border-t border-border pt-6 sm:grid-cols-2">
                {STAGE_FIELDS.map(({ key, label }) => {
                  const value = diagram[key]
                  if (!value) return null
                  return (
                    <div key={key}>
                      <dt className="font-mono text-[11px] uppercase tracking-wide text-brand">{label}</dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{value}</dd>
                    </div>
                  )
                })}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
