import Link from 'next/link'
import type { CaseStudy } from '@/data/caseStudies'
import styles from './CaseStudies.module.css'

export default function CaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section id="case-studies" className={styles.section} aria-labelledby="case-studies-heading">
      <p className={styles.sheetLabel}>SHEET 08 — CASE STUDIES</p>
      <h2 id="case-studies-heading" className={styles.heading}>
        Case Studies
      </h2>
      <p className={styles.intro}>
        Six initiatives from my time at Almosafer, each following the same shape: problem,
        decision, trade-offs, implementation, and measured impact.
      </p>

      <div className={styles.grid}>
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`} className={styles.card}>
            <p className={styles.code}>{study.code}</p>
            <h3 className={styles.title}>{study.title}</h3>
            <p className={styles.summary}>{study.summary}</p>
            <ul className={styles.stack}>
              {study.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <span className={styles.link}>
              Read the case study
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
