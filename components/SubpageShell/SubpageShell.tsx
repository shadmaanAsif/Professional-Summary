import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

interface SubpageShellProps {
  name: string
  education: string
  location: string
  children: React.ReactNode
}

export default function SubpageShell({ name, education, location, children }: SubpageShellProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 h-(--header-height) border-b border-border/80 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-(--max-width) items-center justify-between gap-4 px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="inline-flex size-7 items-center justify-center rounded-lg bg-brand font-mono text-xs font-semibold text-brand-foreground">
              {initials}
            </span>
            <span className="hidden text-sm font-semibold sm:inline">{name}</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </Link>

          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="flex flex-wrap items-center justify-center gap-2.5 border-t border-border px-6 py-5 text-center font-mono text-[11px] tracking-wide text-muted-foreground">
        <span>{name.toUpperCase()}</span>
        <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
        <span>{education}</span>
        <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
        <span>{location}</span>
      </footer>
    </div>
  )
}
