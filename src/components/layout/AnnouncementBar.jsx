import { useState } from 'react'
import { X } from 'lucide-react'
import { site } from '../../data/site'
import { cn } from '../../lib/format'

/**
 * Thin burgundy bar above the navbar. The copy comes from `site.announcement`
 * so it can be changed in one place, and it can be dismissed for the session.
 */
export default function AnnouncementBar({ collapsed = false }) {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return window.sessionStorage.getItem('crownlek:announcement') === 'hidden'
    } catch {
      return false
    }
  })

  if (dismissed) return null

  const dismiss = () => {
    setDismissed(true)
    try {
      window.sessionStorage.setItem('crownlek:announcement', 'hidden')
    } catch {
      /* storage unavailable — nothing to do */
    }
  }

  return (
    <div
      className={cn(
        'overflow-hidden bg-primary text-cream transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        collapsed ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100',
      )}
    >
      <div className="container-brand relative flex items-center justify-center gap-4 py-2.5">
        <p className="text-center text-[0.6rem] font-medium tracking-[0.22em] uppercase sm:text-[0.65rem]">
          {site.announcement}
          {site.announcementSecondary ? (
            <span className="hidden text-cream/60 sm:inline">
              {' '}
              &nbsp;·&nbsp; {site.announcementSecondary}
            </span>
          ) : null}
        </p>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-4 flex size-6 items-center justify-center text-cream/60 transition-colors duration-300 hover:text-gold sm:right-6"
        >
          <X size={13} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
