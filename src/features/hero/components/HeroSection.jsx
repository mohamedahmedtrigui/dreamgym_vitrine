import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '../../../config/siteConfig'
import { getAssetPath } from '../../../shared/utils/assetPath'
import { GlowButton } from '../../../shared/components/GlowButton'
import { useReducedMotionPreference } from '../../../shared/hooks/useReducedMotionPreference'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const prefersReduced = useReducedMotionPreference()
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : 80])

  return (
    <section id="accueil" className={styles.section} ref={sectionRef} aria-label="Accueil Dream Gym">
      {/* Background image with parallax */}
      <motion.div className={styles.bgWrap} style={{ y: parallaxY }}>
        <img
          src={getAssetPath(siteConfig.assets.hero)}
          alt="Salle de sport Dream Gym"
          className={styles.bgImg}
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      {/* Overlays */}
      <div className={styles.overlayGradient} aria-hidden="true" />
      <div className={styles.overlayVignette} aria-hidden="true" />
      <div className={styles.overlayGrain} aria-hidden="true" />
      <div className={styles.overlayRedHalo} aria-hidden="true" />

      {/* Animated scan light */}
      {!prefersReduced && (
        <motion.div
          className={styles.scanLight}
          animate={{ x: ['0%', '100%', '0%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      )}

      {/* Side text decoration */}
      <div className={styles.sideDecor} aria-hidden="true">
        {['FORCE', 'DISCIPLINE', 'PROGRESSION'].map((word) => (
          <span key={word} className={styles.sideWord}>{word}</span>
        ))}
      </div>

      {/* Hero content */}
      <div className={styles.content}>
        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className={styles.badgeDot} aria-hidden="true" />
          DREAM GYM • CENTRE DE REMISE EN FORME
        </motion.div>

        {/* Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.titleLine}>DÉPASSE</span>
          <span className={`${styles.titleLine} ${styles.titleLineRed}`}>TES LIMITES</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          Musculation, fitness, arts martiaux et remise en forme
          <br />
          dans un environnement conçu pour progresser.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
        >
          <GlowButton href="#la-salle" variant="primary">
            Découvrir la salle
          </GlowButton>
          <GlowButton href="#contact" variant="outline">
            Nous contacter
          </GlowButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#la-salle"
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Défiler vers la suite"
      >
        <span className={styles.scrollText}>DÉCOUVRIR L'EXPÉRIENCE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className={styles.scrollIcon} />
        </motion.div>
      </motion.a>
    </section>
  )
}
