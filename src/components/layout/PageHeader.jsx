import Breadcrumb from '../ui/Breadcrumb'
import { cn } from '../../lib/format'

/**
 * Standard page opener: clears the fixed navbar, sets the heading hierarchy
 * and optionally shows a breadcrumb trail.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  align = 'left',
  children,
  className,
}) {
  return (
    <section className={cn('bg-cream pt-28 pb-12 sm:pt-36 sm:pb-16', className)}>
      <div className="container-brand">
        {breadcrumb ? <Breadcrumb items={breadcrumb} className="mb-8" /> : null}

        <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
          {eyebrow ? (
            <p
              className={cn(
                'eyebrow mb-5 flex items-center gap-3 text-primary',
                align === 'center' && 'justify-center',
              )}
            >
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">{title}</h1>

          {description ? (
            <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  )
}
