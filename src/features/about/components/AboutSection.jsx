import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import styles from './AboutSection.module.css'

const values = [
  {
    number: '01',
    title: 'Discipline',
    text: 'La régularité transforme les objectifs en résultats.',
  },
  {
    number: '02',
    title: 'Progression',
    text: 'Chaque séance représente une étape supplémentaire.',
  },
  {
    number: '03',
    title: 'Énergie',
    text: 'Une ambiance sportive qui encourage à donner le meilleur.',
  },
]

export function AboutSection() {
  return (
    <section id="la-salle" className={`${styles.section} tech-grid`} aria-labelledby="about-heading">
      <Container>
        <div className={styles.layout}>
          {/* Left column */}
          <div className={styles.leftCol}>
            <AnimatedSection delay={0}>
              <div className={styles.sectionMeta}>
                <span className={styles.sectionNum}>01</span>
                <span className={styles.sectionLabel}>La salle</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 id="about-heading" className={styles.heading}>
                PLUS QU'UNE&nbsp;SALLE.
                <br />
                <span className={styles.headingAccent}>UN ÉTAT D'ESPRIT.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className={styles.redLine} aria-hidden="true" />
              <p className={styles.body}>
                Dream Gym est un espace consacré à la force, au mouvement et au
                dépassement de soi. Femmes, hommes, adultes et enfants peuvent y
                pratiquer différentes disciplines dans une ambiance dynamique,
                motivante et orientée vers les résultats.
              </p>
            </AnimatedSection>
          </div>

          {/* Right column — Values */}
          <div className={styles.rightCol}>
            <div className={styles.decorNumber} aria-hidden="true">01</div>
            {values.map((v, i) => (
              <AnimatedSection key={v.number} delay={0.1 * (i + 1)}>
                <div className={styles.valueCard}>
                  <span className={styles.valueNum}>{v.number}</span>
                  <div className={styles.valueContent}>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueText}>{v.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>

      {/* Decorative vertical line */}
      <div className={styles.verticalLine} aria-hidden="true" />
    </section>
  )
}
