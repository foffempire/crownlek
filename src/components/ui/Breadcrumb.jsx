import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/format'

/**
 * Breadcrumb trail. The final item is rendered as plain text with
 * `aria-current="page"`.
 */
export default function Breadcrumb({ items = [], tone = 'light', className }) {
  const dark = tone === 'dark'

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={cn('flex flex-wrap items-center gap-2 text-[0.7rem] tracking-[0.15em] uppercase')}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <ChevronRight
                  size={12}
                  aria-hidden="true"
                  className={dark ? 'text-cream/40' : 'text-muted/50'}
                />
              ) : null}

              {isLast || !item.to ? (
                <span aria-current="page" className={dark ? 'text-cream/80' : 'text-ink'}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={cn(
                    'transition-colors duration-300',
                    dark ? 'text-cream/55 hover:text-gold' : 'text-muted hover:text-primary',
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
