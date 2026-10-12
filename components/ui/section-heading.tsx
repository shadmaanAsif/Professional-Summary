import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'
import { Eyebrow } from '@/components/ui/eyebrow'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

// Owns the gap between a section's heading block and its content (mb-10), so individual
// sections don't each pick their own; pass a className to override where a layout needs it.
export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-10 max-w-2xl', className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p> : null}
    </Reveal>
  )
}
