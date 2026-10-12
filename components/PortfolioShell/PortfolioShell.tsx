'use client'

import { useEffect, useState } from 'react'
import type { Profile } from '@/data/profile'
import type { ArchitectureDiagram } from '@/data/architecture'
import type { CaseStudy } from '@/data/caseStudies'
import type { Decision } from '@/data/decisions'
import type { AIInnovationContent } from '@/data/aiInnovation'
import type { EngineeringImpactCategory } from '@/data/engineeringImpact'
import type { EngineeringNote } from '@/data/notes'

import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import ImpactStrip from '@/components/ImpactStrip/ImpactStrip'
import About from '@/components/About/About'
import Expertise from '@/components/Expertise/Expertise'
import Experience from '@/components/Experience/Experience'
import Architecture from '@/components/Architecture/Architecture'
import EngineeringImpact from '@/components/EngineeringImpact/EngineeringImpact'
import CaseStudies from '@/components/CaseStudies/CaseStudies'
import Approach from '@/components/Approach/Approach'
import AIInnovation from '@/components/AIInnovation/AIInnovation'
import DecisionLog from '@/components/DecisionLog/DecisionLog'
import EngineeringNotes from '@/components/EngineeringNotes/EngineeringNotes'
import Contact from '@/components/Contact/Contact'

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'impact', label: 'Impact' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'ai', label: 'AI & Innovation' },
  { id: 'notes', label: 'Notes' },
  { id: 'contact', label: 'Contact' },
] as const

interface PortfolioShellProps {
  profile: Profile
  architectureDiagrams: ArchitectureDiagram[]
  caseStudies: CaseStudy[]
  decisions: Decision[]
  aiInnovation: AIInnovationContent
  engineeringImpact: EngineeringImpactCategory[]
  engineeringNotes: EngineeringNote[]
}

export default function PortfolioShell({
  profile,
  architectureDiagrams,
  caseStudies,
  decisions,
  aiInnovation,
  engineeringImpact,
  engineeringNotes,
}: PortfolioShellProps) {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const sections = NAV_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (sections.length === 0) return

    // IntersectionObserver callbacks only report entries whose state just changed,
    // not the full set of currently-intersecting sections — so we track membership
    // ourselves and recompute the topmost section from live rects on every change.
    const intersecting = new Set<string>()

    // Rewriting the URL on every intersection change fires on every frame during an
    // animated scrollIntoView — and calling history.replaceState mid-animation cancels
    // the animation outright (a Chromium quirk). Debouncing the URL write to a quiet
    // moment keeps the hash in sync without fighting the in-flight scroll.
    let hashTimeout: number | undefined
    const syncHash = (id: string) => {
      window.clearTimeout(hashTimeout)
      hashTimeout = window.setTimeout(() => {
        window.history.replaceState(null, '', `#${id}`)
      }, 250)
    }

    // The last section can be shorter than the band below, and/or too close to the
    // end of the document, to ever win via intersection alone once the page hits max
    // scroll (a tall preceding section can still span the band from above). Bottom-of-
    // page is checked first, on every call — from either trigger — so it always has
    // the final say instead of racing with whichever mechanism last touched `intersecting`.
    const lastSectionId = NAV_SECTIONS[NAV_SECTIONS.length - 1].id

    const updateActive = () => {
      const atBottom = window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 2
      if (atBottom) {
        setActive(lastSectionId)
        syncHash(lastSectionId)
        return
      }

      let bestId: string | null = null
      let bestTop = Infinity
      intersecting.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top
        if (top < bestTop) {
          bestTop = top
          bestId = id
        }
      })
      if (bestId) {
        setActive(bestId)
        syncHash(bestId)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id)
          else intersecting.delete(entry.target.id)
        })
        updateActive()
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: [0, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateActive)
      window.clearTimeout(hashTimeout)
    }
  }, [])

  const activeLabel = NAV_SECTIONS.find((section) => section.id === active)?.label ?? ''

  return (
    <div className="flex min-h-screen flex-col">
      <Nav sections={NAV_SECTIONS} active={active} name={profile.hero.name} />

      <p aria-live="polite" className="visually-hidden">
        {activeLabel} section
      </p>

      <main className="flex-1">
        <Hero hero={profile.hero} />
        <ImpactStrip stats={profile.headlineStats} />
        <About about={profile.about} />
        <Expertise groups={profile.expertise} />
        <Experience experience={profile.experience} />
        <Architecture diagrams={architectureDiagrams} metrics={profile.impactMetrics} />
        <EngineeringImpact categories={engineeringImpact} />
        <CaseStudies caseStudies={caseStudies} />
        <Approach principles={profile.approach} />
        <AIInnovation content={aiInnovation} />
        <DecisionLog decisions={decisions} />
        <EngineeringNotes notes={engineeringNotes} />
        <Contact contact={profile.contact} />
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-2.5 border-t border-border px-6 py-5 text-center font-mono text-[11px] tracking-wide text-muted-foreground">
        <span>{profile.hero.name.toUpperCase()}</span>
        <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
        <span>{profile.education}</span>
        <span aria-hidden="true" className="h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
        <span>{profile.hero.location}</span>
      </footer>
    </div>
  )
}
