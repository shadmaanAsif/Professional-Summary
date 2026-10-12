import type { Metadata } from 'next'
import { IBM_Plex_Mono, Geist } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeScript } from '@/components/ThemeScript'
import { MotionProvider } from '@/components/ui/motion-provider'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

const title = 'Mohammad Shadmaan Asif — Staff Engineer'
const description =
  'I design and own the architecture behind booking and e-commerce platforms across web and mobile — React/Next.js, Node.js, design systems, SDKs, and the delivery pipelines that hold it together.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'profile',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(sans.variable, mono.variable, 'font-sans')} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
