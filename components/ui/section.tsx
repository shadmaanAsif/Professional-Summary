import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  id,
  children,
  className,
  border = true,
  ...rest
}: {
  id?: string
  children: ReactNode
  className?: string
  border?: boolean
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn('border-border py-12 sm:py-[4.5rem]', border && 'border-t', className)}
      {...rest}
    >
      <div className="mx-auto max-w-(--max-width) px-6">{children}</div>
    </section>
  )
}
