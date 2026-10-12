import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ArchitectureDiagram } from '@/data/architecture'
import type { ImpactMetric } from '@/data/profile'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { Badge } from '@/components/ui/badge'
import SdkLayerDiagram from './SdkLayerDiagram'
import ApiLayerDiagram from './ApiLayerDiagram'
import PipelineDiagram from './PipelineDiagram'
import DataFlowDiagram from './DataFlowDiagram'
import ImpactMetrics from './ImpactMetrics'

export default function Architecture({
  diagrams,
  metrics,
}: {
  diagrams: ArchitectureDiagram[]
  metrics: ImpactMetric[]
}) {
  return (
    <Section id="architecture">
      <SectionHeading
        eyebrow="Architecture"
        title="Architecture & System Design"
        description="Derived directly from the architecture decisions described in my experience. Where a diagram reflects a described pattern rather than exact internal wiring, it is marked as a conceptual representation."
        className="mb-5"
      />

      <Link
        href="/architecture"
        className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide text-brand"
      >
        View full architecture deep-dive
        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>

      <div className="mt-8 flex flex-col gap-6">
        {diagrams.map((diagram, index) => (
          <Reveal key={diagram.id} delay={Math.min(index * 0.06, 0.18)}>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex flex-1 flex-wrap items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-wide text-muted-foreground">{diagram.code}</span>
                  <h3 className="text-lg font-semibold text-foreground">{diagram.title}</h3>
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
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
