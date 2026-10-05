import { useMemo, useState } from 'react'
import { lookbook, lookbookCategories } from '../data/lookbook'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Media from '../components/common/Media'
import Lightbox from '../components/ui/Lightbox'
import Reveal from '../components/ui/Reveal'
import { cn } from '../lib/format'

const SPAN_CLASSES = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  regular: '',
}

/** Filterable editorial gallery with a full-screen lightbox. */
export default function Lookbook() {
  const [category, setCategory] = useState('All')
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const items = useMemo(
    () =>
      category === 'All'
        ? lookbook
        : lookbook.filter((item) => item.categories.includes(category)),
    [category],
  )

  const lightboxImages = items.map((item) => ({
    src: item.image,
    alt: item.alt,
    caption: item.caption,
    label: item.caption,
  }))

  return (
    <>
      <Seo
        title="Lookbook"
        description="The Crownlek lookbook — an editorial celebration of African style, identity and craftsmanship across traditional, contemporary and ceremonial looks."
        path="/lookbook"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Lookbook' }]}
        eyebrow="The Lookbook"
        title="A celebration of African style, identity and craftsmanship"
        description="Photographed across Lagos and beyond: traditional ceremony, contemporary tailoring and editorial studies."
      />

      <section className="pb-20 sm:pb-28 lg:pb-32">
        <div className="container-brand">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 border-y border-line py-5">
            {lookbookCategories.map((option) => {
              const active = category === option
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCategory(option)}
                  aria-pressed={active}
                  className={cn(
                    'border px-4 py-2 text-[0.65rem] tracking-[0.18em] uppercase transition-colors duration-300',
                    active
                      ? 'border-primary bg-primary text-cream'
                      : 'border-line text-muted hover:border-primary hover:text-primary',
                  )}
                >
                  {option}
                </button>
              )
            })}

            <p className="ml-auto text-xs tracking-[0.18em] text-muted uppercase">
              {items.length} {items.length === 1 ? 'image' : 'images'}
            </p>
          </div>

          {/* Grid */}
          {items.length === 0 ? (
            <div className="mt-14 border border-line bg-beige/50 px-8 py-20 text-center">
              <p className="font-display text-2xl text-ink">Nothing here yet</p>
              <p className="mt-3 text-sm text-muted">
                We haven&rsquo;t published {category.toLowerCase()} images yet. Try another category.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[210px] sm:grid-cols-4 sm:gap-5 lg:auto-rows-[240px]">
              {items.map((item, i) => (
                <Reveal
                  key={item.id}
                  delay={(i % 4) * 70}
                  className={cn('h-full', SPAN_CLASSES[item.span])}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIndex(i)
                      setOpen(true)
                    }}
                    aria-label={`Open ${item.caption} in the image viewer`}
                    className="group relative block h-full w-full overflow-hidden bg-beige text-left"
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
          )}
        </div>
      </section>

      {open ? (
        <Lightbox open onClose={() => setOpen(false)} images={lightboxImages} index={index} />
      ) : null}
    </>
  )
}
