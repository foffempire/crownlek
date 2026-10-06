import { useEffect, useState } from 'react'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { PHOTO, img } from '../../lib/images'
import { cn } from '../../lib/format'
import { site } from '../../data/site'
import Media from '../common/Media'
import Button from '../ui/Button'

/** How long each slide holds before the next one fades in. */
const AUTOPLAY_MS = 5000

/** Campaign slides. Imagery and copy rotate; the palette and layout stay put. */
const SLIDES = [
  {
    id: 'signature',
    image: PHOTO.tradefair,
    alt: 'Model wearing a hand-embroidered Nigerian agbada',
    label: 'Editorial campaign image',
    eyebrow: 'Authentic African Craftsmanship',
    title: ['Tradition,', 'Tailored for Today.'],
    description:
      'Discover timeless African native attire crafted with elegance, culture and character — made to order in our Lagos atelier.',
  },
  {
    id: 'bridal',
    image: PHOTO.weddingCouple,
    alt: 'Bride and groom in matching traditional Nigerian wedding attire',
    label: 'Bridal campaign image',
    eyebrow: 'Bridal & Ceremonial',
    title: ['Dressed for the', 'Moments That Last.'],
    description:
      'From engagement ceremonies to the big day, our bespoke bridal and groomswear is cut to your story, your colours and your heritage.',
  },
  {
    id: 'atelier',
    image: PHOTO.sewingHands,
    alt: 'Artisan hands finishing embroidery in the Crownlek atelier',
    label: 'Atelier image',
    eyebrow: 'Hand Finished in Lagos',
    title: ['Crafted by Hand,', 'Made to Endure.'],
    description:
      'Every agbada, senator and kaftan is cut, embroidered and finished by our artisans — never mass produced, always made for you.',
  },
]

const STATS = [
  { value: '20+', label: 'Years of tailoring' },
  { value: '100%', label: 'Hand finished' },
  { value: '40+', label: 'Countries shipped' },
]

/** Full-bleed editorial hero slider. Sits behind the transparent navbar. */
export default function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const slide = SLIDES[active]

  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const current = active
    const id = window.setTimeout(() => {
      setActive((current + 1) % SLIDES.length)
    }, AUTOPLAY_MS)

    return () => window.clearTimeout(id)
  }, [active, paused])

  const go = (delta) => setActive((current) => (current + delta + SLIDES.length) % SLIDES.length)

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary-dark"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
      // onFocusCapture={() => setPaused(true)}
      // onBlurCapture={() => setPaused(false)}
    >
      {/* Crossfading campaign imagery */}
      <div className="absolute inset-0">
        {SLIDES.map((item, index) => (
          <div
            key={item.id}
            aria-hidden={index !== active}
            className={cn(
              'absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
              index === active ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Media
              src={img(item.image, 2000)}
              alt={item.alt}
              label={item.label}
              tone="dark"
              priority={index === 0}
              fill
              className="h-full w-full"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Legibility scrim */}
      <div className="absolute inset-0 bg-primary-dark/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/25 to-primary-dark/45"
        aria-hidden="true"
      />

      <div className="container-brand relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div key={slide.id} className="max-w-3xl animate-fade-up motion-reduce:animate-none">
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
            {slide.eyebrow}
          </p>

          <h1 className="mt-7 text-[2.75rem] leading-[1.02] text-cream sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {slide.title[0]}
            <br />
            {slide.title[1]}
          </h1>

          <p className="mt-7 max-w-xl text-[0.95rem] leading-relaxed text-cream/75 sm:text-lg">
            {slide.description}
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
            {STATS.map((stat) => (
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

        {/* Slider controls — aligned with the headline, clear of the scroll cue */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex h-11 w-11 items-center justify-center border border-cream/25 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={17} strokeWidth={1.5} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-1" role="group" aria-label="Choose a slide">
            {SLIDES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1} of ${SLIDES.length}: ${item.eyebrow}`}
                aria-current={index === active}
                className="group flex items-center py-3"
              >
                <span
                  className={cn(
                    'block h-0.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    index === active
                      ? 'w-10 bg-gold'
                      : 'w-5 bg-cream/30 group-hover:bg-cream/60',
                  )}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex h-11 w-11 items-center justify-center border border-cream/25 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <ChevronRight size={17} strokeWidth={1.5} aria-hidden="true" />
          </button>
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
