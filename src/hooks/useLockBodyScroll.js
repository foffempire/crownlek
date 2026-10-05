import { useEffect } from 'react'

/** Freezes background scrolling while a modal, drawer or menu is open. */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined

    const { overflow, paddingRight } = document.body.style
    const scrollbar = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`

    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [locked])
}
