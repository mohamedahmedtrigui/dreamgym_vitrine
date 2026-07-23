import { ArrowUpRight, CalendarDays, HeartPulse } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from './ActivityCard.module.css'

export function ActivityCard({ activity, index }) {
  const Icon = activity.icon
  const isFeatured = activity.featured
  const cardClassName = `${styles.card} ${styles[`span_${activity.span}`]} ${isFeatured ? styles.featuredCard : ''}`

  return (
    <motion.article
      className={cardClassName}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Activité : ${activity.title}`}
    >
      <div className={styles.inner}>
        <span className={styles.number} aria-hidden="true">{activity.id}</span>

        <div className={styles.iconWrap} aria-hidden="true">
          <Icon size={28} strokeWidth={1.5} className={styles.icon} />
        </div>

        <div className={styles.content}>
          {isFeatured && <span className={styles.featuredEyebrow}>{activity.eyebrow}</span>}
          <h3 className={styles.title}>{activity.title}</h3>
          <p className={styles.desc}>{activity.description}</p>

          {isFeatured && (
            <div className={styles.aerobicPanel}>
              <div className={styles.coachBadge}>
                <HeartPulse size={16} aria-hidden="true" />
                <span>{activity.coach}</span>
              </div>

              <div className={styles.tagList} aria-label="Points forts de l'aérobic">
                {activity.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <ul className={styles.detailList}>
                {activity.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <div className={styles.scheduleBox}>
                <div className={styles.scheduleTitle}>
                  <CalendarDays size={16} aria-hidden="true" />
                  <span>Horaires des cours</span>
                </div>

                <div className={styles.scheduleGrid}>
                  {activity.schedule.map((slot) => (
                    <div key={slot.day} className={styles.scheduleItem}>
                      <span className={styles.scheduleDay}>{slot.day}</span>
                      <span className={styles.scheduleTime}>{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.arrow} aria-hidden="true">
          <ArrowUpRight size={18} />
        </div>

        <div className={styles.halo} aria-hidden="true" />
      </div>
    </motion.article>
  )
}
