import { motion } from 'framer-motion'
import {
  Phone,
  Award,
  Zap,
  Sparkles,
  Dumbbell,
  Activity,
  Target,
  Heart,
  Flame,
} from 'lucide-react'

import { siteConfig } from '../../../config/siteConfig'
import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { getAssetPath } from '../../../shared/utils/assetPath'

import styles from './CoachSection.module.css'

const coaches = [
  {
    name: 'Mohamed Ahmed Trigui',
    role: 'Coach',
    image: getAssetPath('images/ahmed.jpg'),
    imagePosition: 'center 20%',
  },
  {
    name: 'Wassim Ben Salah',
    role: 'Coach',
    image: getAssetPath('images/wassim.jpg'),
    imagePosition: 'center 25%',
  },
  {
    name: 'Youssef Gassara',
    role: 'Coach',
    image: getAssetPath('images/gass.jpg'),
    imagePosition: 'center 20%',
  },
  {
    name: 'Hazar',
    role: 'Coach Aérobic',
    image: getAssetPath('images/hazar.png'),
    imagePosition: 'center 18%',
  },
  {
    name: 'Ali Hdiji',
    role: 'Coach Gymnastique',
    image: getAssetPath('images/ali.jpg'),
    imagePosition: 'center 20%',
  },
  {
    name: 'Kais & Mahdi',
    role: 'Coachs Kung-fu',
    image: getAssetPath('images/kungfu_bg.png'),
    imagePosition: 'center 30%',
  },
]

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
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 24, ...props }) {
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
      aria-hidden="true"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function CoachCard({ coach, duplicate = false }) {
  return (
    <div className={styles.coachCard}>
      <img
        src={coach.image}
        alt={duplicate ? '' : `Coach ${coach.name}`}
        className={styles.staffAvatar}
        style={{ objectPosition: coach.imagePosition }}
        loading="lazy"
      />

      <div className={styles.coachInfo}>
        <span className={styles.staffCoachName}>{coach.name}</span>
        <span className={styles.coachRole}>{coach.role}</span>
      </div>
    </div>
  )
}

export function CoachSection() {
  return (
    <section
      id="coach"
      className={styles.section}
      aria-labelledby="coach-heading"
    >
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

            <div className={styles.staffContainer}>
              <div
                className={styles.coachesSlider}
                aria-label="Liste de nos coachs"
              >
                <div className={styles.coachesTrack}>
                  <div className={styles.coachesGroup}>
                    {coaches.map((coach) => (
                      <CoachCard
                        key={coach.name}
                        coach={coach}
                      />
                    ))}
                  </div>

                  <div
                    className={styles.coachesGroup}
                    aria-hidden="true"
                  >
                    {coaches.map((coach) => (
                      <CoachCard
                        key={`${coach.name}-duplicate`}
                        coach={coach}
                        duplicate
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* =========================================
            SECTION COACH : MOHAMED AHMED TRIGUI
        ========================================= */}
        <div className={styles.layout}>
          {/* Colonne gauche : image du coach */}
          <div className={styles.imageCol}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src={getAssetPath('images/ahmed.jpg')}
                alt="Coach Mohamed Ahmed Trigui"
                className={styles.coachImage}
                loading="lazy"
              />

              <div
                className={styles.imageOverlay}
                aria-hidden="true"
              />

              <div
                className={styles.glowingFrame}
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Colonne droite : présentation et services */}
          <div className={styles.contentCol}>
            <AnimatedSection delay={0.1}>
              <span className={styles.coachTitle}>
                Coach certifié
              </span>

              <h3
                id="coach-heading"
                className={styles.coachName}
              >
                M. Ahmed Trigui
              </h3>

              <p className={styles.coachBio}>
                Spécialiste de la transformation physique et de la
                préparation athlétique, Mohamed Ahmed Trigui vous propose
                un accompagnement sur mesure pour vous aider à dépasser
                vos limites et à adopter un mode de vie sain.
              </p>
            </AnimatedSection>

            <div className={styles.servicesGrid}>
              <AnimatedSection delay={0.15}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Award
                      size={20}
                      className={styles.serviceIcon}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4 className={styles.serviceTitle}>
                      Coaching privé
                    </h4>

                    <p className={styles.serviceText}>
                      Séances individuelles et personnalisées en salle
                      pour corriger vos postures et améliorer vos
                      performances.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Zap
                      size={20}
                      className={styles.serviceIcon}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4 className={styles.serviceTitle}>
                      Coaching en ligne
                    </h4>

                    <p className={styles.serviceText}>
                      Suivi à distance avec un programme d’entraînement
                      et un plan nutritionnel adaptés à votre routine
                      quotidienne.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.25}>
              <div className={styles.promoAlert}>
                <div className={styles.promoBadge}>
                  <Sparkles
                    size={14}
                    className={styles.promoBadgeIcon}
                    aria-hidden="true"
                  />

                  <span>Promo</span>
                </div>

                <div className={styles.promoContent}>
                  <p className={styles.promoText}>
                    <strong>
                      Offre spéciale coaching en ligne !
                    </strong>{' '}
                    Profitez d’une réduction exclusive. Contactez
                    directement{' '}
                    <strong>Mohamed Ahmed Trigui</strong> pour en savoir
                    plus.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className={styles.actions}>
                <a
                  href="tel:+21653387940"
                  className={styles.phoneButton}
                  aria-label="Appeler Mohamed Ahmed Trigui au 53 387 940"
                >
                  <Phone size={20} aria-hidden="true" />

                  <div className={styles.phoneButtonContent}>
                    <span className={styles.phoneLabel}>
                      Appeler directement
                    </span>

                    <span className={styles.phoneNum}>
                      53 387 940
                    </span>
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

        {/* =========================================
            SECTION COACH : WASSIM BEN SALAH
        ========================================= */}
        <div className={`${styles.layout} ${styles.secondCoachLayout}`}>
          {/* Colonne gauche : photo / affiche du coach */}
          <div className={styles.imageCol}>
            <motion.div
              className={`${styles.imageWrapper} ${styles.posterWrapper}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src={getAssetPath('images/wassim_poster.jpg')}
                alt="Coach Wassim Ben Salah - Dream Gym"
                className={styles.posterImage}
                loading="lazy"
              />

              <div
                className={styles.posterOverlay}
                aria-hidden="true"
              />

              <div
                className={styles.glowingFrame}
                aria-hidden="true"
              />
            </motion.div>
          </div>

          {/* Colonne droite : présentation et services */}
          <div className={styles.contentCol}>
            <AnimatedSection delay={0.1}>
              <span className={styles.coachTitle}>
                Coach certifié
              </span>

              <h3
                id="coach-wassim-heading"
                className={styles.coachName}
              >
                Wassim Ben Salah
              </h3>

              <p className={styles.coachBio}>
                Spécialiste de la musculation, du cardio et du dépassement de
                soi, Wassim Ben Salah vous transmet sa rigueur et sa passion.
                Sous la devise <em>« Plus fort chaque jour »</em>, bénéficiez d'un
                accompagnement complet pour transformer votre physique et
                développer votre force.
              </p>
            </AnimatedSection>

            <div className={styles.servicesGrid}>
              <AnimatedSection delay={0.15}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Dumbbell
                      size={20}
                      className={styles.serviceIcon}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4 className={styles.serviceTitle}>
                      Musculation
                    </h4>

                    <p className={styles.serviceText}>
                      Équipements modernes et séances intensives adaptées à
                      vos objectifs de force et de volume musculaire.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Activity
                      size={20}
                      className={styles.serviceIcon}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4 className={styles.serviceTitle}>
                      Cardio & Santé
                    </h4>

                    <p className={styles.serviceText}>
                      Entraînements dynamiques pour développer votre endurance,
                      brûler les graisses et booster votre vitalité.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Target
                      size={20}
                      className={styles.serviceIcon}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4 className={styles.serviceTitle}>
                      Coaching Personnalisé
                    </h4>

                    <p className={styles.serviceText}>
                      Suivi individuel et exercices adaptés pour une
                      progression continue, rapide et sécurisée.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Heart
                      size={20}
                      className={styles.serviceIcon}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h4 className={styles.serviceTitle}>
                      Bien-être & Corps
                    </h4>

                    <p className={styles.serviceText}>
                      Harmonie corps et esprit pour évacuer le stress et
                      adopter un mode de vie sain et énergique.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.35}>
              <div className={styles.promoAlert}>
                <div className={styles.promoBadge}>
                  <Flame
                    size={14}
                    className={styles.promoBadgeIcon}
                    aria-hidden="true"
                  />

                  <span>Motivation</span>
                </div>

                <div className={styles.promoContent}>
                  <p className={styles.promoText}>
                    <strong>
                      Discipline aujourd'hui, résultats demain !
                    </strong>{' '}
                    Rejoignez Coach <strong>Wassim Ben Salah</strong> au
                    centre Dream Gym (Route Mahdia km7).
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className={styles.actions}>
                <a
                  href="tel:+21674893389"
                  className={styles.phoneButton}
                  aria-label="Appeler Dream Gym au 74 893 389"
                >
                  <Phone size={20} aria-hidden="true" />

                  <div className={styles.phoneButtonContent}>
                    <span className={styles.phoneLabel}>
                      Appeler directement
                    </span>

                    <span className={styles.phoneNum}>
                      74 893 389
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instaButton}
                  aria-label="Suivre Dream Gym sur Facebook"
                >
                  <FacebookIcon size={20} />
                  <span>Dream Gym Facebook</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  )
}
