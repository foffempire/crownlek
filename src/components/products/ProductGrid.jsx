import { PackageSearch } from 'lucide-react'
import ProductCard from './ProductCard'
import Button from '../ui/Button'
import { cn } from '../../lib/format'

const COLUMNS = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
}

/**
 * Responsive product grid with a polished empty state.
 * `columns` controls the widest breakpoint only — mobile is always two-up.
 */
export default function ProductGrid({
  products = [],
  columns = 4,
  onQuickView,
  emptyTitle = 'No products found',
  emptyMessage = "We couldn't find anything matching your search.",
  emptyAction = { label: 'View all products', to: '/shop' },
  className,
}) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center border border-line bg-beige/50 px-6 py-20 text-center">
        <PackageSearch size={30} strokeWidth={1.2} className="text-primary" aria-hidden="true" />
        <h3 className="mt-6 font-display text-2xl text-ink uppercase">{emptyTitle}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{emptyMessage}</p>
        {emptyAction ? (
          <Button to={emptyAction.to} className="mt-8">
            {emptyAction.label}
          </Button>
        ) : null}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'grid gap-x-5 gap-y-12 sm:gap-x-6 sm:gap-y-14',
        COLUMNS[columns] ?? COLUMNS[4],
        className,
      )}
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
          priority={index < 4}
        />
      ))}
    </div>
  )
}
