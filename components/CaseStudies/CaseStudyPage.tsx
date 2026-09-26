import type { CaseStudy } from '@/data/caseStudies'
import styles from './CaseStudyPage.module.css'

const STAGES: { key: keyof Pick<CaseStudy, 'problem' | 'decision' | 'tradeoffs' | 'implementation' | 'impactAndLessons'>; label: string }[] = [
  { key: 'problem', label: '01 — Problem' },
  { key: 'decision', label: '02 — Decision' },
  { key: 'tradeoffs', label: '03 — Trade-offs' },
  { key: 'implementation', label: '04 — Implementation' },
  { key: 'impactAndLessons', label: '05 — Impact & Lessons' },
]

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <article className={styles.article}>
      <p className={styles.code}>{study.code}</p>
      <h1 className={styles.title}>{study.title}</h1>
      <p className={styles.summary}>{study.summary}</p>

      <ul className={styles.stack}>
        {study.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <dl className={styles.stagesList}>
        {STAGES.map(({ key, label }) => (
          <div key={key} className={styles.stage}>
            <dt>{label}</dt>
            <dd className={key === 'impactAndLessons' ? styles.impact : undefined}>{study[key]}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
