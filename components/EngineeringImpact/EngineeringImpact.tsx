import type { EngineeringImpactCategory } from '@/data/engineeringImpact'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'
import { Reveal } from '@/components/ui/reveal'

export default function EngineeringImpact({ categories }: { categories: EngineeringImpactCategory[] }) {
  return (
    <Section id="impact">
      <SectionHeading
        eyebrow="Engineering Impact"
        title="The same body of work, read the way a platform team is judged"
        description="The same work at Almosafer, viewed across the dimensions a platform team is actually judged on."
      />

      <BentoGrid className="sm:grid-cols-2">
        {categories.map((category, index) => (
          <Reveal key={category.category} delay={(index % 2) * 0.06}>
            <BentoCard className="h-full">
              <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-border" />
                    {item}
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
