import { Activity, Dumbbell, Trophy, Zap } from 'lucide-react'
import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import styles from './SportChallengeSection.module.css'

const CHALLENGES = [
  { icon: Zap, label: '20 jumping jacks' },
  { icon: Dumbbell, label: '15 squats' },
  { icon: Trophy, label: '10 pompes' },
]

export function SportChallengeSection() {
  return (
    <section className={styles.section} aria-labelledby="sport-challenge-heading">
      <Container>
        <AnimatedSection className={styles.panel}>
          <div className={styles.content}>
            <div className={styles.kicker}>
              <Activity size={16} aria-hidden="true" />
              <span>Défi express</span>
            </div>

            <h2 id="sport-challenge-heading" className={styles.heading}>
              Bougez
              <span> 30 secondes</span>
            </h2>

            <p className={styles.text}>
              Avant de partir, lancez-vous un mini défi sportif: rapide, simple et motivant.
            </p>

            <div className={styles.challengeList} aria-label="Défis sportifs rapides">
              {CHALLENGES.map(({ icon: Icon, label }) => (
                <span className={styles.challengePill} key={label}>
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div
            className={styles.game}
            role="img"
            aria-label="Petit jeu animé avec un sportif qui court vers la ligne d'arrivée"
          >
            <div className={styles.scoreBoard} aria-hidden="true">
              <span>READY</span>
              <strong>GO</strong>
            </div>

            <div className={styles.track}>
              <span className={styles.trackLine} />
              <span className={styles.trackLine} />
              <span className={styles.trackLine} />
              <span className={styles.finishLine} />

              <div className={styles.runner}>
                <span className={styles.runnerHead} />
                <span className={styles.runnerBody} />
                <span className={styles.runnerArmOne} />
                <span className={styles.runnerArmTwo} />
                <span className={styles.runnerLegOne} />
                <span className={styles.runnerLegTwo} />
              </div>

              <span className={styles.target} />
              <span className={styles.sparkOne} />
              <span className={styles.sparkTwo} />
              <span className={styles.sparkThree} />
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
