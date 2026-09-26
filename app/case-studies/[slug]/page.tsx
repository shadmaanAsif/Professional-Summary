import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SubpageShell from '@/components/SubpageShell/SubpageShell'
import CaseStudyPage from '@/components/CaseStudies/CaseStudyPage'
import { caseStudies } from '@/data/caseStudies'
import { profile } from '@/data/profile'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((entry) => entry.slug === slug)
  if (!study) return {}

  return {
    title: `${study.title} — ${profile.hero.name}`,
    description: study.summary,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const study = caseStudies.find((entry) => entry.slug === slug)
  if (!study) notFound()

  return (
    <SubpageShell name={profile.hero.name} education={profile.education} location={profile.hero.location}>
      <CaseStudyPage study={study} />
    </SubpageShell>
  )
}
