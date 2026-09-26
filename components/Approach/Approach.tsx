import type { ApproachPrinciple } from '@/data/profile'
import styles from './Approach.module.css'

export default function Approach({ principles }: { principles: ApproachPrinciple[] }) {
  return (
    <section id="approach" className={styles.section} aria-labelledby="approach-heading">
      <p className={styles.sheetLabel}>SHEET 09 — METHOD</p>
      <h2 id="approach-heading" className={styles.heading}>
        Engineering Approach
      </h2>

      <ol className={styles.list}>
        {principles.map((principle, index) => (
          <li key={principle.title} className={styles.item}>
            <span className={styles.code}>{`M.${String(index + 1).padStart(2, '0')}`}</span>
            <div>
              <h3 className={styles.itemTitle}>{principle.title}</h3>
              <p className={styles.itemDetail}>{principle.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
