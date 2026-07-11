import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from './ActivityCard.module.css'

export function ActivityCard({ activity, index }) {
  const Icon = activity.icon

  return (
    <motion.article
      className={`${styles.card} ${styles[`span_${activity.span}`]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Activité : ${activity.title}`}
    >
      <div className={styles.inner}>
        {/* Number */}
        <span className={styles.number} aria-hidden="true">{activity.id}</span>

        {/* Icon */}
        <div className={styles.iconWrap} aria-hidden="true">
          <Icon size={28} strokeWidth={1.5} className={styles.icon} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{activity.title}</h3>
          <p className={styles.desc}>{activity.description}</p>
        </div>

        {/* Arrow */}
        <div className={styles.arrow} aria-hidden="true">
          <ArrowUpRight size={18} />
        </div>

        {/* Halo */}
        <div className={styles.halo} aria-hidden="true" />
      </div>
    </motion.article>
  )
}
