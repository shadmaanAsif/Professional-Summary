import type { Metadata } from 'next'
import SubpageShell from '@/components/SubpageShell/SubpageShell'
import ArchitecturePage from '@/components/ArchitecturePage/ArchitecturePage'
import { architectureDiagrams } from '@/data/architecture'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: `Architecture & System Design — ${profile.hero.name}`,
  description: 'Full architecture deep-dive: constraints, options, decisions, and trade-offs behind each system.',
}

export default function Page() {
  return (
    <SubpageShell name={profile.hero.name} education={profile.education} location={profile.hero.location}>
      <ArchitecturePage diagrams={architectureDiagrams} metrics={profile.impactMetrics} />
    </SubpageShell>
  )
}
