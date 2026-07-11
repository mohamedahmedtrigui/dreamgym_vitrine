import { AnimatedSection } from '../../../shared/components/AnimatedSection'
import { Container } from '../../../shared/components/Container'
import { activities } from '../data/activities'
import { ActivityCard } from './ActivityCard'
import styles from './ActivitiesSection.module.css'

export function ActivitiesSection() {
  return (
    <section id="activites" className={styles.section} aria-labelledby="activities-heading">
      <Container>
        <AnimatedSection>
          <div className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.metaNum}>02</span>
              <span className={styles.metaLabel}>Activités</span>
            </div>
            <h2 id="activities-heading" className={styles.heading}>
              CHOISIS TON TERRAIN
              <br />
              <span className={styles.headingAccent}>DE PROGRESSION</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {activities.map((activity, i) => (
            <ActivityCard key={activity.id} activity={activity} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
