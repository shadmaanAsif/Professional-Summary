import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex min-h-7 max-w-full items-center rounded-md border border-border bg-foreground/[0.05] px-2.5 py-1 font-mono text-xs leading-snug text-foreground/80 dark:bg-foreground/10',
        className,
      )}
    >
      {children}
    </span>
  )
}
