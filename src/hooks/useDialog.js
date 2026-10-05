import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

/**
 * Shared behaviour for dialogs and drawers:
 * - Escape closes
 * - Tab focus is trapped inside the panel
 * - Focus moves into the panel on open and returns to the trigger on close
 */
export default function useDialog({ open, onClose, containerRef }) {
  const lastFocused = useRef(null)
  const { pathname } = useLocation()

  // Keep the latest `onClose` without making it an effect dependency, so the
  // focus trap below never re-runs (and steals focus) on a parent re-render.
  const closeRef = useRef(onClose)
  useEffect(() => {
    closeRef.current = onClose
  })

  // Close whenever the route *changes*, so overlays never linger across pages.
  // The comparison guards against dialogs that mount already open.
  const previousPath = useRef(pathname)
  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    closeRef.current?.()
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined

    lastFocused.current = document.activeElement

    const node = containerRef.current
    const focusables = node ? Array.from(node.querySelectorAll(SELECTOR)) : []
    const first = focusables[0] ?? node
    first?.focus?.({ preventScroll: true })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        closeRef.current?.()
        return
      }

      if (event.key !== 'Tab' || !node) return

      const items = Array.from(node.querySelectorAll(SELECTOR)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      )
      if (items.length === 0) return

      const firstItem = items[0]
      const lastItem = items[items.length - 1]

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault()
        lastItem.focus()
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault()
        firstItem.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      const restore = lastFocused.current
      if (restore instanceof HTMLElement && document.contains(restore)) {
        restore.focus({ preventScroll: true })
      }
    }
  }, [open, containerRef])
}
