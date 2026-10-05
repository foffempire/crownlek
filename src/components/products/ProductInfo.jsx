import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Heart, Ruler, ShoppingBag, Truck } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice, cn } from '../../lib/format'
import Button from '../ui/Button'
import Stars from '../ui/Stars'
import QuantityStepper from '../ui/QuantityStepper'
import Accordion from '../ui/Accordion'

/** Purchase panel for the product detail page. */
export default function ProductInfo({ product }) {
  const { addItem, toggleWishlist, isWishlisted } = useCart()
  const [size, setSize] = useState(product.sizes[0])
  const [color, setColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const saved = isWishlisted(product.id)
  const discounted = product.compareAtPrice && product.compareAtPrice > product.price

  const handleAdd = () => {
    addItem(product, { quantity, size, color })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2200)
  }

  const details = [
    { id: 'details', question: 'Product details', answer: <ul className="flex flex-col gap-2">{product.details.map((d) => <li key={d} className="flex gap-3"><span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-gold" />{d}</li>)}</ul> },
    {
      id: 'fabric',
      question: 'Fabric & care',
      answer: (
        <div className="flex flex-col gap-3">
          <p>
            <span className="text-ink">Fabric:</span> {product.fabric}
          </p>
          <ul className="flex flex-col gap-2">
            {product.care.map((line) => (
              <li key={line} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-gold" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'delivery',
      question: 'Delivery & returns',
      answer: (
        <div className="flex flex-col gap-3">
          <p>{product.delivery}</p>
          <p>
            Free delivery on orders above ₦150,000. Ready-to-wear pieces can be returned within 14
            days; made-to-order and bespoke garments are altered free of charge until the fit is right.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div>
      <p className="eyebrow text-primary">{product.category}</p>

      <h1 className="mt-4 text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-[2.6rem]">
        {product.name}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Stars rating={product.rating} reviews={product.reviews} />
        <span className="text-xs tracking-[0.15em] text-muted uppercase">
          {product.gender} · {product.collection}
        </span>
      </div>

      <div className="mt-6 flex items-baseline gap-4">
        <p className="font-display text-3xl text-ink tabular-nums">{formatPrice(product.price)}</p>
        {discounted ? (
          <p className="text-base text-muted line-through tabular-nums">
            {formatPrice(product.compareAtPrice)}
          </p>
        ) : null}
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
        {product.description}
      </p>

      {/* Colour */}
      <fieldset className="mt-9">
        <legend className="eyebrow text-muted">
          Colour — <span className="text-ink">{color}</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {product.colors.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setColor(option)}
              aria-pressed={color === option}
              className={cn(
                'border px-4 py-2.5 text-[0.7rem] tracking-[0.12em] uppercase transition-colors duration-300',
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

      {/* Size */}
      <fieldset className="mt-8">
        <legend className="eyebrow flex w-full items-center justify-between gap-4 text-muted">
          Size — <span className="text-ink">{size}</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {product.sizes.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSize(option)}
              aria-pressed={size === option}
              className={cn(
                'min-w-14 border px-4 py-2.5 text-[0.7rem] tracking-[0.1em] uppercase transition-colors duration-300',
                size === option
                  ? 'border-primary bg-primary text-cream'
                  : 'border-line text-ink hover:border-primary hover:text-primary',
              )}
            >
              {option}
            </button>
          ))}
        </div>

        <Link
          to="/faq#sizes"
          className="mt-4 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.15em] text-muted uppercase transition-colors duration-300 hover:text-primary"
        >
          <Ruler size={13} strokeWidth={1.5} aria-hidden="true" />
          Size guide
        </Link>
      </fieldset>

      {/* Quantity + actions */}
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <QuantityStepper value={quantity} onChange={setQuantity} label={`Quantity for ${product.name}`} />

        <p
          className={cn(
            'inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-opacity duration-300',
            product.inStock ? 'text-muted' : 'text-primary',
          )}
        >
          <span
            aria-hidden="true"
            className={cn('size-1.5 rounded-full', product.inStock ? 'bg-gold' : 'bg-primary')}
          />
          {product.inStock ? 'In stock' : 'Made to order'}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button onClick={handleAdd} size="lg" className="flex-1">
          <ShoppingBag size={15} strokeWidth={1.5} aria-hidden="true" />
          {added ? 'Added to bag' : 'Add to bag'}
        </Button>

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={saved}
          className={cn(
            'flex h-14 items-center justify-center gap-3 border px-6 text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-colors duration-300',
            saved
              ? 'border-primary bg-primary/5 text-primary'
              : 'border-line text-ink hover:border-primary hover:text-primary',
          )}
        >
          <Heart size={15} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} aria-hidden="true" />
          {saved ? 'Saved' : 'Wishlist'}
        </button>
      </div>

      <p className="mt-5 flex items-center gap-2 text-xs text-muted">
        <Truck size={13} strokeWidth={1.5} aria-hidden="true" />
        Free delivery on orders above ₦150,000 · Worldwide shipping available
      </p>

      <div
        aria-live="polite"
        className={cn(
          'mt-4 flex items-center gap-2 text-xs text-primary transition-opacity duration-300',
          added ? 'opacity-100' : 'opacity-0',
        )}
      >
        <Check size={13} strokeWidth={2} aria-hidden="true" />
        {product.name} ({size}, {color}) added to your bag.
      </div>

      {/* Information */}
      <div className="mt-12 border-t border-line">
        <Accordion items={details} defaultOpenId="details" />
      </div>
    </div>
  )
}
