import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '../../lib/format'

/**
 * Accordion that keeps a single panel open at a time.
 * Used by the FAQ page and the product detail information tabs.
 */
export default function Accordion({ items = [], defaultOpenId = null, className, tone = 'light' }) {
  const [openId, setOpenId] = useState(defaultOpenId ?? items[0]?.id ?? null)
  const dark = tone === 'dark'

  return (
    <div className={cn('divide-y', dark ? 'divide-cream/15' : 'divide-line', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        const panelId = `accordion-panel-${item.id}`
        const buttonId = `accordion-button-${item.id}`

        return (
          <div key={item.id} id={item.id} className="scroll-mt-28">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  'group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-300',
                  dark ? 'hover:text-gold' : 'hover:text-primary',
                )}
              >
                <span
                  className={cn(
                    'font-display text-lg leading-snug sm:text-xl',
                    isOpen ? (dark ? 'text-gold' : 'text-primary') : dark ? 'text-cream' : 'text-ink',
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    'mt-1 flex size-7 shrink-0 items-center justify-center border transition-colors duration-300',
                    dark ? 'border-cream/25 text-cream/70' : 'border-line text-muted',
                    isOpen && (dark ? 'border-gold text-gold' : 'border-primary text-primary'),
                  )}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus size={13} strokeWidth={1.5} /> : <Plus size={13} strokeWidth={1.5} />}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pr-10 pb-6"
            >
              <div
                className={cn(
                  'text-sm leading-relaxed sm:text-[0.95rem]',
                  dark ? 'text-cream/70' : 'text-muted',
                )}
              >
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
