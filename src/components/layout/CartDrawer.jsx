import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/format'
import { site } from '../../data/site'
import Drawer from '../ui/Drawer'
import Button from '../ui/Button'
import QuantityStepper from '../ui/QuantityStepper'
import Media from '../common/Media'

/** Right-hand bag panel that opens automatically when a product is added. */
export default function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateQuantity,
    subtotal,
    delivery,
    itemCount,
    remainingForFreeDelivery,
  } = useCart()

  const progress = Math.min(
    100,
    Math.round(((subtotal || 0) / site.freeDeliveryThreshold) * 100),
  )

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={closeDrawer}
      title={`Your bag${itemCount ? ` (${itemCount})` : ''}`}
      width="sm:max-w-md"
      footer={
        items.length > 0 ? (
          <div className="flex flex-col gap-4">
            <dl className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted">Subtotal</dt>
                <dd className="font-medium text-ink tabular-nums">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted">Estimated delivery</dt>
                <dd className="font-medium text-ink tabular-nums">
                  {delivery === 0 ? 'Free' : formatPrice(delivery)}
                </dd>
              </div>
            </dl>

            <div className="flex flex-col gap-3">
              <Button to="/cart" onClick={closeDrawer} variant="outline" className="w-full">
                View bag
              </Button>
              <Button to="/checkout" onClick={closeDrawer} className="w-full">
                Checkout
              </Button>
            </div>

            <p className="text-center text-[0.65rem] leading-relaxed text-muted">
              Shipping and taxes are confirmed at the next step.
            </p>
          </div>
        ) : null
      }
    >
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <span className="flex size-12 items-center justify-center rounded-full border border-line text-[0.65rem] tracking-[0.15em] text-muted">
            CL
          </span>
          <p className="mt-6 font-display text-2xl text-ink">Your bag is empty</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Discover our latest African fashion pieces and start building your wardrobe.
          </p>
          <Button to="/shop" onClick={closeDrawer} className="mt-8">
            Start shopping
          </Button>
        </div>
      ) : (
        <>
          {remainingForFreeDelivery > 0 ? (
            <div className="mb-6 border border-line bg-beige/70 p-4">
              <p className="text-xs text-ink">
                Add <strong className="font-medium">{formatPrice(remainingForFreeDelivery)}</strong>{' '}
                more for free delivery.
              </p>
              <div className="mt-3 h-0.5 w-full bg-line" role="presentation">
                <div
                  className="h-full bg-gold transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <p className="mb-6 border border-gold/40 bg-gold/10 px-4 py-3 text-xs text-[#7a6212]">
              You&rsquo;ve qualified for free delivery.
            </p>
          )}

          <ul className="flex flex-col divide-y divide-line">
            {items.map((line) => (
              <li key={line.key} className="flex gap-4 py-5 first:pt-0">
                <Link
                  to={`/product/${line.slug}`}
                  onClick={closeDrawer}
                  className="shrink-0"
                  aria-label={`View ${line.name}`}
                >
                  <Media
                    src={line.image}
                    alt={line.name}
                    label={line.name}
                    ratio="3 / 4"
                    className="w-20 sm:w-24"
                    sizes="96px"
                  />
                </Link>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <Link
                      to={`/product/${line.slug}`}
                      onClick={closeDrawer}
                      className="font-display text-lg leading-tight text-ink transition-colors duration-300 hover:text-primary"
                    >
                      {line.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeItem(line.key)}
                      aria-label={`Remove ${line.name} from bag`}
                      className="mt-1 shrink-0 text-muted transition-colors duration-300 hover:text-primary"
                    >
                      <Trash2 size={15} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  </div>

                  <p className="mt-1 text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                    {line.selectedSize} · {line.selectedColor}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                    <QuantityStepper
                      value={line.quantity}
                      onChange={(quantity) => updateQuantity(line.key, quantity)}
                      size="sm"
                      label={`Quantity for ${line.name}`}
                    />
                    <p className="text-sm font-medium text-ink tabular-nums">
                      {formatPrice(line.price * line.quantity)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/shop"
            onClick={closeDrawer}
            className="mt-6 inline-block text-[0.7rem] tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-primary"
          >
            Continue shopping
          </Link>
        </>
      )}
    </Drawer>
  )
}
