import styles from './SectionHeading.module.css'

/**
 * Reusable section heading with numbered label and optional subtitle.
 */
export function SectionHeading({ number, label, title, subtitle, align = 'left' }) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {(number || label) && (
        <div className={styles.meta}>
          {number && <span className={styles.number}>{number}</span>}
          {label && <span className={styles.label}>{label}</span>}
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
