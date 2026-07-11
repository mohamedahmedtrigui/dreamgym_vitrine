import { useState, useEffect } from 'react'
import { useReducedMotionPreference } from '../../../shared/hooks/useReducedMotionPreference'

const SESSION_KEY = 'dreamgym_intro_shown'

/**
 * Returns whether the intro should be shown this session.
 * Sets the sessionStorage flag when intro is marked as done.
 */
export function useIntroSession() {
  const prefersReduced = useReducedMotionPreference()
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    if (prefersReduced) {
      setShouldShow(false)
      return
    }
    const alreadyShown = sessionStorage.getItem(SESSION_KEY)
    if (!alreadyShown) {
      setShouldShow(true)
    }
  }, [prefersReduced])

  const markDone = () => {
    sessionStorage.setItem(SESSION_KEY, '1')
    setShouldShow(false)
  }

  return { shouldShow, markDone }
}
