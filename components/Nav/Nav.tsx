import ScrollLink from '@/components/ScrollLink/ScrollLink'
import styles from './Nav.module.css'

interface Section {
  id: string
  label: string
  number: string
}

interface NavProps {
  sections: readonly Section[]
  active: string
  name: string
}

export default function Nav({ sections, active, name }: NavProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <ScrollLink targetId="home" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            {initials}
          </span>
          <span className={styles.brandName}>{name}</span>
        </ScrollLink>

        <nav className={styles.nav} aria-label="Portfolio sections">
          <ul className={styles.list}>
            {sections.map((section) => {
              const isActive = section.id === active
              return (
                <li key={section.id}>
                  <ScrollLink
                    targetId={section.id}
                    className={styles.tab}
                    data-active={isActive || undefined}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={styles.tabNumber}>{section.number}</span>
                    <span className={styles.tabLabel}>{section.label}</span>
                  </ScrollLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
