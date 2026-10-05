import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  priceBounds,
  productCategories,
  productCollections,
  productColors,
  productGenders,
  productSizes,
  products,
} from '../../data/products'
import { formatPrice, cn } from '../../lib/format'

const countBy = (predicate) => products.filter(predicate).length

/** Collapsible filter section with a checkbox list. */
function FilterGroup({ title, group, values, selected, onToggle, counts }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="border-b border-line py-5 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="eyebrow text-ink">{title}</span>
        <ChevronDown
          size={15}
          strokeWidth={1.5}
          aria-hidden="true"
          className={cn('text-muted transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      {open ? (
        <ul className="mt-4 flex flex-col gap-3">
          {values.map((value) => {
            const id = `filter-${group}-${String(value).toLowerCase().replace(/\s+/g, '-')}`
            const checked = selected.includes(value)

            return (
              <li key={value}>
                <label
                  htmlFor={id}
                  className="group flex cursor-pointer items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-primary"
                >
                  <span className="relative flex size-4 shrink-0 items-center justify-center">
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggle(group, value)}
                      className="peer absolute size-4 cursor-pointer appearance-none border border-line bg-white transition-colors duration-200 checked:border-primary checked:bg-primary hover:border-primary"
                    />
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="pointer-events-none relative size-2.5 text-cream opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
                    >
                      <path
                        d="M1.5 6.2l2.8 2.8L10.5 2.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="flex-1">
                    {value}
                    {counts ? (
                      <span className="ml-1.5 text-xs text-muted/70">({counts[value] ?? 0})</span>
                    ) : null}
                  </span>
                </label>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

/**
 * Catalogue filters shared by the desktop sidebar and the mobile drawer.
 * All state lives in the shop page; this component is purely presentational.
 */
export default function ProductFilters({ filters, onToggle, onPriceChange, onClear, activeCount = 0 }) {
  const categoryCounts = Object.fromEntries(
    productCategories.map((value) => [value, countBy((p) => p.category === value)]),
  )
  const collectionCounts = Object.fromEntries(
    productCollections.map((value) => [value, countBy((p) => p.collection === value)]),
  )
  const genderCounts = Object.fromEntries(
    productGenders.map((value) => [value, countBy((p) => p.gender === value)]),
  )

  return (
    <div>
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <p className="eyebrow text-ink">
          Filters{activeCount > 0 ? ` (${activeCount})` : ''}
        </p>
        {activeCount > 0 ? (
          <button
            type="button"
            onClick={onClear}
            className="text-[0.65rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 hover:text-primary"
          >
            Clear all
          </button>
        ) : null}
      </div>

      <FilterGroup
        title="Category"
        group="categories"
        values={productCategories}
        selected={filters.categories}
        onToggle={onToggle}
        counts={categoryCounts}
      />

      <FilterGroup
        title="Collection"
        group="collections"
        values={productCollections}
        selected={filters.collections}
        onToggle={onToggle}
        counts={collectionCounts}
      />

      <FilterGroup
        title="Gender"
        group="genders"
        values={productGenders}
        selected={filters.genders}
        onToggle={onToggle}
        counts={genderCounts}
      />

      <FilterGroup
        title="Size"
        group="sizes"
        values={productSizes}
        selected={filters.sizes}
        onToggle={onToggle}
      />

      <FilterGroup
        title="Colour"
        group="colors"
        values={productColors}
        selected={filters.colors}
        onToggle={onToggle}
      />

      <div className="py-5">
        <p className="eyebrow text-ink">Price</p>
        <div className="mt-5">
          <label htmlFor="price-range" className="sr-only">
            Maximum price
          </label>
          <input
            id="price-range"
            type="range"
            min={priceBounds[0]}
            max={priceBounds[1]}
            step={5000}
            value={filters.maxPrice}
            onChange={(event) => onPriceChange(Number(event.target.value))}
            className="h-0.5 w-full cursor-pointer appearance-none bg-line accent-[#5D092A]"
          />
          <div className="mt-3 flex items-center justify-between text-xs text-muted tabular-nums">
            <span>{formatPrice(priceBounds[0])}</span>
            <span className="font-medium text-ink">Up to {formatPrice(filters.maxPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
