'use client'

import type { HeadlineStat } from '@/data/profile'
import { useCountUp } from './useCountUp'
import { Reveal } from '@/components/ui/reveal'

// Dividers are drawn per cell so the 2-col (mobile) and 3-col grids both get row + column rules;
// the first column drops its left padding so the figures line up with the section content below.
const CELL_CLASSES = [
  'border-border py-5 pl-6 pr-4',
  'max-sm:odd:pl-0 max-sm:even:border-l max-sm:[&:nth-child(n+3)]:border-t',
  'sm:border-l sm:[&:nth-child(3n+1)]:border-l-0 sm:[&:nth-child(3n+1)]:pl-0 sm:[&:nth-child(n+4)]:border-t',
].join(' ')

function StatCard({ stat, index }: { stat: HeadlineStat; index: number }) {
  const { ref, value } = useCountUp(stat.value)
  return (
    <Reveal delay={index * 0.05} className={CELL_CLASSES}>
      <div ref={ref}>
        <p className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {stat.prefix}
          {value}
          {stat.suffix}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
      </div>
    </Reveal>
  )
}

export default function ImpactStrip({ stats }: { stats: HeadlineStat[] }) {
  return (
    <section aria-label="Measurable engineering outcomes" className="border-t border-border">
      <div className="mx-auto grid max-w-(--max-width) grid-cols-2 px-6 py-6 sm:grid-cols-3 sm:py-8">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  )
}
