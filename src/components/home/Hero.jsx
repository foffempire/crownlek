import { ArrowDown } from 'lucide-react'
import { PHOTO, img } from '../../lib/images'
import { site } from '../../data/site'
import Media from '../common/Media'
import Button from '../ui/Button'

/** Full-bleed editorial hero. Sits behind the transparent navbar. */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary-dark">
      <Media
        src={img(PHOTO.heroAgbada, 2000)}
        alt="Model wearing a hand-embroidered Nigerian agbada"
        label="Editorial campaign image"
        tone="dark"
        priority
        fill
        className="h-full w-full"
        sizes="100vw"
      />

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-primary-dark/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/25 to-primary-dark/45"
        aria-hidden="true"
      />

      <div className="container-brand relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
            Authentic African Craftsmanship
          </p>

          <h1 className="mt-7 text-[2.75rem] leading-[1.02] text-cream sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Tradition,
            <br />
            Tailored for Today.
          </h1>

          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-cream/75 sm:text-lg">
            Discover timeless African native attire crafted with elegance, culture and character —
            made to order in our Lagos atelier.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to="/shop" size="lg">
              Shop Collection
            </Button>
            <Button to="/lookbook" variant="light" size="lg">
              Explore Lookbook
            </Button>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-cream/15 pt-8">
            {[
              { value: '20+', label: 'Years of tailoring' },
              { value: '100%', label: 'Hand finished' },
              { value: '40+', label: 'Countries shipped' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl text-gold">{stat.value}</span>
                  <span className="mt-1 block text-[0.65rem] tracking-[0.2em] text-cream/60 uppercase">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-cream/60 transition-colors duration-300 hover:text-gold lg:flex"
      >
        <span className="text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown size={15} strokeWidth={1.4} aria-hidden="true" className="motion-safe:animate-bounce" />
      </a>

      <p className="absolute right-6 bottom-8 hidden text-[0.6rem] tracking-[0.28em] text-cream/40 uppercase xl:block">
        {site.tagline}
      </p>
    </section>
  )
}
