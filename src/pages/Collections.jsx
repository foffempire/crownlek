import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { collections } from '../data/collections'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Media from '../components/common/Media'
import Reveal from '../components/ui/Reveal'
import Newsletter from '../components/home/Newsletter'
import { cn } from '../lib/format'

/** Index of every collection, in an asymmetric editorial grid. */
export default function Collections() {
  return (
    <>
      <Seo
        title="Collections"
        description="Explore Crownlek collections — traditional, contemporary, agbada, senator, kaftans, African prints, womenswear, menswear, kids and bespoke."
        path="/collections"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Collections' }]}
        eyebrow="Collections"
        title="Ten houses, one standard"
        description="Every collection is designed, cut and finished in our Lagos atelier — from traditional ceremony pieces to contemporary everyday wear."
      />

      <section className="pb-20 sm:pb-28 lg:pb-32">
        <div className="container-brand">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {collections.map((collection, index) => (
              <Reveal
                key={collection.slug}
                delay={(index % 3) * 80}
                className={cn('h-full', index === 0 && 'sm:col-span-2')}
              >
                <Link
                  to={`/collections/${collection.slug}`}
                  className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden bg-beige p-7 lg:min-h-[380px]"
                >
                  <Media
                    src={collection.image}
                    alt={`${collection.name} collection`}
                    label={collection.name}
                    tone="dark"
                    fill
                    className="h-full w-full"
                    imageClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />

                  <span
                    className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/30 to-transparent"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <p className="text-[0.6rem] tracking-[0.25em] text-gold uppercase">
                      {collection.count} pieces
                    </p>

                    <h2 className="mt-3 font-display text-2xl text-cream lg:text-3xl">
                      {collection.name}
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                      {collection.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] text-cream uppercase">
                      Explore
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
        </div>
      </section>

      <Newsletter />
    </>
  )
}
