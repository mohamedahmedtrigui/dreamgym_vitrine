import styles from './GlowButton.module.css'

/**
 * Premium glow button with red accent.
 * variant: 'primary' | 'outline' | 'ghost'
 */
export function GlowButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
