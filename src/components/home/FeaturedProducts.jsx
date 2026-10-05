import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProducts } from '../../data/products'
import ProductGrid from '../products/ProductGrid'
import QuickViewModal from '../products/QuickViewModal'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

/** Best-of-the-catalogue product rail with quick view support. */
export default function FeaturedProducts() {
  const [quickView, setQuickView] = useState(null)
  const products = getFeaturedProducts(8)

  return (
    <section className="bg-beige py-20 sm:py-28 lg:py-32">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Signature Pieces"
            title="Most requested"
            description="The pieces our clients return for — cut in limited runs and finished by hand."
          />

          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:text-primary"
          >
            Shop all
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <Reveal className="mt-14">
          <ProductGrid products={products} columns={4} onQuickView={setQuickView} />
        </Reveal>
      </div>

      {quickView ? (
        <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
      ) : null}
    </section>
  )
}
