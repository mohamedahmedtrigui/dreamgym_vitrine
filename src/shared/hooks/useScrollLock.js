import { useEffect } from 'react'

/**
 * Locks body scroll when `locked` is true.
 * Restores scroll on unmount.
 */
export function useScrollLock(locked) {
  useEffect(() => {
    if (locked) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [locked])
}
