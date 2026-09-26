import type { Decision } from '@/data/decisions'
import styles from './DecisionLog.module.css'

export default function DecisionLog({ decisions }: { decisions: Decision[] }) {
  return (
    <section id="decisions" className={styles.section} aria-labelledby="decisions-heading">
      <p className={styles.sheetLabel}>SHEET 11 — ENGINEERING DECISION LOG</p>
      <h2 id="decisions-heading" className={styles.heading}>
        Engineering Decision Log
      </h2>
      <p className={styles.intro}>
        Five architecture decisions from the work above, written as ADRs — context, options,
        decision, trade-offs, consequences.
      </p>

      <div className={styles.list}>
        {decisions.map((decision) => (
          <details key={decision.id} className={styles.entry}>
            <summary className={styles.summary}>
              <span className={styles.id}>{decision.id}</span>
              <span className={styles.title}>{decision.title}</span>
              <span className={styles.chevron} aria-hidden="true">
                ⌄
              </span>
            </summary>

            <dl className={styles.detail}>
              <div>
                <dt>Context</dt>
                <dd>{decision.context}</dd>
              </div>
              <div>
                <dt>Options</dt>
                <dd>{decision.options}</dd>
              </div>
              <div>
                <dt>Decision</dt>
                <dd>{decision.decision}</dd>
              </div>
              <div>
                <dt>Trade-offs</dt>
                <dd>{decision.tradeoffs}</dd>
              </div>
              <div>
                <dt>Consequences</dt>
                <dd className={styles.consequences}>{decision.consequences}</dd>
              </div>
            </dl>
          </details>
        ))}
      </div>
    </section>
  )
}
