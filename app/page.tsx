import PortfolioShell from '@/components/PortfolioShell/PortfolioShell'
import { profile } from '@/data/profile'
import { architectureDiagrams } from '@/data/architecture'
import { caseStudies } from '@/data/caseStudies'
import { decisions } from '@/data/decisions'
import { aiInnovation } from '@/data/aiInnovation'
import { engineeringImpact } from '@/data/engineeringImpact'
import { engineeringNotes } from '@/data/notes'

export default function Home() {
  return (
    <PortfolioShell
      profile={profile}
      architectureDiagrams={architectureDiagrams}
      caseStudies={caseStudies}
      decisions={decisions}
      aiInnovation={aiInnovation}
      engineeringImpact={engineeringImpact}
      engineeringNotes={engineeringNotes}
    />
  )
}
