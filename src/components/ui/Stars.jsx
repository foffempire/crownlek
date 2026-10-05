import { Star } from 'lucide-react'
import { cn } from '../../lib/format'

/** Read-only star rating with an optional review count. */
export default function Stars({ rating = 0, reviews, size = 13, tone = 'gold', className }) {
  const rounded = Math.round(rating)

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span
        className="flex items-center gap-0.5"
        role="img"
        aria-label={`Rated ${rating} out of 5`}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            aria-hidden="true"
            className={cn(
              star <= rounded ? 'fill-gold text-gold' : 'text-line',
              tone === 'light' && star <= rounded && 'fill-gold text-gold',
            )}
            strokeWidth={1.2}
          />
        ))}
      </span>

      {reviews !== undefined ? (
        <span className="text-xs text-muted">
          {rating.toFixed(1)} ({reviews})
        </span>
      ) : null}
    </div>
  )
}
