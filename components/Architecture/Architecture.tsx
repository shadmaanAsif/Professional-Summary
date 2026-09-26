import type { ArchitectureDiagram } from '@/data/architecture'
import type { ImpactMetric } from '@/data/profile'
import Link from 'next/link'
import styles from './Architecture.module.css'
import SdkLayerDiagram from './SdkLayerDiagram'
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
    <section id="architecture" className={styles.section} aria-labelledby="architecture-heading">
      <p className={styles.sheetLabel}>SHEET 06 — SYSTEM DIAGRAMS</p>
      <h2 id="architecture-heading" className={styles.heading}>
        Architecture &amp; System Design
      </h2>
      <p className={styles.intro}>
        Derived directly from the architecture decisions described in my experience. Where a
        diagram reflects a described pattern rather than exact internal wiring, it is marked as a
        conceptual representation.
      </p>

      <Link href="/architecture" className={styles.deepLink}>
        View full architecture deep-dive
        <span aria-hidden="true">→</span>
      </Link>

      <div className={styles.diagrams}>
        {diagrams.map((diagram) => (
          <article key={diagram.id} className={styles.diagram} aria-labelledby={`diagram-${diagram.id}`}>
            <div className={styles.diagramHeader}>
              <span className={styles.diagramCode}>{diagram.code}</span>
              <h3 id={`diagram-${diagram.id}`} className={styles.diagramTitle}>
                {diagram.title}
              </h3>
              {diagram.conceptual && <span className={styles.conceptualTag}>Conceptual representation</span>}
            </div>
            <p className={styles.diagramSummary}>{diagram.summary}</p>

            {diagram.id === 'impact-metrics' && <ImpactMetrics metrics={metrics} />}
            {diagram.id === 'sdk-layer' && <SdkLayerDiagram />}
            {diagram.id === 'pipeline' && <PipelineDiagram />}
            {diagram.id === 'data-flow' && <DataFlowDiagram />}
          </article>
        ))}
      </div>
    </section>
  )
}
