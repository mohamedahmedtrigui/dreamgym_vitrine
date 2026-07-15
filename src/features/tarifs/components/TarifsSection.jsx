import { motion } from 'framer-motion'
import { Dumbbell, Flame, Check, AlertCircle } from 'lucide-react'
import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import styles from './TarifsSection.module.css'

export function TarifsSection() {
  const fitnessPrices = [
    { sessions: '2 fois / semaine', price: 70, oldPrice: 80, badge: 'Promo' },
    { sessions: '3 fois / semaine', price: 90, oldPrice: 100, badge: 'Promo' },
  ]

  const musculationPrices = [
    { sessions: '2 fois / semaine', price: 40 },
    { sessions: '3 fois / semaine', price: 50 },
    { sessions: '4 fois / semaine', price: 60 },
  ]

  return (
    <section id="tarifs" className={styles.section} aria-labelledby="tarifs-heading">
      <Container>
        <AnimatedSection delay={0}>
          <div className={styles.header}>
            <SectionHeading
              number="04"
              label="Abonnements"
              title="Tarifs & Formules"
              subtitle="Choisis l'abonnement qui te convient et commence ton entraînement aujourd'hui."
              align="center"
            />
          </div>
        </AnimatedSection>

        {/* Alert box for registration fees */}
        <AnimatedSection delay={0.1}>
          <div className={styles.alertBox} role="alert">
            <AlertCircle size={20} className={styles.alertIcon} />
            <div className={styles.alertContent}>
              <span className={styles.alertText}>
                <strong>Remarque :</strong> +10 DT de frais d'inscription pour le premier mois.
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Grid of pricing cards */}
        <div className={styles.grid}>
          {/* Card 1: Fitness */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                <Flame size={24} className={styles.iconFitness} />
              </div>
              <h3 className={styles.cardTitle}>Fitness</h3>
              <p className={styles.cardDesc}>Pour brûler des calories, améliorer ton endurance et garder la forme.</p>
            </div>
            
            <div className={styles.pricingList}>
              {fitnessPrices.map((item, index) => (
                <div key={index} className={styles.pricingRow}>
                  <div className={styles.sessionInfo}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{item.sessions}</span>
                  </div>
                  <div className={styles.priceContainer}>
                    {item.oldPrice && (
                      <span className={styles.oldPrice}>{item.oldPrice} DT</span>
                    )}
                    <span className={styles.price}>{item.price} <span className={styles.currency}>DT</span></span>
                    {item.badge && <span className={styles.badge}>{item.badge}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <ul className={styles.featuresList}>
                <li>Accès aux cours collectifs</li>
                <li>Suivi cardio</li>
                <li>Ambiance dynamique</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Musculation */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>
                <Dumbbell size={24} className={styles.iconMusculation} />
              </div>
              <h3 className={styles.cardTitle}>Musculation</h3>
              <p className={styles.cardDesc}>Pour développer ta force, ton volume musculaire et sculpter ton corps.</p>
            </div>

            <div className={styles.pricingList}>
              {musculationPrices.map((item, index) => (
                <div key={index} className={styles.pricingRow}>
                  <div className={styles.sessionInfo}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{item.sessions}</span>
                  </div>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{item.price} <span className={styles.currency}>DT</span></span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <ul className={styles.featuresList}>
                <li>Accès aux équipements de force</li>
                <li>Conseils d'utilisation des machines</li>
                <li>Espace charges libres complet</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
