import { ArrowUpRight, Mail } from 'lucide-react'
import type { ContactContent, ContactLink } from '@/data/profile'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons'

const ICONS: Record<string, React.ElementType> = {
  Email: Mail,
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
}

function LinkIcon({ label }: { label: ContactLink['label'] }) {
  const Icon = ICONS[label] ?? ArrowUpRight
  return <Icon className="size-4" />
}

export default function Contact({ contact }: { contact: ContactContent }) {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title={contact.heading} description={contact.message} />

      <ul className="flex flex-col divide-y divide-border border-y border-border">
        {contact.links.map((link, index) => (
          <Reveal as="li" key={link.label} delay={Math.min(index * 0.05, 0.15)}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-brand"
            >
              <span className="flex items-center gap-3">
                <LinkIcon label={link.label} />
                <span className="text-base font-medium">{link.value}</span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </a>
          </Reveal>
        ))}
      </ul>

      <p className="mt-6 text-sm text-muted-foreground">{contact.location}</p>
    </Section>
  )
}
