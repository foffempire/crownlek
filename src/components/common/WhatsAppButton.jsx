import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { site, whatsappLink } from '../../data/site'
import { cn } from '../../lib/format'

/**
 * Floating WhatsApp call-to-action. Expands into a small panel with a direct
 * link — no backend required.
 */
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      {open ? (
        <div className="mb-3 w-64 border border-line bg-cream p-5 shadow-[0_16px_40px_rgba(38,3,15,0.18)] motion-safe:animate-scale-in">
          <div className="flex items-start justify-between gap-3">
            <p className="eyebrow text-primary">Chat with us</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat panel"
              className="-mt-1 -mr-1 text-muted transition-colors duration-300 hover:text-primary"
            >
              <X size={14} strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            Questions about sizing, fabrics or a bespoke commission? Message the atelier directly.
          </p>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 bg-primary text-[0.65rem] font-medium tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-burgundy"
          >
            Start a conversation
          </a>

          <p className="mt-3 text-center text-[0.65rem] text-muted">{site.contact.phone}</p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? 'Close WhatsApp panel' : 'Chat on WhatsApp'}
        className={cn(
          'ml-auto flex size-12 items-center justify-center rounded-full bg-primary text-cream shadow-[0_10px_30px_rgba(93,9,42,0.35)] transition-all duration-300 hover:bg-burgundy sm:size-14',
        )}
      >
        <MessageCircle size={20} strokeWidth={1.6} aria-hidden="true" />
      </button>
    </div>
  )
}
