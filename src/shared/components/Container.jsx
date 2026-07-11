import styles from './Container.module.css'

/**
 * Max-width wrapper with consistent horizontal padding.
 */
export function Container({ children, className = '', size = 'default' }) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  )
}
