import type { ContactContent } from '@/data/profile'
import styles from './Contact.module.css'

export default function Contact({ contact }: { contact: ContactContent }) {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <p className={styles.sheetLabel}>SHEET 13 — CONTACT</p>
      <h2 id="contact-heading" className={styles.heading}>
        {contact.heading}
      </h2>

      <p className={styles.message}>{contact.message}</p>

      <ul className={styles.links}>
        {contact.links.map((link) => (
          <li key={link.label}>
            <a
              className={styles.link}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkValue}>{link.value}</span>
              <span className={styles.linkArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className={styles.location}>{contact.location}</p>
    </section>
  )
}
