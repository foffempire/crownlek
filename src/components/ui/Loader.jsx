import { cn } from '../../lib/format'

/** Minimal brand spinner. */
export default function Loader({ label = 'Loading', className, tone = 'primary' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('flex flex-col items-center justify-center gap-4 py-16', className)}
    >
      <span
        className={cn(
          'size-8 animate-spin rounded-full border-2 border-current border-t-transparent',
          tone === 'primary' ? 'text-primary' : 'text-cream',
        )}
        aria-hidden="true"
      />
      <span className={cn('eyebrow', tone === 'primary' ? 'text-muted' : 'text-cream/70')}>
        {label}
      </span>
    </div>
  )
}

/** Full-height variant used as a route-level Suspense fallback. */
export function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <Loader label="Loading" />
    </div>
  )
}
