import { cn } from '../../lib/format'

/**
 * Consistent eyebrow + heading + supporting copy block used at the top of
 * almost every section.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
  size = 'md',
  className,
  children,
}) {
  const dark = tone === 'dark'

  const sizes = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl lg:text-[2.75rem]',
    lg: 'text-4xl sm:text-5xl lg:text-6xl',
  }

  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'eyebrow mb-5 flex items-center gap-3',
            align === 'center' && 'justify-center',
            align === 'right' && 'justify-end',
            dark ? 'text-gold' : 'text-primary',
          )}
        >
          <span className={cn('h-px w-8', dark ? 'bg-gold/60' : 'bg-gold')} />
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <Heading className={cn(sizes[size] ?? sizes.md, dark ? 'text-cream' : 'text-ink')}>
          {title}
        </Heading>
      ) : null}

      {description ? (
        <p
          className={cn(
            'mt-5 text-[0.95rem] leading-relaxed sm:text-base',
            dark ? 'text-cream/70' : 'text-muted',
          )}
        >
          {description}
        </p>
      ) : null}

      {children}
    </div>
  )
}
