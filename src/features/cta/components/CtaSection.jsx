import { Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { siteConfig } from '../../../config/siteConfig'
import { GlowButton } from '../../../shared/components/GlowButton'
import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import styles from './CtaSection.module.css'

export function CtaSection() {
  const phoneHref = siteConfig.phoneHref
    || `tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`

  return (
    <section className={styles.section} aria-label="Appel à l'action">
      {/* Red halo */}
      <div className={styles.halo} aria-hidden="true" />

      <Container>
        <div className={styles.inner}>
          <AnimatedSection>
            <div className={styles.meta}>
              <span className={styles.metaNum}>04</span>
              <span className={styles.metaLabel}>Passez à l'action</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className={styles.heading}>
              PRÊT À PASSER
              <br />
              <span className={styles.headingAccent}>AU NIVEAU SUPÉRIEUR ?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className={styles.body}>
              Découvre Dream Gym et commence à transformer ta discipline en résultats.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className={styles.buttons}>
              <GlowButton href={phoneHref} variant="primary">
                <Phone size={16} aria-hidden="true" />
                Appeler maintenant
              </GlowButton>
              <GlowButton
                href={siteConfig.facebookUrl}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Voir la page Facebook
              </GlowButton>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Moving light effect */}
      <motion.div
        className={styles.movingLight}
        animate={{ x: ['0%', '100%', '0%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
    </section>
  )
}
