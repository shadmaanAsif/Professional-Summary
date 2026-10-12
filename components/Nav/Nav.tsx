import ScrollLink from '@/components/ScrollLink/ScrollLink'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

interface Section {
  id: string
  label: string
}

interface NavProps {
  sections: readonly Section[]
  active: string
  name: string
}

export default function Nav({ sections, active, name }: NavProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

  return (
    <header className="sticky top-0 z-20 h-(--header-height) border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-(--max-width) items-center justify-between gap-4 px-6">
        <ScrollLink targetId="home" className="flex shrink-0 items-center gap-2.5">
          <span className="inline-flex size-7 items-center justify-center rounded-lg bg-brand font-mono text-xs font-semibold text-brand-foreground">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold xl:inline">{name}</span>
        </ScrollLink>

        {/* Nine labels fit from lg up; below that the strip scrolls, with a fade on the right edge as the cue. */}
        <nav
          aria-label="Portfolio sections"
          className="scrollbar-none min-w-0 flex-1 overflow-x-auto max-lg:[mask-image:linear-gradient(to_right,black_calc(100%_-_32px),transparent)]"
        >
          <ul className="flex items-center gap-0.5">
            {sections.map((section) => {
              const isActive = section.id === active
              return (
                <li key={section.id} className="shrink-0">
                  <ScrollLink
                    targetId={section.id}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'block whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
                      isActive && 'bg-accent text-brand hover:text-brand',
                    )}
                  >
                    {section.label}
                  </ScrollLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
