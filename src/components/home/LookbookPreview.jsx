import { useState } from 'react'
import { lookbook } from '../../data/lookbook'
import Media from '../common/Media'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Lightbox from '../ui/Lightbox'
import { cn } from '../../lib/format'

const SPAN_CLASSES = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  regular: '',
}

/** Asymmetric editorial gallery preview. */
export default function LookbookPreview() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const images = lookbook.slice(0, 6)
  const lightboxImages = lookbook.map((item) => ({
    src: item.image,
    alt: item.alt,
    caption: item.caption,
    label: item.caption,
  }))

  return (
    <section className="bg-beige py-20 sm:py-28 lg:py-32">
      <div className="container-brand">
        <SectionTitle
          eyebrow="The Lookbook"
          title="A celebration of African style, identity and craftsmanship"
          align="center"
        />

        <div className="mt-16 grid auto-rows-[170px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-5 lg:auto-rows-[230px]">
          {images.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 70}
              className={cn('h-full', SPAN_CLASSES[item.span])}
            >
              <button
                type="button"
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
                aria-label={`Open ${item.caption} in the image viewer`}
                className="group relative block h-full w-full overflow-hidden bg-cream text-left"
              >
                <Media
                  src={item.image}
                  alt={item.alt}
                  label={item.caption}
                  tone="dark"
                  className="h-full w-full"
                  imageClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(min-width: 640px) 25vw, 50vw"
                />

                <span
                  className="absolute inset-0 bg-primary-dark/0 transition-colors duration-500 group-hover:bg-primary-dark/35"
                  aria-hidden="true"
                />

                <span className="absolute bottom-4 left-4 right-4 translate-y-2 text-[0.6rem] tracking-[0.2em] text-cream uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/lookbook" variant="outline">
            View lookbook
          </Button>
        </div>
      </div>

      {open ? (
        <Lightbox open onClose={() => setOpen(false)} images={lightboxImages} index={index} />
      ) : null}
    </section>
  )
}
