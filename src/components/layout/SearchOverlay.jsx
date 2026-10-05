import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { searchProducts } from '../../data/products'
import { collections } from '../../data/collections'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import useDialog from '../../hooks/useDialog'
import Media from '../common/Media'
import { formatPrice } from '../../lib/format'

const SUGGESTIONS = ['Agbada', 'Senator', 'Lace', 'Ankara', 'Kaftan', 'Bespoke']

/**
 * Full-width search panel with live, frontend-only results.
 * Submitting navigates to the shop page with the query applied.
 */
export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const panelRef = useRef(null)
  const navigate = useNavigate()

  useLockBodyScroll(true)
  useDialog({ open: true, onClose, containerRef: panelRef })

  // Move focus into the field as soon as the panel mounts.
  useEffect(() => {
    const id = window.setTimeout(() => inputRef.current?.focus(), 80)
    return () => window.clearTimeout(id)
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchProducts(query).slice(0, 5)
  }, [query])

  const total = useMemo(() => searchProducts(query).length, [query])

  const matchingCollections = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return []
    return collections.filter((c) => c.name.toLowerCase().includes(term)).slice(0, 3)
  }, [query])

  const submit = (event) => {
    event.preventDefault()
    if (!query.trim()) return
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    onClose()
  }

  return createPortal(
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-primary-dark/60 backdrop-blur-[2px] motion-safe:animate-fade-in"
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search products"
        tabIndex={-1}
        className="relative max-h-[88vh] overflow-y-auto bg-cream shadow-[0_20px_60px_rgba(38,3,15,0.25)] motion-safe:animate-fade-in"
      >
        <div className="container-brand py-6 sm:py-8">
          <form onSubmit={submit} role="search" className="flex items-center gap-4 border-b border-line pb-4">
            <Search size={20} strokeWidth={1.4} className="shrink-0 text-muted" aria-hidden="true" />
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <input
              ref={inputRef}
              id="site-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search agbada, senator, lace…"
              autoComplete="off"
              className="w-full bg-transparent font-display text-2xl text-ink outline-none placeholder:text-muted/50 sm:text-3xl"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="flex size-9 shrink-0 items-center justify-center text-muted transition-colors duration-300 hover:text-primary"
            >
              <X size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </form>

          {query.trim() ? (
            <div className="pt-6">
              <p className="eyebrow text-muted">
                {total} {total === 1 ? 'result' : 'results'} for “{query.trim()}”
              </p>

              {results.length > 0 ? (
                <ul className="mt-5 divide-y divide-line">
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-4 py-4 transition-colors duration-300"
                      >
                        <Media
                          src={product.images[0]}
                          alt={product.name}
                          label={product.name}
                          ratio="1 / 1"
                          className="w-14 shrink-0"
                          sizes="56px"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-display text-lg text-ink transition-colors duration-300 group-hover:text-primary">
                            {product.name}
                          </span>
                          <span className="block text-xs tracking-[0.15em] text-muted uppercase">
                            {product.category}
                          </span>
                        </span>
                        <span className="shrink-0 text-sm text-ink">{formatPrice(product.price)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-6 border border-line bg-beige/60 px-6 py-10 text-center">
                  <p className="font-display text-xl text-ink">No products found</p>
                  <p className="mt-2 text-sm text-muted">
                    We couldn&rsquo;t find anything matching your search.
                  </p>
                </div>
              )}

              {matchingCollections.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {matchingCollections.map((collection) => (
                    <Link
                      key={collection.slug}
                      to={`/collections/${collection.slug}`}
                      onClick={onClose}
                      className="border border-line px-4 py-2 text-[0.65rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                      {collection.name} collection
                    </Link>
                  ))}
                </div>
              ) : null}

              {total > results.length ? (
                <Link
                  to={`/shop?q=${encodeURIComponent(query.trim())}`}
                  onClick={onClose}
                  className="mt-6 inline-block border-b border-primary pb-1 text-[0.7rem] tracking-[0.2em] text-primary uppercase"
                >
                  View all {total} results
                </Link>
              ) : null}
            </div>
          ) : (
            <div className="pt-6">
              <p className="eyebrow text-muted">Popular searches</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setQuery(suggestion)}
                    className="border border-line px-4 py-2 text-[0.65rem] tracking-[0.18em] text-muted uppercase transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
