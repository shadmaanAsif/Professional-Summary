import type { AIInnovationContent } from '@/data/aiInnovation'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { Reveal } from '@/components/ui/reveal'

export default function AIInnovation({ content }: { content: AIInnovationContent }) {
  return (
    <Section id="ai">
      <SectionHeading eyebrow="AI & Innovation" title={content.heading} description={content.intro} />

      <BentoGrid className="sm:grid-cols-2">
        {content.capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={(index % 2) * 0.06}>
            <BentoCard className="h-full">
              <h3 className="text-sm font-semibold text-foreground">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{capability.detail}</p>
            </BentoCard>
          </Reveal>
        ))}
      </BentoGrid>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-brand/25 bg-brand/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/90">{content.adoptionStory}</p>
          <div className="shrink-0 sm:max-w-[220px] sm:text-right">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{content.metric.label}</p>
            <p className="mt-1.5 text-lg font-semibold text-brand">{content.metric.value}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
