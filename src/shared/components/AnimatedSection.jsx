import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

/**
 * Wraps children in a motion div that fades in when entering the viewport.
 * Respects prefers-reduced-motion.
 */
export function AnimatedSection({
  children,
  delay = 0,
  className = '',
  as = 'div',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotionPreference()

  const Tag = motion[as] ?? motion.div

  if (prefersReduced) {
    const StaticTag = as
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <Tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
    >
      {children}
    </Tag>
  )
}
