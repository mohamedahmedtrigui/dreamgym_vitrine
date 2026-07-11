import { useState, useEffect } from 'react'
import { siteConfig } from '../../../config/siteConfig'

/**
 * Tracks which section is currently in the viewport.
 * Returns the href of the active nav item.
 */
export function useActiveSection() {
  const sectionIds = siteConfig.nav.map((item) => item.href.replace('#', ''))
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, []) // eslint-disable-line

  return active
}
