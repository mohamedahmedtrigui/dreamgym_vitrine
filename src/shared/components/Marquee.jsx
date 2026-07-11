import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'
import styles from './Marquee.module.css'

/**
 * Infinite horizontal marquee strip with pause-on-hover.
 */
export function Marquee({ items, speed = 40 }) {
  const prefersReduced = useReducedMotionPreference()

  const durationMs = prefersReduced ? 0 : (items.length * speed * 1000) / items.length

  return (
    <div
      className={styles.wrapper}
      aria-hidden="true"
      role="presentation"
    >
      <div
        className={styles.track}
        style={{
          animationDuration: prefersReduced ? '0ms' : `${durationMs}ms`,
          animationPlayState: 'running',
        }}
      >
        {/* Duplicate twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
