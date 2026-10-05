import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { footerCareLinks, footerLegalLinks, footerShopLinks } from '../../data/navigation'
import { site, whatsappLink } from '../../data/site'

function FooterColumn({ title, children }) {
  return (
    <div>
      <h2 className="eyebrow text-gold">{title}</h2>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  )
}

const linkClass =
  'text-sm text-cream/70 transition-colors duration-300 hover:text-gold'

/** Site footer: brand, navigation, customer care, contact and social. */
export default function Footer() {
  return (
    <footer className="mt-auto bg-primary-dark text-cream">
      <div className="container-brand py-14 sm:py-18 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-gold"
              aria-label={`${site.name} — home`}
            >
              <span
                className="flex size-10 items-center justify-center border border-cream/40 text-[0.6rem] font-medium tracking-[0.08em] text-gold"
                aria-hidden="true"
              >
                CL
              </span>
              <span className="font-display text-xl tracking-[0.22em] uppercase">{site.name}</span>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-cream/70">{site.shortDescription}</p>

            <p className="mt-6 font-display text-lg text-gold">{site.tagline}</p>
          </div>

          {/* Navigation */}
          <FooterColumn title="Shop">
            {footerShopLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Customer care */}
          <FooterColumn title="Customer Care">
            {footerCareLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Contact + social */}
          <div>
            <h2 className="eyebrow text-gold">Contact</h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-cream/70">
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-start gap-3 transition-colors duration-300 hover:text-gold"
                >
                  <Phone size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  className="inline-flex items-start gap-3 transition-colors duration-300 hover:text-gold"
                >
                  <Mail size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>

            <h2 className="eyebrow mt-8 text-gold">Follow</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
                  >
                    {social.label}
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-2 text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
                >
                  WhatsApp
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-brand flex flex-col items-center justify-between gap-4 py-6 text-[0.7rem] text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition-colors duration-300 hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
