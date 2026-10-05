import { Link } from 'react-router-dom'
import { Eye, Heart, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatPrice, cn } from '../../lib/format'
import Media from '../common/Media'
import Badge from '../ui/Badge'
import Stars from '../ui/Stars'

/**
 * The catalogue card used on the home page, shop, collection and related
 * product grids. Hovering reveals quick view and add-to-bag actions.
 */
export default function ProductCard({ product, onQuickView, priority = false, className }) {
  const { addItem, toggleWishlist, isWishlisted } = useCart()
  const saved = isWishlisted(product.id)
  const discounted = product.compareAtPrice && product.compareAtPrice > product.price

  return (
    <article className={cn('group relative flex flex-col', className)}>
      <div className="relative overflow-hidden bg-beige">
        <Link
          to={`/product/${product.slug}`}
          className="block"
          aria-label={`View ${product.name}`}
          tabIndex={-1}
        >
          <Media
            src={product.images[0]}
            alt={product.name}
            label={product.name}
            ratio="3 / 4"
            priority={priority}
            imageClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </Link>

        {/* Status badges */}
        <div className="pointer-events-none absolute top-3 left-3 flex flex-col items-start gap-2">
          {product.newArrival ? <Badge variant="light">New</Badge> : null}
          {product.featured && !product.newArrival ? <Badge variant="light">Featured</Badge> : null}
          {discounted ? <Badge variant="gold">Sale</Badge> : null}
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={saved}
          className={cn(
            'absolute top-3 right-3 flex size-9 items-center justify-center bg-cream/90 backdrop-blur-sm transition-colors duration-300 hover:bg-primary hover:text-cream',
            saved ? 'text-primary' : 'text-ink',
          )}
        >
          <Heart size={15} strokeWidth={1.5} fill={saved ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>

        {/* Hover actions */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex flex-col gap-2 opacity-0 transition-opacity duration-400 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 max-lg:hidden">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="flex h-11 items-center justify-center gap-2 bg-primary text-[0.65rem] font-medium tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-burgundy"
          >
            <ShoppingBag size={14} strokeWidth={1.5} aria-hidden="true" />
            Add to bag
          </button>
          {onQuickView ? (
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="flex h-11 items-center justify-center gap-2 bg-cream/95 text-[0.65rem] font-medium tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-cream hover:text-primary"
            >
              <Eye size={14} strokeWidth={1.5} aria-hidden="true" />
              Quick view
            </button>
          ) : null}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[0.65rem] tracking-[0.2em] text-muted uppercase">{product.category}</p>

        <h3 className="mt-2 font-display text-xl leading-snug text-ink">
          <Link
            to={`/product/${product.slug}`}
            className="transition-colors duration-300 hover:text-primary"
          >
            {product.name}
          </Link>
        </h3>

        <Stars rating={product.rating} reviews={product.reviews} className="mt-2.5" />

        <div className="mt-3 flex items-baseline gap-3">
          <p className="text-sm font-medium text-ink tabular-nums">
            {formatPrice(product.price)}
          </p>
          {discounted ? (
            <p className="text-xs text-muted line-through tabular-nums">
              {formatPrice(product.compareAtPrice)}
            </p>
          ) : null}
        </div>

        {/* Touch devices get an always-visible action */}
        <div className="mt-4 flex gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => addItem(product)}
            className="flex h-10 flex-1 items-center justify-center gap-2 border border-primary text-[0.65rem] font-medium tracking-[0.18em] text-primary uppercase transition-colors duration-300 hover:bg-primary hover:text-cream"
          >
            <ShoppingBag size={13} strokeWidth={1.5} aria-hidden="true" />
            Add to bag
          </button>
          {onQuickView ? (
            <button
              type="button"
              onClick={() => onQuickView(product)}
              aria-label={`Quick view ${product.name}`}
              className="flex size-10 items-center justify-center border border-line text-ink transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Eye size={15} strokeWidth={1.5} aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
