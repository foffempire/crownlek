import { Link } from 'react-router-dom'
import { cn } from '../../lib/format'

const VARIANTS = {
  primary:
    'bg-primary text-cream border border-primary hover:bg-burgundy hover:border-burgundy',
  outline: 'border border-primary/70 text-primary hover:bg-primary hover:text-cream hover:border-primary',
  light: 'border border-cream/60 text-cream hover:bg-cream hover:text-primary hover:border-cream',
  gold: 'bg-gold text-primary-dark border border-gold hover:bg-[#b18f1f] hover:border-[#b18f1f]',
  dark: 'bg-ink text-cream border border-ink hover:bg-primary hover:border-primary',
  ghost: 'border border-transparent text-ink hover:text-primary',
}

const SIZES = {
  sm: 'h-9 px-4 text-[0.65rem]',
  md: 'h-11 px-6 text-[0.7rem]',
  lg: 'h-14 px-8 text-[0.75rem] sm:px-10',
}

const BASE =
  'inline-flex select-none items-center justify-center gap-2.5 font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 disabled:pointer-events-none disabled:opacity-40'

/**
 * The single button primitive for the whole site.
 * Renders a `Link`, an `a`, or a `button` depending on the props supplied.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...rest
}) {
  const classes = cn(BASE, VARIANTS[variant] ?? VARIANTS.primary, SIZES[size] ?? SIZES.md, className)

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
