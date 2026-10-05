import { useState } from 'react'
import { socialGallery } from '../../data/lookbook'
import { site } from '../../data/site'
import Media from '../common/Media'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Lightbox from '../ui/Lightbox'

/** Inline brand glyph — lucide no longer ships brand icons. */
function InstagramIcon({ size = 20, strokeWidth = 1.4, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Social wall. Static by design — no Instagram API is called. */
export default function InstagramGallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const images = socialGallery.map((item) => ({
    src: item.image,
    alt: item.alt,
    label: item.alt,
  }))

  return (
    <section className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-brand">
        <SectionTitle
          eyebrow="Follow our journey"
          title={site.instagramHandle}
          description="Behind the seams, new drops and the people who wear them."
          align="center"
        />

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {socialGallery.map((item, i) => (
            <li key={item.id}>
              <Reveal delay={i * 60}>
                <button
                  type="button"
                  onClick={() => {
                    setIndex(i)
                    setOpen(true)
                  }}
                  aria-label={`Open image: ${item.alt}`}
                  className="group relative block w-full overflow-hidden bg-beige"
                >
                  <Media
                    src={item.image}
                    alt={item.alt}
                    label="Social post"
                    ratio="1 / 1"
                    className="w-full"
                    imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />

                  <span
                    className="absolute inset-0 flex items-center justify-center bg-primary-dark/0 text-cream/0 transition-all duration-500 group-hover:bg-primary-dark/45 group-hover:text-cream"
                    aria-hidden="true"
                  >
                    <InstagramIcon size={20} />
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={site.socials[0].href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:text-primary"
          >
            <InstagramIcon size={16} />
            Follow {site.instagramHandle}
          </a>
        </div>
      </div>

      {open ? (
        <Lightbox open onClose={() => setOpen(false)} images={images} index={index} />
      ) : null}
    </section>
  )
}
