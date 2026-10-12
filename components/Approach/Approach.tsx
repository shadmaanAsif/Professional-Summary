import type { ApproachPrinciple } from '@/data/profile'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'

export default function Approach({ principles }: { principles: ApproachPrinciple[] }) {
  return (
    <Section id="approach">
      <SectionHeading eyebrow="Engineering Approach" title="How I think about trade-offs" />

      <ol className="flex flex-col divide-y divide-border border-t border-border">
        {principles.map((principle, index) => (
          <Reveal key={principle.title} as="li" delay={Math.min(index * 0.05, 0.2)}>
            <div className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-8">
              <span className="font-mono text-xs text-brand sm:w-14 sm:shrink-0 sm:pt-1">
                {`M.${String(index + 1).padStart(2, '0')}`}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 max-w-[68ch] text-[15px] leading-relaxed text-muted-foreground">{principle.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
