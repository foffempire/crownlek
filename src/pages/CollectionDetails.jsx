import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import { collections, getCollectionBySlug, getCollectionProducts } from '../data/collections'
import Seo from '../components/common/Seo'
import Breadcrumb from '../components/ui/Breadcrumb'
import Button from '../components/ui/Button'
import Media from '../components/common/Media'
import ProductGrid from '../components/products/ProductGrid'
import QuickViewModal from '../components/products/QuickViewModal'
import { useState } from 'react'

export default function CollectionDetails() {
  const { slug } = useParams()
  const collection = getCollectionBySlug(slug)
  const [quickView, setQuickView] = useState(null)

  if (!collection) {
    return (
      <>
        <Seo title="Collection not found" noIndex path={`/collections/${slug}`} />

        <section className="bg-cream pt-32 pb-24 sm:pt-40">
          <div className="container-brand">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <Compass size={34} strokeWidth={1.2} className="text-primary" aria-hidden="true" />

              <h1 className="mt-7 text-3xl text-ink sm:text-4xl">
                This collection doesn&rsquo;t exist
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                The collection may have been renamed or archived. Browse all collections to find
                what you&rsquo;re looking for.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button to="/collections">View all collections</Button>
                <Button to="/shop" variant="outline">
                  Shop everything
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const items = getCollectionProducts(collection)
  const others = collections.filter((item) => item.slug !== collection.slug).slice(0, 4)

  return (
    <>
      <Seo
        title={`${collection.name} Collection`}
        description={collection.description}
        path={`/collections/${collection.slug}`}
      />

      {/* Collection hero */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-primary-dark pt-32 pb-14 sm:min-h-[70vh] sm:pb-20">
        <Media
          src={collection.image}
          alt={`${collection.name} collection`}
          label={collection.name}
          tone="dark"
          priority
          fill
          className="h-full w-full"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-primary-dark/55" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/25 to-transparent"
          aria-hidden="true"
        />

        <div className="container-brand relative w-full">
          <Breadcrumb
            tone="dark"
            className="mb-8"
            items={[
              { label: 'Home', to: '/' },
              { label: 'Collections', to: '/collections' },
              { label: collection.name },
            ]}
          />

          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
            {collection.tagline}
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            {collection.name}
          </h1>

          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-cream/75 sm:text-base">
            {collection.intro}
          </p>

          <p className="mt-6 text-[0.65rem] tracking-[0.25em] text-gold uppercase">
            {items.length} pieces
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="container-brand">
          <ProductGrid
            products={items}
            columns={3}
            onQuickView={setQuickView}
            emptyTitle="This collection is being restocked"
            emptyMessage="New pieces are on the way. In the meantime, explore the rest of the catalogue."
            emptyAction={{ label: 'Shop everything', to: '/shop' }}
          />
        </div>
      </section>

      {/* Other collections */}
      <section className="bg-beige py-20 sm:py-24">
        <div className="container-brand">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Continue exploring</h2>
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:text-primary"
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

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to={`/collections/${item.slug}`} className="group block">
                  <Media
                    src={item.image}
                    alt={`${item.name} collection`}
                    label={item.name}
                    ratio="4 / 5"
                    className="w-full"
                    imageClassName="transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                  <p className="mt-4 font-display text-xl text-ink transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                  </p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                    {item.count} pieces
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {quickView ? (
        <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
      ) : null}
    </>
  )
}
