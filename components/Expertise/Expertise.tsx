import type { ExpertiseGroup } from '@/data/profile'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { Reveal } from '@/components/ui/reveal'
import { Chip } from '@/components/ui/chip'

export default function Expertise({ groups }: { groups: ExpertiseGroup[] }) {
  return (
    <Section id="expertise">
      <SectionHeading eyebrow="Expertise" title="Depth across the stack, not just the interface" />

      <BentoGrid>
        {groups.map((group, index) => (
          <Reveal key={group.category} as="div" delay={(index % 3) * 0.06}>
            <BentoCard className="h-full">
              <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </Reveal>
        ))}
      </BentoGrid>
    </Section>
  )
}
