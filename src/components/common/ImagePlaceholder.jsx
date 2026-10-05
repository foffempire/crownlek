import { cn } from '../../lib/format'

/**
 * Editorial placeholder plate shown wherever a photograph will eventually sit.
 *
 * Designed to read as an intentional typographic panel rather than a broken
 * image: soft brand tint, hairline frame, monogram and the subject label.
 */
export default function ImagePlaceholder({ label, tone = 'light', className }) {
  const dark = tone === 'dark'

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden',
        dark ? 'bg-primary-dark' : 'bg-beige',
        className,
      )}
    >
      {/* Hairline diagonal weave — a quiet nod to woven fabric */}
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${
            dark ? 'rgba(255,255,255,0.05)' : 'rgba(93,9,42,0.05)'
          } 0 1px, transparent 1px 5px)`,
        }}
      />

      <span
        className={cn(
          'relative flex size-11 items-center justify-center rounded-full border text-[0.65rem] font-medium tracking-[0.18em] sm:size-12',
          dark ? 'border-gold/50 text-gold' : 'border-primary/25 text-primary',
        )}
      >
        CL
      </span>

      {label ? (
        <span
          className={cn(
            'relative max-w-[85%] text-center text-[0.65rem] leading-relaxed font-medium tracking-[0.22em] uppercase sm:text-[0.7rem]',
            dark ? 'text-cream/70' : 'text-muted',
          )}
        >
          {label}
        </span>
      ) : null}

      <span className={cn('relative h-px w-8', dark ? 'bg-gold/50' : 'bg-primary/20')} />
    </div>
  )
}
