import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { siteConfig } from '../../../config/siteConfig'
import { getAssetPath } from '../../../shared/utils/assetPath'
import { GlowButton } from '../../../shared/components/GlowButton'
import { MobileMenu } from './MobileMenu'
import { useActiveSection } from '../hooks/useActiveSection'
import styles from './Navbar.module.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeMenu])

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#accueil" className={styles.logo} aria-label="Dream Gym — Accueil">
            <img
              src={getAssetPath(siteConfig.assets.logo)}
              alt={siteConfig.name}
              className={styles.logoImg}
              width={44}
              height={44}
            />
          </a>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Navigation principale">
            <ul className={styles.navList} role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${activeSection === item.href ? styles.navLinkActive : ''}`}
                  >
                    {item.label}
                    <span className={styles.underline} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <GlowButton
              href="#contact"
              variant="primary"
              className={styles.ctaBtn}
            >
              Rejoindre Dream Gym
            </GlowButton>

            {/* Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
      />
    </>
  )
}
