import type { ExperienceEntry } from '@/data/profile'
import styles from './Experience.module.css'

export default function Experience({ experience }: { experience: ExperienceEntry[] }) {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      <p className={styles.sheetLabel}>SHEET 05 — TIMELINE</p>
      <h2 id="experience-heading" className={styles.heading}>
        Experience
      </h2>

      <ol className={styles.timeline}>
        {experience.map((entry) => (
          <li key={entry.company} className={styles.entry}>
            <div className={styles.marker} aria-hidden="true" />

            <div className={styles.entryHeader}>
              <h3 className={styles.role}>
                {entry.role} <span className={styles.at}>· {entry.company}</span>
              </h3>
              <p className={styles.period}>
                {entry.location} — {entry.period}
              </p>
            </div>

            <ul className={styles.highlights}>
              {entry.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>

            <ul className={styles.stack}>
              {entry.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
