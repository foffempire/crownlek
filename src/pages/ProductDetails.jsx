import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, PackageX } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import Seo from '../components/common/Seo'
import Breadcrumb from '../components/ui/Breadcrumb'
import Button from '../components/ui/Button'
import ProductGallery from '../components/products/ProductGallery'
import ProductInfo from '../components/products/ProductInfo'
import ProductGrid from '../components/products/ProductGrid'
import QuickViewModal from '../components/products/QuickViewModal'
import SectionTitle from '../components/ui/SectionTitle'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [quickView, setQuickView] = useState(null)

  if (!product) {
    return (
      <>
        <Seo title="Product not found" noIndex path={`/product/${slug}`} />

        <section className="bg-cream pt-32 pb-24 sm:pt-40">
          <div className="container-brand">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <PackageX size={34} strokeWidth={1.2} className="text-primary" aria-hidden="true" />

              <h1 className="mt-7 text-3xl text-ink sm:text-4xl">
                We couldn&rsquo;t find that piece
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                The product you&rsquo;re looking for may have been renamed, sold out or archived.
                Explore the current collection instead.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button to="/shop">Browse the shop</Button>
                <Button to="/collections" variant="outline">
                  View collections
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  const related = getRelatedProducts(product, 4)

  return (
    <>
      <Seo
        title={product.name}
        description={product.description.slice(0, 155)}
        path={`/product/${product.slug}`}
      />

      <section className="bg-cream pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-brand">
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: 'Shop', to: '/shop' },
              { label: product.category, to: `/shop?q=${encodeURIComponent(product.category)}` },
              { label: product.name },
            ]}
            className="mb-10"
          />

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <ProductGallery key={product.slug} product={product} />
            <ProductInfo key={`info-${product.slug}`} product={product} />
          </div>

          <div className="mt-12">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-primary"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Continue shopping
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-beige py-20 sm:py-24">
          <div className="container-brand">
            <SectionTitle
              eyebrow="You may also like"
              title="Complete the look"
              className="mb-14"
            />
            <ProductGrid products={related} columns={4} onQuickView={setQuickView} />
          </div>
        </section>
      ) : null}

      {quickView ? (
        <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
      ) : null}
    </>
  )
}
