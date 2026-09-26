import Link from 'next/link'
import styles from './SubpageShell.module.css'

interface SubpageShellProps {
  name: string
  education: string
  location: string
  children: React.ReactNode
}

export default function SubpageShell({ name, education, location, children }: SubpageShellProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.bar}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              {initials}
            </span>
            <span className={styles.brandName}>{name}</span>
          </Link>
          <Link href="/" className={styles.back}>
            <span aria-hidden="true">←</span> Back to portfolio
          </Link>
        </div>
      </header>

      <main className={styles.stage}>{children}</main>

      <footer className={styles.titleBlock}>
        <span>{name.toUpperCase()}</span>
        <span className={styles.titleBlockDivider} aria-hidden="true" />
        <span>{education}</span>
        <span className={styles.titleBlockDivider} aria-hidden="true" />
        <span>{location}</span>
      </footer>
    </div>
  )
}
