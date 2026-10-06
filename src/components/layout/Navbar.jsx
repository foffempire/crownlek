import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react'
import { mainNav } from '../../data/navigation'
import { site } from '../../data/site'
import { useCart } from '../../context/CartContext'
import { cn } from '../../lib/format'
import AnnouncementBar from './AnnouncementBar'
import logoMark from '../../assets/logo.png'
import logoMarkLight from '../../assets/logo-light.png'

/**
 * Fixed navbar. Transparent over the hero at the top of dark pages, then
 * settles into a cream bar once the page scrolls.
 */
export default function Navbar({ transparent = false, onOpenMenu, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false)
  const { itemCount, openDrawer, wishlist } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !transparent
  const onDark = transparent && !scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        solid ? 'border-b border-line bg-cream/95 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      {/* <AnnouncementBar collapsed={scrolled} /> */}

      <div className="container-brand relative flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Brand */}
        <Link
          to="/"
          aria-label={`${site.name} — home`}
          className={cn(
            'group flex shrink-0 items-center gap-3 transition-colors duration-500',
            onDark ? 'text-cream' : 'text-ink hover:text-primary',
          )}
        >
          {/* Brand mark — the light crown is only mounted where it can be
              needed (over the transparent hero) so other pages skip the file. */}
          <span
            className="relative block h-9 w-[47px] shrink-0 lg:h-10 lg:w-[52px]"
            aria-hidden="true"
          >
            <img
              src={logoMark}
              alt=""
              width="200"
              height="154"
              decoding="async"
              className={cn(
                'absolute inset-0 h-full w-full object-contain transition-opacity duration-500',
                onDark ? 'opacity-0' : 'opacity-100',
              )}
            />

            {transparent ? (
              <img
                src={logoMarkLight}
                alt=""
                width="200"
                height="154"
                decoding="async"
                className={cn(
                  'absolute inset-0 h-full w-full object-contain transition-opacity duration-500',
                  onDark ? 'opacity-100' : 'opacity-0',
                )}
              />
            ) : null}
          </span>

          <span className="font-display text-lg leading-none tracking-[0.22em] uppercase lg:text-xl">
            Crownlek
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:flex">
          <ul className="flex items-center gap-7 xl:gap-9">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative block py-2 text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300',
                      onDark
                        ? isActive
                          ? 'text-gold'
                          : 'text-cream/80 hover:text-gold'
                        : isActive
                          ? 'text-primary'
                          : 'text-ink/80 hover:text-primary',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300',
                          isActive ? 'w-full opacity-100' : 'w-0 opacity-0',
                        )}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Utilities */}
        <div className={cn('flex items-center gap-1 sm:gap-2', onDark ? 'text-cream' : 'text-ink')}>
          {/* <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search products"
            className={cn(
              'flex size-10 items-center justify-center transition-colors duration-300',
              onDark ? 'hover:text-gold' : 'hover:text-primary',
            )}
          >
            <Search size={18} strokeWidth={1.5} aria-hidden="true" />
          </button> */}

          {/* <Link
            to="/shop"
            aria-label={`Wishlist, ${wishlist.length} saved`}
            className={cn(
              'relative hidden size-10 items-center justify-center transition-colors duration-300 sm:flex',
              onDark ? 'hover:text-gold' : 'hover:text-primary',
            )}
          >
            <Heart size={18} strokeWidth={1.5} aria-hidden="true" />
            {wishlist.length > 0 ? (
              <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-gold" aria-hidden="true" />
            ) : null}
          </Link> */}

          {/* <button
            type="button"
            onClick={openDrawer}
            aria-label={`Open bag, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            className={cn(
              'relative flex size-10 items-center justify-center transition-colors duration-300',
              onDark ? 'hover:text-gold' : 'hover:text-primary',
            )}
          >
            <ShoppingBag size={18} strokeWidth={1.5} aria-hidden="true" />
            <span
              className={cn(
                'absolute -top-0.5 -right-0.5 flex min-w-5 items-center justify-center rounded-full px-1 text-[0.6rem] font-medium tabular-nums transition-colors duration-300',
                itemCount > 0
                  ? 'bg-primary text-cream'
                  : onDark
                    ? 'bg-cream/20 text-cream/70'
                    : 'bg-beige text-muted',
              )}
              aria-hidden="true"
            >
              {itemCount}
            </span>
          </button> */}

          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className={cn(
              'flex size-10 items-center justify-center transition-colors duration-300 lg:hidden',
              onDark ? 'hover:text-gold' : 'hover:text-primary',
            )}
          >
            <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
