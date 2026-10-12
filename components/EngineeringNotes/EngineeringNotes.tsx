import type { EngineeringNote } from '@/data/notes'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

export default function EngineeringNotes({ notes }: { notes: EngineeringNote[] }) {
  return (
    <Section id="notes">
      <SectionHeading
        eyebrow="Engineering Notes"
        title="Short-form reasoning behind the decisions above"
        description="Not published articles — just the thinking written down."
      />

      <div className="flex flex-col divide-y divide-border border-t border-border">
        {notes.map((note, index) => (
          <Reveal key={note.title} delay={Math.min(index * 0.05, 0.2)}>
            <article className="py-6">
              <h3 className="text-base font-semibold text-foreground">{note.title}</h3>
              <p className="mt-2.5 max-w-[70ch] text-[15px] leading-relaxed text-muted-foreground">{note.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
