import type { ImpactMetric } from '@/data/profile'

export default function ImpactMetrics({ metrics }: { metrics: ImpactMetric[] }) {
  return (
    <div
      className="flex flex-col gap-4"
      role="img"
      aria-label="Bar chart of measurable delivery outcomes at Almosafer"
    >
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[minmax(140px,220px)_1fr_64px] sm:gap-3.5"
        >
          <span className="text-sm text-muted-foreground">{metric.label}</span>
          <span className="block h-2 overflow-hidden rounded-full bg-accent">
            <span
              className="block h-full rounded-full bg-brand"
              style={{ width: `${metric.magnitude}%` }}
            />
          </span>
          <span className="text-left font-mono text-sm font-semibold text-brand sm:text-right">
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  )
}
