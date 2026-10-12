import type { AboutContent } from '@/data/profile'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

function renderWithHighlights(text: string, terms: string[] | undefined) {
  if (!terms?.length) return text

  const pattern = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  const parts = text.split(pattern)

  return parts.map((part, index) =>
    terms.includes(part) ? (
      <strong key={index} className="font-semibold text-brand">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

export default function About({ about }: { about: AboutContent }) {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <SectionHeading eyebrow="About" title={about.heading} className="mb-0" />

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90">{about.intro}</p>
          </Reveal>

          <ul className="mt-6 flex flex-col gap-4">
            {about.points.map((point, index) => (
              <Reveal key={point.label} as="li" delay={Math.min((index + 1) * 0.06, 0.3)}>
                <div className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
                  <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-border" />
                  <p>
                    <span className="font-semibold text-foreground">{point.label}</span>
                    {' — '}
                    {renderWithHighlights(point.detail, about.highlights)}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
