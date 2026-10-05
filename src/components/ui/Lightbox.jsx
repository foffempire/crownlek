import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import useDialog from '../../hooks/useDialog'
import Media from '../common/Media'
import { cn } from '../../lib/format'

/**
 * Full-screen image viewer with keyboard navigation:
 * ← / → to move, Esc to close, Home / End to jump to the first or last slide.
 */
export default function Lightbox({ open, images = [], index = 0, onClose }) {
  // `current` is seeded from `index`; parents mount the lightbox when it opens,
  // so the starting slide is always correct without syncing in an effect.
  const [current, setCurrent] = useState(index)
  const containerRef = useRef(null)

  useLockBodyScroll(open)
  useDialog({ open, onClose, containerRef })

  const total = images.length
  const safeIndex = total ? ((current % total) + total) % total : 0

  const go = (delta) => {
    if (!total) return
    setCurrent((prev) => (((prev + delta) % total) + total) % total)
  }

  useEffect(() => {
    if (!open) return undefined

    const handle = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        go(1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        go(-1)
      } else if (event.key === 'Home') {
        event.preventDefault()
        setCurrent(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        setCurrent(total - 1)
      }
    }

    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, total])

  if (!open || total === 0) return null

  const active = images[safeIndex]

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-primary-dark/96 motion-safe:animate-fade-in"
    >
      <header className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="eyebrow text-cream/60">
          {safeIndex + 1} <span className="text-cream/30">/</span> {total}
        </p>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex size-10 items-center justify-center text-cream/70 transition-colors duration-300 hover:text-gold"
        >
          <X size={20} strokeWidth={1.4} aria-hidden="true" />
        </button>
      </header>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 sm:px-16">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="absolute left-1 z-10 flex size-11 items-center justify-center text-cream/70 transition-colors duration-300 hover:text-gold sm:left-4"
        >
          <ChevronLeft size={26} strokeWidth={1.2} aria-hidden="true" />
        </button>

        <figure className="flex h-full max-h-full w-full max-w-4xl flex-col items-center justify-center gap-5">
          <Media
            src={active.src}
            alt={active.alt}
            label={active.label ?? active.alt}
            tone="dark"
            priority
            ratio="4 / 5"
            className="max-h-[62vh] w-full max-w-xl border border-cream/10 sm:max-h-[68vh]"
          />
          {active.caption ? (
            <figcaption className="text-center text-xs tracking-[0.2em] text-cream/60 uppercase">
              {active.caption}
            </figcaption>
          ) : null}
        </figure>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next image"
          className="absolute right-1 z-10 flex size-11 items-center justify-center text-cream/70 transition-colors duration-300 hover:text-gold sm:right-4"
        >
          <ChevronRight size={26} strokeWidth={1.2} aria-hidden="true" />
        </button>
      </div>

      {total > 1 ? (
        <div className="scrollbar-none flex shrink-0 gap-3 overflow-x-auto px-5 py-5 sm:justify-center sm:px-8">
          {images.map((image, i) => (
            <button
              key={`${image.src}-${i}`}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === safeIndex ? 'true' : undefined}
              className={cn(
                'relative size-14 shrink-0 overflow-hidden border transition-all duration-300 sm:size-16',
                i === safeIndex
                  ? 'border-gold opacity-100'
                  : 'border-cream/15 opacity-50 hover:opacity-90',
              )}
            >
              <Media
                src={image.src}
                alt=""
                tone="dark"
                className="h-full w-full"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>,
    document.body,
  )
}
