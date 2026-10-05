import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Phone } from 'lucide-react'
import { mainNav } from '../../data/navigation'
import { site, whatsappLink } from '../../data/site'
import Drawer from '../ui/Drawer'
import { cn } from '../../lib/format'

const secondaryNav = [
  { label: 'Cart', to: '/cart' },
  { label: 'FAQ', to: '/faq' },
]

/** Slide-in navigation for tablet and mobile. */
export default function MobileMenu({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose} title="Menu" width="sm:max-w-sm">
      <nav aria-label="Mobile">
        <ul className="flex flex-col">
          {mainNav.map((item, index) => (
            <li key={item.to} className="border-b border-line last:border-b-0">
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-baseline gap-4 py-4 transition-colors duration-300',
                    isActive ? 'text-primary' : 'text-ink hover:text-primary',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-[0.6rem] text-muted tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-2xl leading-none">{item.label}</span>
                    {isActive ? (
                      <span className="ml-auto self-center text-[0.6rem] tracking-[0.2em] text-gold uppercase">
                        Active
                      </span>
                    ) : null}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {secondaryNav.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-[0.7rem] tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-line pt-8">
        <p className="eyebrow text-muted">Visit the atelier</p>
        <address className="mt-4 text-sm leading-relaxed text-ink not-italic">
          {site.contact.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <a
          href={site.contact.phoneHref}
          className="mt-4 inline-flex items-center gap-2 text-sm text-ink transition-colors duration-300 hover:text-primary"
        >
          <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
          {site.contact.phone}
        </a>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] text-primary uppercase"
          >
            Message us on WhatsApp
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <ul className="mt-8 flex gap-5">
        {site.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[0.7rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 hover:text-primary"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </Drawer>
  )
}
