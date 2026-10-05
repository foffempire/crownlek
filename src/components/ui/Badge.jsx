import { cn } from '../../lib/format'

const VARIANTS = {
  default: 'bg-primary text-cream',
  gold: 'bg-gold/15 text-[#8a6f14] border border-gold/40',
  outline: 'border border-line text-muted',
  light: 'bg-cream/90 text-primary',
  dark: 'bg-ink text-cream',
}

/** Small editorial label used for badges such as "New" or "Featured". */
export default function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-[0.6rem] font-medium tracking-[0.2em] uppercase',
        VARIANTS[variant] ?? VARIANTS.default,
        className,
      )}
    >
      {children}
    </span>
  )
}
