import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import useDialog from '../../hooks/useDialog'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { cn } from '../../lib/format'

const SIZES = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-5xl',
  xl: 'max-w-7xl',
}

/** Accessible centred dialog used for quick view, size guide and lightboxes. */
export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = 'md',
  hideClose = false,
  className,
}) {
  const panelRef = useRef(null)

  useLockBodyScroll(open)
  useDialog({ open, onClose, containerRef: panelRef })

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close dialog"
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
          'relative flex max-h-[92vh] w-full flex-col bg-cream shadow-[0_20px_60px_rgba(38,3,15,0.28)] outline-none motion-safe:animate-scale-in sm:max-h-[88vh]',
          SIZES[size] ?? SIZES.md,
          className,
        )}
      >
        {!hideClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center bg-cream/80 text-ink transition-colors duration-300 hover:bg-primary hover:text-cream"
          >
            <X size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        ) : null}

        {title ? <h2 className="sr-only">{title}</h2> : null}
        {description ? <p className="sr-only">{description}</p> : null}

        <div className="overflow-y-auto overscroll-contain">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
