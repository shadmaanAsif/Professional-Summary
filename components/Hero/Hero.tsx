import type { HeroContent } from '@/data/profile'
import ScrollLink from '@/components/ScrollLink/ScrollLink'
import styles from './Hero.module.css'

export default function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <p className={styles.sheetLabel}>SHEET 01 — {hero.kicker.toUpperCase()}</p>

      <h1 id="hero-heading" className={styles.name}>
        {hero.name}
      </h1>

      <p className={styles.title}>{hero.title}</p>

      <p className={styles.statement}>{hero.statement}</p>

      <div className={styles.meta}>
        <span>{hero.location}</span>
        <span className={styles.dot} aria-hidden="true" />
        <span>{hero.availability}</span>
      </div>

      <ul className={styles.stack}>
        {hero.stackTags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className={styles.ctaRow}>
        <ScrollLink targetId="case-studies" className={styles.cta}>
          Explore my work
          <span aria-hidden="true">↓</span>
        </ScrollLink>
        <a href="/resume.pdf" target="_blank" rel="noreferrer noopener" className={styles.ctaSecondary}>
          View resume
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
