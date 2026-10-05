import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { priceBounds, products, searchProducts } from '../data/products'
import { sortOptions } from '../data/navigation'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import ProductGrid from '../components/products/ProductGrid'
import ProductFilters from '../components/products/ProductFilters'
import QuickViewModal from '../components/products/QuickViewModal'
import Drawer from '../components/ui/Drawer'
import Button from '../components/ui/Button'
import { cn } from '../lib/format'

const PAGE_SIZE = 12

const emptyFilters = {
  categories: [],
  collections: [],
  genders: [],
  sizes: [],
  colors: [],
  maxPrice: priceBounds[1],
}

const toggleValue = (list, value) =>
  list.includes(value) ? list.filter((item) => item !== value) : [...list, value]

/** Frontend-only catalogue: search, filter, sort and paginate. */
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''

  const [sort, setSort] = useState('featured')
  const [filters, setFilters] = useState(emptyFilters)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [quickView, setQuickView] = useState(null)

  const activeFilterCount =
    filters.categories.length +
    filters.collections.length +
    filters.genders.length +
    filters.sizes.length +
    filters.colors.length +
    (filters.maxPrice < priceBounds[1] ? 1 : 0)

  const setQuery = (value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set('q', value)
    else next.delete('q')
    setSearchParams(next, { replace: true })
    setVisibleCount(PAGE_SIZE)
  }

  const handleToggle = (group, value) => {
    setFilters((prev) => ({ ...prev, [group]: toggleValue(prev[group], value) }))
    setVisibleCount(PAGE_SIZE)
  }

  const handleSort = (value) => {
    setSort(value)
    setVisibleCount(PAGE_SIZE)
  }

  const handlePriceChange = (maxPrice) => {
    setFilters((prev) => ({ ...prev, maxPrice }))
    setVisibleCount(PAGE_SIZE)
  }

  const results = useMemo(() => {
    let list = searchProducts(query, products)

    if (filters.categories.length) {
      list = list.filter((p) => filters.categories.includes(p.category))
    }
    if (filters.collections.length) {
      list = list.filter((p) => filters.collections.includes(p.collection))
    }
    if (filters.genders.length) {
      list = list.filter((p) => filters.genders.includes(p.gender))
    }
    if (filters.sizes.length) {
      list = list.filter((p) => p.sizes.some((size) => filters.sizes.includes(size)))
    }
    if (filters.colors.length) {
      list = list.filter((p) => p.colors.some((color) => filters.colors.includes(color)))
    }
    list = list.filter((p) => p.price <= filters.maxPrice)

    const sorted = [...list]
    switch (sort) {
      case 'newest':
        sorted.sort((a, b) => Number(b.newArrival) - Number(a.newArrival) || b.id - a.id)
        break
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured) || a.id - b.id)
    }
    return sorted
  }, [query, filters, sort])

  const visible = results.slice(0, visibleCount)

  const clearFilters = () => {
    setFilters(emptyFilters)
    setVisibleCount(PAGE_SIZE)
  }

  const filterPanel = (
    <ProductFilters
      filters={filters}
      onToggle={handleToggle}
      onPriceChange={handlePriceChange}
      onClear={clearFilters}
      activeCount={activeFilterCount}
    />
  )

  return (
    <>
      <Seo
        title="Shop"
        description="Shop premium African native attire — agbada, senator sets, kaftans, lace ensembles and ankara prints, made to order in Lagos."
        path="/shop"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Shop' }]}
        eyebrow="Shop"
        title="The Collection"
        description="Discover our collection of African-inspired native attire — cut, embroidered and finished by hand."
      />

      <section className="pb-20 sm:pb-28 lg:pb-32">
        <div className="container-brand">
          {/* Toolbar */}
          <div className="flex flex-col gap-5 border-y border-line py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <label htmlFor="shop-search" className="sr-only">
                Search products
              </label>
              <Search
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
              />
              <input
                id="shop-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search agbada, lace, ankara…"
                autoComplete="off"
                className="h-12 w-full border border-line bg-white pr-10 pl-11 text-sm text-ink transition-colors duration-300 placeholder:text-muted/60 focus:border-primary"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-3 flex size-7 -translate-y-1/2 items-center justify-center text-muted transition-colors duration-300 hover:text-primary"
                >
                  <X size={15} strokeWidth={1.5} aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-4 lg:justify-end">
              <button
                type="button"
                onClick={() => setFiltersOpen(true)}
                className="inline-flex h-12 items-center gap-3 border border-line px-5 text-[0.7rem] tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:border-primary hover:text-primary lg:hidden"
              >
                <SlidersHorizontal size={15} strokeWidth={1.5} aria-hidden="true" />
                Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
              </button>

              <div className="flex items-center gap-3">
                <label
                  htmlFor="shop-sort"
                  className="hidden text-[0.7rem] tracking-[0.18em] text-muted uppercase sm:block"
                >
                  Sort
                </label>
                <select
                  id="shop-sort"
                  value={sort}
                  onChange={(event) => handleSort(event.target.value)}
                  className="h-12 border border-line bg-white px-4 pr-9 text-[0.75rem] text-ink transition-colors duration-300 focus:border-primary"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%236B6B6B' stroke-width='1.5'/%3E%3C/svg%3E\")",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.9rem center',
                    appearance: 'none',
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-5">
            <p className="text-sm text-muted">
              {query ? (
                <>
                  <span className="text-ink">{results.length}</span> result
                  {results.length === 1 ? '' : 's'} for &ldquo;{query}&rdquo;
                </>
              ) : (
                <>
                  Showing <span className="text-ink">{visible.length}</span> of{' '}
                  <span className="text-ink">{results.length}</span> pieces
                </>
              )}
            </p>

            {activeFilterCount > 0 ? (
              <button
                type="button"
                onClick={clearFilters}
                className="text-[0.7rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 hover:text-primary"
              >
                Clear filters ({activeFilterCount})
              </button>
            ) : null}
          </div>

          {/* Layout */}
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <aside className="hidden lg:block">
              <div className="sticky top-28">{filterPanel}</div>
            </aside>

            <div>
              <ProductGrid
                products={visible}
                columns={3}
                onQuickView={setQuickView}
                emptyTitle="No products found"
                emptyMessage={
                  query
                    ? `We couldn't find anything matching "${query}". Try a different search term or clear your filters.`
                    : "We couldn't find anything matching your filters. Try widening your selection."
                }
              />

              {visibleCount < results.length ? (
                <div className="mt-14 flex flex-col items-center gap-4">
                  <p className="text-xs tracking-[0.18em] text-muted uppercase">
                    You&rsquo;ve viewed {visible.length} of {results.length}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  >
                    Load more
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile filters */}
      <Drawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        title="Filters"
        width="sm:max-w-sm"
        footer={
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={clearFilters}>
              Clear
            </Button>
            <Button className="flex-1" onClick={() => setFiltersOpen(false)}>
              Show {results.length}
            </Button>
          </div>
        }
      >
        {filterPanel}
      </Drawer>

      {quickView ? (
        <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
      ) : null}

      <div className={cn('sr-only')} aria-live="polite">
        {results.length} products match the current filters.
      </div>
    </>
  )
}
