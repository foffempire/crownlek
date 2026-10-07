import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedCollections } from '../../data/collections'
import Media from '../common/Media'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { cn } from '../../lib/format'

/** Large editorial collection cards with an asymmetric desktop layout. */
export default function FeaturedCollections() {
  const collections = getFeaturedCollections(5)

  return (
    <section id="collections" className="scroll-mt-24 bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Collections"
            title="Explore our world"
            description="Four distinct houses, one standard of craft. Each collection is designed, cut and finished in-house."
          />

          <Link
            to="/collections"
            className="group hidden items-center gap-3 text-[0.7rem] tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:text-primary sm:inline-flex"
          >
            All collections
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {collections.map((collection, index) => (
            <Reveal
              key={collection.slug}
              delay={index * 90}
              className={cn(index === 0 && 'lg:row-span-2')}
            >
              <Link
                to={`/collections/${collection.slug}`}
                className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden bg-beige p-7 sm:min-h-[420px] lg:p-9"
              >
                <Media
                  src={collection.image}
                  alt={`${collection.name} collection`}
                  label={collection.name}
                  tone="dark"
                  fill
                  className="h-full w-full"
                  imageClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/35 to-transparent transition-opacity duration-500 group-hover:from-primary-dark/90"
                  aria-hidden="true"
                />

                <div className="relative">
                  <p className="text-[0.6rem] tracking-[0.25em] text-gold uppercase">
                    {collection.count} pieces
                  </p>

                  <h3 className="mt-3 font-display text-3xl text-cream lg:text-4xl">
                    {collection.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                    {collection.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] text-cream uppercase">
                    <span className="relative">
                      Explore
                      <span
                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                        aria-hidden="true"
                      />
                    </span>
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 sm:hidden">
          <Link
            to="/collections"
            className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-ink uppercase"
          >
            All collections
            <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
