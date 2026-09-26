import type { EngineeringImpactCategory } from '@/data/engineeringImpact'
import styles from './EngineeringImpact.module.css'

export default function EngineeringImpact({ categories }: { categories: EngineeringImpactCategory[] }) {
  return (
    <section id="impact" className={styles.section} aria-labelledby="engineering-impact-heading">
      <p className={styles.sheetLabel}>SHEET 07 — CAPABILITY MAP</p>
      <h2 id="engineering-impact-heading" className={styles.heading}>
        Engineering Impact
      </h2>
      <p className={styles.intro}>
        The same body of work at Almosafer, read across the dimensions a platform team is actually
        judged on.
      </p>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.category} className={styles.card}>
            <h3 className={styles.category}>{category.category}</h3>
            <ul className={styles.items}>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
