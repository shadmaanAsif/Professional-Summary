import type { AIInnovationContent } from '@/data/aiInnovation'
import styles from './AIInnovation.module.css'

export default function AIInnovation({ content }: { content: AIInnovationContent }) {
  return (
    <section id="ai" className={styles.section} aria-labelledby="ai-heading">
      <p className={styles.sheetLabel}>SHEET 10 — AI &amp; INNOVATION</p>
      <h2 id="ai-heading" className={styles.heading}>
        {content.heading}
      </h2>
      <p className={styles.intro}>{content.intro}</p>

      <div className={styles.grid}>
        {content.capabilities.map((capability) => (
          <div key={capability.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{capability.title}</h3>
            <p className={styles.cardDetail}>{capability.detail}</p>
          </div>
        ))}
      </div>

      <div className={styles.story}>
        <p className={styles.storyText}>{content.adoptionStory}</p>
        <div className={styles.metric}>
          <span className={styles.metricValue}>{content.metric.value}</span>
          <span className={styles.metricLabel}>{content.metric.label}</span>
        </div>
      </div>
    </section>
  )
}
