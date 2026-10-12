import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3', className)}>
      {children}
    </div>
  )
}

interface BentoCardProps {
  children: ReactNode
  className?: string
  span?: 'default' | 'wide'
}

export function BentoCard({ children, className, span = 'default' }: BentoCardProps) {
  return (
    <div
      className={cn(
        'bg-card p-6 transition-colors duration-300 hover:bg-accent/60',
        span === 'wide' && 'sm:col-span-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
