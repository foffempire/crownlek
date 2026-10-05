import { useState } from 'react'
import { Expand } from 'lucide-react'
import Media from '../common/Media'
import Lightbox from '../ui/Lightbox'
import { cn } from '../../lib/format'

/**
 * Product image gallery: thumbnail rail plus a main image that opens the
 * full-screen lightbox. Arrow keys move between thumbnails when the main
 * image has focus. The parent keys this component by product slug, so the
 * active slide resets naturally when you move between products.
 */
export default function ProductGallery({ product }) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!product) return null

  const images = product.images.map((src) => ({ src, alt: product.name, label: product.name }))

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setActive((prev) => (prev + 1) % images.length)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setActive((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-6">
      <div className="relative flex-1">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          onKeyDown={onKeyDown}
          aria-label={`Open ${product.name} image ${active + 1} of ${images.length} in full screen`}
          className="group relative block w-full cursor-zoom-in"
        >
          <Media
            src={images[active].src}
            alt={images[active].alt}
            label={product.name}
            ratio="4 / 5"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <span className="pointer-events-none absolute right-4 bottom-4 flex items-center gap-2 bg-cream/90 px-3 py-2 text-[0.6rem] tracking-[0.18em] text-ink uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Expand size={12} strokeWidth={1.6} aria-hidden="true" />
            Expand
          </span>
        </button>
      </div>

      {images.length > 1 ? (
        <ul className="flex gap-3 overflow-x-auto pb-1 lg:w-24 lg:flex-col lg:overflow-visible lg:pb-0">
          {images.map((image, index) => (
            <li key={`${image.src}-${index}`} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
                className={cn(
                  'block w-20 transition-opacity duration-300 lg:w-full',
                  index === active ? 'opacity-100' : 'opacity-55 hover:opacity-90',
                )}
              >
                <Media
                  src={image.src}
                  alt=""
                  label={product.name}
                  ratio="3 / 4"
                  className={cn(
                    'border transition-colors duration-300',
                    index === active ? 'border-primary' : 'border-transparent',
                  )}
                  sizes="96px"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {lightboxOpen ? (
        <Lightbox
          open
          onClose={() => setLightboxOpen(false)}
          images={images}
          index={active}
        />
      ) : null}
    </div>
  )
}
