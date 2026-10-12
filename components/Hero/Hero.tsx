import { ArrowDown, ArrowUpRight } from 'lucide-react'
import type { HeroContent } from '@/data/profile'
import ScrollLink from '@/components/ScrollLink/ScrollLink'
import { Spotlight } from '@/components/ui/spotlight'
import { Chip } from '@/components/ui/chip'
import { Eyebrow } from '@/components/ui/eyebrow'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

export default function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-var(--header-height))] flex-col justify-center overflow-hidden py-12 sm:py-16"
      aria-labelledby="hero-heading"
    >
      <Spotlight />

      <div className="relative mx-auto w-full max-w-(--max-width) px-6">
        <Reveal>
          <Eyebrow>{hero.kicker}</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 id="hero-heading" className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {hero.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-base text-muted-foreground sm:text-lg">
            <span>{hero.title}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            <a
              href={hero.secondaryTitleHref}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-1 font-semibold text-brand hover:underline"
            >
              {hero.secondaryTitle}
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90 sm:text-xl">{hero.statement}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 text-sm text-muted-foreground">
            <span>{hero.location}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            <span>{hero.availability}</span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="mt-4 flex flex-wrap gap-2">
            {hero.stackTags.map((tag) => (
              <li key={tag}>
                <Chip>{tag}</Chip>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ScrollLink
              targetId="case-studies"
              className={cn(buttonVariants({ size: 'lg' }), 'group h-12 rounded-xl px-6 text-sm font-semibold')}
            >
              Explore my work
              <ArrowDown className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </ScrollLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'group h-12 rounded-xl px-6 text-sm font-semibold')}
            >
              View resume
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
