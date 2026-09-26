import type { ExpertiseGroup } from '@/data/profile'
import styles from './Expertise.module.css'

export default function Expertise({ groups }: { groups: ExpertiseGroup[] }) {
  return (
    <section id="expertise" className={styles.section} aria-labelledby="expertise-heading">
      <p className={styles.sheetLabel}>SHEET 04 — SPECIFICATION</p>
      <h2 id="expertise-heading" className={styles.heading}>
        Expertise
      </h2>

      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.category} className={styles.card}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
