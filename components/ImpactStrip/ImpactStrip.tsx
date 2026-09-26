'use client'

import type { HeadlineStat } from '@/data/profile'
import { useCountUp } from './useCountUp'
import styles from './ImpactStrip.module.css'

function StatCard({ stat }: { stat: HeadlineStat }) {
  const { ref, value } = useCountUp(stat.value)
  return (
    <div className={styles.card} ref={ref}>
      <p className={styles.value}>
        {stat.prefix}
        {value}
        {stat.suffix}
      </p>
      <p className={styles.label}>{stat.label}</p>
    </div>
  )
}

export default function ImpactStrip({ stats }: { stats: HeadlineStat[] }) {
  return (
    <section className={styles.section} aria-label="Measurable engineering outcomes">
      <p className={styles.sheetLabel}>SHEET 02 — MEASURABLE OUTCOMES</p>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
