'use client'

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'

interface ScrollLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  targetId: string
  children: ReactNode
}

export default function ScrollLink({ targetId, onClick, children, ...rest }: ScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    event.stopPropagation()
    // Note: history.replaceState is deliberately NOT called here — calling it while a
    // scrollIntoView({behavior:'smooth'}) animation is in flight cancels the animation
    // in Chromium. The scroll-spy in PortfolioShell updates the hash once the target
    // section settles into view, so this click only needs to start the scroll.
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onClick?.(event)
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
