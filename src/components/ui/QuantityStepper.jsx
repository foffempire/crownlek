import { Minus, Plus } from 'lucide-react'
import { cn } from '../../lib/format'

/** Accessible quantity control used on the product page and in the cart. */
export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  label = 'Quantity',
  className,
}) {
  const sizes = {
    sm: { wrap: 'h-9', btn: 'w-9', text: 'text-sm' },
    md: { wrap: 'h-12', btn: 'w-12', text: 'text-base' },
  }[size]

  const step = (delta) => {
    const next = Math.min(Math.max(value + delta, min), max)
    if (next !== value) onChange(next)
  }

  return (
    <div
      className={cn(
        'inline-flex items-stretch border border-line bg-white',
        sizes.wrap,
        className,
      )}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={() => step(-1)}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className={cn(
          'flex items-center justify-center text-ink transition-colors duration-300 hover:bg-beige hover:text-primary disabled:opacity-30 disabled:hover:bg-transparent',
          sizes.btn,
        )}
      >
        <Minus size={15} strokeWidth={1.5} aria-hidden="true" />
      </button>

      <span
        aria-live="polite"
        className={cn(
          'flex min-w-10 items-center justify-center px-2 font-medium tabular-nums',
          sizes.text,
        )}
      >
        {value}
      </span>

      <button
        type="button"
        onClick={() => step(1)}
        disabled={value >= max}
        aria-label="Increase quantity"
        className={cn(
          'flex items-center justify-center text-ink transition-colors duration-300 hover:bg-beige hover:text-primary disabled:opacity-30 disabled:hover:bg-transparent',
          sizes.btn,
        )}
      >
        <Plus size={15} strokeWidth={1.5} aria-hidden="true" />
      </button>
    </div>
  )
}
