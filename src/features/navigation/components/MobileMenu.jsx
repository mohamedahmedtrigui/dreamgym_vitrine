import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { siteConfig } from '../../../config/siteConfig'
import { GlowButton } from '../../../shared/components/GlowButton'
import { useScrollLock } from '../../../shared/hooks/useScrollLock'
import styles from './MobileMenu.module.css'

export function MobileMenu({ isOpen, onClose, activeSection }) {
  useScrollLock(isOpen)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            className={styles.panel}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Menu mobile"
          >
            <div className={styles.header}>
              <span className={styles.brand}>{siteConfig.name}</span>
              <button
                className={styles.close}
                onClick={onClose}
                aria-label="Fermer le menu"
              >
                <X size={22} />
              </button>
            </div>

            <ul className={styles.links} role="list">
              {siteConfig.nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.35 }}
                >
                  <a
                    href={item.href}
                    className={`${styles.link} ${activeSection === item.href ? styles.active : ''}`}
                    onClick={onClose}
                  >
                    <span className={styles.linkNumber}>0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className={styles.footer}>
              <GlowButton href="#contact" onClick={onClose} variant="primary">
                Rejoindre Dream Gym
              </GlowButton>
              <a
                href={`tel:${siteConfig.phoneHref || siteConfig.phoneDisplay.replace(/\s/g, '')}`}
                className={styles.phone}
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
