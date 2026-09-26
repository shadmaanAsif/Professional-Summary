import type { EngineeringNote } from '@/data/notes'
import styles from './EngineeringNotes.module.css'

export default function EngineeringNotes({ notes }: { notes: EngineeringNote[] }) {
  return (
    <section id="notes" className={styles.section} aria-labelledby="notes-heading">
      <p className={styles.sheetLabel}>SHEET 12 — ENGINEERING NOTES</p>
      <h2 id="notes-heading" className={styles.heading}>
        Engineering Notes
      </h2>
      <p className={styles.intro}>
        Short-form reflections on the reasoning behind the architecture decisions above — not
        published articles, just the thinking written down.
      </p>

      <div className={styles.list}>
        {notes.map((note) => (
          <article key={note.title} className={styles.note}>
            <h3 className={styles.noteTitle}>{note.title}</h3>
            <p className={styles.noteDetail}>{note.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
