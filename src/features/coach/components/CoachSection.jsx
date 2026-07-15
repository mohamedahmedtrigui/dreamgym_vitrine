import { motion } from 'framer-motion'
import { Phone, Shield, Award, Zap, Sparkles } from 'lucide-react'
import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { getAssetPath } from '../../../shared/utils/assetPath'
import styles from './CoachSection.module.css'

function InstagramIcon({ size = 24, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function CoachSection() {
  return (
    <section id="coach" className={styles.section} aria-labelledby="coach-heading">
      <Container>
        <AnimatedSection delay={0}>
          <div className={styles.header}>
            <SectionHeading
              number="05"
              label="Notre Équipe"
              title="Ton Coach"
              subtitle="Entraîne-toi avec un professionnel certifié pour maximiser tes résultats."
              align="left"
            />
          </div>
        </AnimatedSection>

        <div className={styles.layout}>
          {/* Left Column: Image with modern frame */}
          <div className={styles.imageCol}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={getAssetPath('images/ahmed.jpg')}
                alt="Coach Mohamed Ahmed Trigui"
                className={styles.coachImage}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.glowingFrame} />
            </motion.div>
          </div>

          {/* Right Column: Bio, Offers, Alert, and CTAs */}
          <div className={styles.contentCol}>
            <AnimatedSection delay={0.1}>
              <span className={styles.coachTitle}>Coach Certifié</span>
              <h3 id="coach-heading" className={styles.coachName}>
                M. Ahmed Trigui
              </h3>
              <p className={styles.coachBio}>
                Spécialiste de la transformation physique et de la préparation athlétique. Mohamed Ahmed Trigui vous propose un accompagnement sur mesure pour vous aider à dépasser vos limites et adopter un mode de vie sain.
              </p>
            </AnimatedSection>

            {/* Coaching types */}
            <div className={styles.servicesGrid}>
              <AnimatedSection delay={0.15}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Award size={20} className={styles.serviceIcon} />
                  </div>
                  <div>
                    <h4 className={styles.serviceTitle}>Coaching Privé</h4>
                    <p className={styles.serviceText}>
                      Séances individuelles et personnalisées en salle de sport pour corriger vos postures et booster vos performances.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Zap size={20} className={styles.serviceIcon} />
                  </div>
                  <div>
                    <h4 className={styles.serviceTitle}>Coaching en Ligne</h4>
                    <p className={styles.serviceText}>
                      Suivi à distance avec un plan d'entraînement et nutritionnel adapté à votre routine quotidienne.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Special Promo Alert */}
            <AnimatedSection delay={0.25}>
              <div className={styles.promoAlert}>
                <div className={styles.promoBadge}>
                  <Sparkles size={14} className={styles.promoBadgeIcon} />
                  <span>Promo</span>
                </div>
                <div className={styles.promoContent}>
                  <p className={styles.promoText}>
                    <strong>Offre spéciale coaching en ligne !</strong> Profitez d'une réduction exclusive. Contactez directement <strong>Mohamed Ahmed Trigui</strong> pour en savoir plus.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Actions */}
            <AnimatedSection delay={0.3}>
              <div className={styles.actions}>
                <a
                  href="tel:53387940"
                  className={styles.phoneButton}
                  aria-label="Appeler Mohamed Ahmed Trigui au 53 38 79 40"
                >
                  <Phone size={20} />
                  <div className={styles.phoneButtonContent}>
                    <span className={styles.phoneLabel}>Appeler Directement</span>
                    <span className={styles.phoneNum}>53 387 940</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/med_ahmed_trigui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instaButton}
                  aria-label="Suivre Mohamed Ahmed Trigui sur Instagram"
                >
                  <InstagramIcon size={20} />
                  <span>Suivre sur Instagram</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  )
}
