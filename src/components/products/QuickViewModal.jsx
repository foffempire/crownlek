import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice, cn } from '../../lib/format'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import Stars from '../ui/Stars'
import QuantityStepper from '../ui/QuantityStepper'
import Media from '../common/Media'

/**
 * Lightweight product preview opened from a card's quick view action.
 * Parents mount this only while a product is selected, so the size, colour and
 * quantity selections start fresh for every product.
 */
export default function QuickViewModal({ product, onClose }) {
  const { addItem, toggleWishlist, isWishlisted } = useCart()
  const [size, setSize] = useState(product?.sizes?.[0] ?? null)
  const [color, setColor] = useState(product?.colors?.[0] ?? null)
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const saved = isWishlisted(product.id)

  return (
    <Modal open onClose={onClose} title={`Quick view — ${product.name}`} size="lg">
      <div className="grid gap-0 sm:grid-cols-2">
        <Media
          src={product.images[0]}
          alt={product.name}
          label={product.name}
          ratio="4 / 5"
          className="hidden sm:block"
          sizes="(min-width: 640px) 40vw, 100vw"
        />

        <div className="flex flex-col p-6 sm:p-8">
          <p className="eyebrow text-primary">{product.category}</p>

          <h2 className="mt-3 font-display text-2xl leading-tight text-ink sm:text-3xl">
            {product.name}
          </h2>

          <Stars rating={product.rating} reviews={product.reviews} className="mt-3" />

          <p className="mt-4 font-display text-2xl text-ink tabular-nums">
            {formatPrice(product.price)}
          </p>

          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">
            {product.description}
          </p>

          <fieldset className="mt-6">
            <legend className="eyebrow text-muted">Size</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  aria-pressed={size === option}
                  className={cn(
                    'min-w-11 border px-3 py-2 text-[0.7rem] tracking-[0.08em] uppercase transition-colors duration-300',
                    size === option
                      ? 'border-primary bg-primary text-cream'
                      : 'border-line text-ink hover:border-primary hover:text-primary',
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-5">
            <legend className="eyebrow text-muted">Colour</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.colors.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setColor(option)}
                  aria-pressed={color === option}
                  className={cn(
                    'border px-3 py-2 text-[0.7rem] tracking-[0.08em] uppercase transition-colors duration-300',
                    color === option
                      ? 'border-primary bg-primary text-cream'
                      : 'border-line text-ink hover:border-primary hover:text-primary',
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex items-center gap-3">
            <QuantityStepper value={quantity} onChange={setQuantity} size="sm" label="Quantity" />
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={saved}
              aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
              className={cn(
                'flex size-9 items-center justify-center border transition-colors duration-300',
                saved ? 'border-primary text-primary' : 'border-line text-ink hover:border-primary hover:text-primary',
              )}
            >
              <Heart size={15} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              onClick={() => {
                addItem(product, { quantity, size, color })
                onClose()
              }}
              className="w-full"
            >
              <ShoppingBag size={15} strokeWidth={1.5} aria-hidden="true" />
              Add to bag
            </Button>

            <Link
              to={`/product/${product.slug}`}
              onClick={onClose}
              className="text-center text-[0.7rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 hover:text-primary"
            >
              View full details
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  )
}
