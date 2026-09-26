import type { AboutContent } from '@/data/profile'
import styles from './About.module.css'

export default function About({ about }: { about: AboutContent }) {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <p className={styles.sheetLabel}>SHEET 03 — NARRATIVE</p>
      <h2 id="about-heading" className={styles.heading}>
        {about.heading}
      </h2>

      <div className={styles.body}>
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
