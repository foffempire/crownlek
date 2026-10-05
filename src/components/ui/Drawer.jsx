import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import useDialog from '../../hooks/useDialog'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { cn } from '../../lib/format'

/**
 * Slide-in side panel. Used by the cart drawer, the mobile menu and the
 * mobile product filters so they all behave identically.
 */
export default function Drawer({
  open,
  onClose,
  title,
  side = 'right',
  width = 'max-w-md',
  footer,
  children,
  headerExtra,
}) {
  const panelRef = useRef(null)

  useLockBodyScroll(open)
  useDialog({ open, onClose, containerRef: panelRef })

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[95]">
      <button
        type="button"
        aria-label="Close panel"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-primary-dark/70 backdrop-blur-[2px] motion-safe:animate-fade-in"
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={cn(
          'absolute top-0 flex h-full w-full flex-col bg-cream shadow-[0_20px_60px_rgba(38,3,15,0.28)] outline-none motion-safe:animate-drawer-in',
          side === 'right' ? 'right-0' : 'left-0',
          width,
        )}
      >
        <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-5 sm:px-6">
          <h2 className="eyebrow text-primary">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${title}`}
            className="-mr-1 flex size-9 items-center justify-center text-ink transition-colors duration-300 hover:text-primary"
          >
            <X size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </header>

        {headerExtra}

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-6">{children}</div>

        {footer ? (
          <footer className="border-t border-line bg-cream px-5 py-5 sm:px-6">{footer}</footer>
        ) : null}
      </div>
    </div>,
    document.body,
  )
}
