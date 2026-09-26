import type { ArchitectureDiagram } from '@/data/architecture'
import type { ImpactMetric } from '@/data/profile'
import SdkLayerDiagram from '@/components/Architecture/SdkLayerDiagram'
import PipelineDiagram from '@/components/Architecture/PipelineDiagram'
import DataFlowDiagram from '@/components/Architecture/DataFlowDiagram'
import ImpactMetrics from '@/components/Architecture/ImpactMetrics'
import styles from './ArchitecturePage.module.css'

const STAGE_FIELDS: { key: 'constraints' | 'options' | 'decision' | 'tradeoffs' | 'outcome'; label: string }[] = [
  { key: 'constraints', label: 'Constraints' },
  { key: 'options', label: 'Options' },
  { key: 'decision', label: 'Decision' },
  { key: 'tradeoffs', label: 'Trade-offs' },
  { key: 'outcome', label: 'Outcome' },
]

export default function ArchitecturePage({ diagrams, metrics }: { diagrams: ArchitectureDiagram[]; metrics: ImpactMetric[] }) {
  return (
    <div className={styles.page}>
      <p className={styles.kicker}>ARCHITECTURE DEEP-DIVE</p>
      <h1 className={styles.heading}>Architecture &amp; System Design</h1>
      <p className={styles.intro}>
        The full detail behind each diagram on the homepage — problem, options, decision, and
        trade-offs. A stage is shown only where the source material actually supports it.
      </p>

      <div className={styles.diagrams}>
        {diagrams.map((diagram) => (
          <article key={diagram.id} className={styles.diagram}>
            <div className={styles.diagramHeader}>
              <span className={styles.code}>{diagram.code}</span>
              <h2 className={styles.diagramTitle}>{diagram.title}</h2>
              {diagram.conceptual && <span className={styles.conceptualTag}>Conceptual representation</span>}
            </div>
            <p className={styles.summary}>{diagram.summary}</p>

            {diagram.id === 'impact-metrics' && <ImpactMetrics metrics={metrics} />}
            {diagram.id === 'sdk-layer' && <SdkLayerDiagram />}
            {diagram.id === 'pipeline' && <PipelineDiagram />}
            {diagram.id === 'data-flow' && <DataFlowDiagram />}

            <dl className={styles.stages}>
              {STAGE_FIELDS.map(({ key, label }) => {
                const value = diagram[key]
                if (!value) return null
                return (
                  <div key={key}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                )
              })}
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}
