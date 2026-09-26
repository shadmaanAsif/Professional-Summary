import type { ImpactMetric } from '@/data/profile'
import styles from './Architecture.module.css'

export default function ImpactMetrics({ metrics }: { metrics: ImpactMetric[] }) {
  return (
    <div className={styles.metrics} role="img" aria-label="Bar chart of measurable delivery outcomes at Almosafer">
      {metrics.map((metric) => (
        <div key={metric.label} className={styles.metricRow}>
          <span className={styles.metricLabel}>{metric.label}</span>
          <span className={styles.metricTrack}>
            <span className={styles.metricFill} style={{ width: `${metric.magnitude}%` }} />
          </span>
          <span className={styles.metricValue}>{metric.value}</span>
        </div>
      ))}
    </div>
  )
}
