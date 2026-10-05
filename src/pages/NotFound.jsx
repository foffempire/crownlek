import { Link } from 'react-router-dom'
import Seo from '../components/common/Seo'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noIndex
      />

      <section className="relative flex min-h-[85vh] items-center bg-cream pt-32 pb-20 sm:pt-40">
        <div className="container-brand">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow flex items-center justify-center gap-3 text-primary">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Error 404
            </p>

            <p className="mt-8 font-display text-[5.5rem] leading-none text-primary sm:text-[7rem]">
              404
            </p>

            <h1 className="mt-4 text-3xl text-ink sm:text-4xl">Page not found</h1>

            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              The page you&rsquo;re looking for doesn&rsquo;t exist, has been moved, or may have been
              renamed. Let&rsquo;s get you back to something beautiful.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/" size="lg">
                Back home
              </Button>
              <Button to="/shop" variant="outline" size="lg">
                Shop the collection
              </Button>
            </div>

            <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line pt-8 text-[0.7rem] tracking-[0.18em] text-muted uppercase">
              {[
                { label: 'Collections', to: '/collections' },
                { label: 'Lookbook', to: '/lookbook' },
                { label: 'Services', to: '/services' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors duration-300 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
