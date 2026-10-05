import { Link } from 'react-router-dom'
import { ArrowRight, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/format'
import { site } from '../data/site'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Media from '../components/common/Media'
import Button from '../components/ui/Button'
import QuantityStepper from '../components/ui/QuantityStepper'

export default function Cart() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    delivery,
    total,
    remainingForFreeDelivery,
  } = useCart()

  if (items.length === 0) {
    return (
      <>
        <Seo title="Your Bag" description="Your Crownlek shopping bag." path="/cart" noIndex />

        <PageHeader
          breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Bag' }]}
          eyebrow="Your bag"
          title="Your bag is empty"
          description="Discover our latest African fashion pieces and start building your wardrobe."
        />

        <section className="pb-24 sm:pb-32">
          <div className="container-brand">
            <Button to="/shop" size="lg">
              Start shopping
            </Button>
          </div>
        </section>
      </>
    )
  }

  const progress = Math.min(100, Math.round((subtotal / site.freeDeliveryThreshold) * 100))

  return (
    <>
      <Seo title="Your Bag" description="Review the pieces in your Crownlek bag." path="/cart" noIndex />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Bag' }]}
        eyebrow="Your bag"
        title="Review your pieces"
        description={`${items.length} ${items.length === 1 ? 'line' : 'lines'} ready for checkout.`}
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-brand">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* Lines */}
            <div>
              <ul className="border-t border-line">
                {items.map((line) => (
                  <li key={line.key} className="flex gap-5 border-b border-line py-6 sm:gap-6">
                    <Link to={`/product/${line.slug}`} className="shrink-0" aria-label={`View ${line.name}`}>
                      <Media
                        src={line.image}
                        alt={line.name}
                        label={line.name}
                        ratio="3 / 4"
                        className="w-24 sm:w-28"
                        sizes="112px"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">
                            {line.category}
                          </p>
                          <Link
                            to={`/product/${line.slug}`}
                            className="mt-1.5 block font-display text-xl leading-snug text-ink transition-colors duration-300 hover:text-primary"
                          >
                            {line.name}
                          </Link>
                          <p className="mt-2 text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                            Size {line.selectedSize} · {line.selectedColor}
                          </p>
                          <p className="mt-1 text-sm text-muted tabular-nums">
                            {formatPrice(line.price)} each
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(line.key)}
                          aria-label={`Remove ${line.name} from bag`}
                          className="shrink-0 text-muted transition-colors duration-300 hover:text-primary"
                        >
                          <Trash2 size={16} strokeWidth={1.5} aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
                        <QuantityStepper
                          value={line.quantity}
                          onChange={(quantity) => updateQuantity(line.key, quantity)}
                          size="sm"
                          label={`Quantity for ${line.name}`}
                        />
                        <p className="font-display text-xl text-ink tabular-nums">
                          {formatPrice(line.price * line.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-primary"
                >
                  Continue shopping
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[0.7rem] tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-primary"
                >
                  Clear bag
                </button>
              </div>
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-line bg-beige/50 p-7">
                <h2 className="eyebrow text-ink">Order summary</h2>

                <dl className="mt-6 flex flex-col gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd className="text-ink tabular-nums">{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted">Estimated delivery</dt>
                    <dd className="text-ink tabular-nums">
                      {delivery === 0 ? 'Free' : formatPrice(delivery)}
                    </dd>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-line pt-4">
                    <dt className="text-[0.75rem] tracking-[0.18em] text-ink uppercase">Total</dt>
                    <dd className="font-display text-2xl text-ink tabular-nums">
                      {formatPrice(total)}
                    </dd>
                  </div>
                </dl>

                {remainingForFreeDelivery > 0 ? (
                  <div className="mt-6">
                    <p className="text-xs text-muted">
                      Add{' '}
                      <span className="text-ink">{formatPrice(remainingForFreeDelivery)}</span> more
                      for free delivery.
                    </p>
                    <div className="mt-3 h-0.5 w-full bg-line" role="presentation">
                      <div
                        className="h-full bg-gold transition-[width] duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="mt-6 border border-gold/40 bg-gold/10 px-4 py-3 text-xs text-[#7a6212]">
                    You&rsquo;ve qualified for free delivery.
                  </p>
                )}

                <Button to="/checkout" size="lg" className="mt-7 w-full">
                  Proceed to checkout
                </Button>

                <p className="mt-4 text-center text-[0.65rem] leading-relaxed text-muted">
                  Shipping and taxes are confirmed at checkout.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
