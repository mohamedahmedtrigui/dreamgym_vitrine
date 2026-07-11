import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getAssetPath } from '../../../shared/utils/assetPath'
import { useIntroSession } from '../hooks/useIntroSession'
import styles from './IntroLoader.module.css'

const INTRO_DURATION = 2200 // ms

export function IntroLoader() {
  const { shouldShow, markDone } = useIntroSession()
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    if (!shouldShow) return

    const timers = [
      setTimeout(() => setPhase(1), 100),   // line flash
      setTimeout(() => setPhase(2), 400),   // logo appears
      setTimeout(() => setPhase(3), 800),   // slogan
      setTimeout(() => {
        markDone()
      }, INTRO_DURATION),
    ]

    return () => timers.forEach(clearTimeout)
  }, [shouldShow]) // eslint-disable-line

  if (!shouldShow) return null

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        key="intro"
      >
        {/* Red scanning line */}
        <motion.div
          className={styles.scanLine}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={phase >= 1 ? { scaleX: 1, opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Logo */}
        <motion.div
          className={styles.logoWrap}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.aura} />
          <img
            src={getAssetPath('images/logo.png')}
            alt="Dream Gym"
            className={styles.logo}
          />
        </motion.div>

        {/* Slogan lines */}
        {phase >= 3 && (
          <motion.div
            className={styles.slogan}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {['NO PAIN', 'NO GAIN', 'JUST RESULTS'].map((line, i) => (
              <motion.span
                key={line}
                className={styles.sloganLine}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                {line}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Skip button */}
        <button
          className={styles.skip}
          onClick={markDone}
          aria-label="Passer l'introduction"
        >
          Passer
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
