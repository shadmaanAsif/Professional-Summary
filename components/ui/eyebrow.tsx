import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brand', className)}>
      <span aria-hidden="true" className="h-px w-5 bg-brand/60" />
      {children}
    </p>
  )
}
