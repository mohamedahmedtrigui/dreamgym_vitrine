import { motion } from 'framer-motion'
import { Target, Layers, Flame, Users } from 'lucide-react'
import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import styles from './ExperienceSection.module.css'

const points = [
  {
    icon: Target,
    title: 'Un espace dédié à la performance',
    side: 'left',
  },
  {
    icon: Layers,
    title: 'Plusieurs disciplines dans un même univers',
    side: 'right',
  },
  {
    icon: Flame,
    title: 'Une ambiance motivante',
    side: 'left',
  },
  {
    icon: Users,
    title: 'Une pratique adaptée aux femmes, aux hommes et aux enfants',
    side: 'right',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      {/* Background big text */}
      <div className={styles.bgText} aria-hidden="true">DREAM</div>

      <Container>
        <AnimatedSection>
          <div className={styles.meta}>
            <span className={styles.metaNum}>03</span>
            <span className={styles.metaLabel}>L'expérience</span>
          </div>
          <h2 id="experience-heading" className={styles.heading}>
            L'EXPÉRIENCE
            <br />
            <span className={styles.headingAccent}>DREAM GYM</span>
          </h2>
        </AnimatedSection>

        {/* Points */}
        <div className={styles.timeline}>
          {points.map((point, i) => {
            const Icon = point.icon
            const isLeft = point.side === 'left'

            return (
              <AnimatedSection
                key={i}
                delay={i * 0.12}
                className={`${styles.pointRow} ${isLeft ? styles.left : styles.right}`}
              >
                <div className={styles.pointContent}>
                  <div className={styles.iconRing} aria-hidden="true">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                </div>
                <div className={styles.pointLine} aria-hidden="true" />
              </AnimatedSection>
            )
          })}
        </div>

        {/* Phrase forte */}
        <AnimatedSection delay={0.3}>
          <blockquote className={styles.quote}>
            <p>
              ICI, ON NE CHERCHE PAS LA FACILITÉ.
              <br />
              <span className={styles.quoteAccent}>ON CONSTRUIT LA PROGRESSION.</span>
            </p>
          </blockquote>
        </AnimatedSection>
      </Container>

      {/* Decorative red lines */}
      <div className={styles.lineLeft} aria-hidden="true" />
      <div className={styles.lineRight} aria-hidden="true" />
    </section>
  )
}
