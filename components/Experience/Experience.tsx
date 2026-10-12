import type { ExperienceEntry } from '@/data/profile'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { Chip } from '@/components/ui/chip'

export default function Experience({ experience }: { experience: ExperienceEntry[] }) {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="From shipping features to owning the systems they run on" />

      <ol className="relative border-l border-border pl-8 sm:pl-10">
        {experience.map((entry, index) => (
          <li key={entry.company} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(2rem+5px)] top-[0.6rem] size-[9px] rounded-full border-2 border-brand bg-background sm:-left-[calc(2.5rem+5px)]"
            />

            <Reveal delay={Math.min(index * 0.08, 0.24)}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {entry.role} <span className="font-normal text-muted-foreground">· {entry.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {entry.location} — {entry.period}
                </p>
              </div>

              <ul className="mt-3 space-y-2.5">
                {entry.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                    <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-border" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <li key={tech}>
                    <Chip>{tech}</Chip>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
