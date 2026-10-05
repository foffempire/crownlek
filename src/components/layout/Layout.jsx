import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import SearchOverlay from './SearchOverlay'
import CartDrawer from './CartDrawer'
import WhatsAppButton from '../common/WhatsAppButton'

/**
 * App shell: fixed navbar, slide-in overlays, routed page content and footer.
 * The navbar runs transparent only over the full-bleed home hero.
 */
export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()

  const transparent = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:bg-primary focus:px-5 focus:py-3 focus:text-[0.7rem] focus:tracking-[0.2em] focus:text-cream focus:uppercase"
      >
        Skip to content
      </a>

      <Navbar
        transparent={transparent}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {searchOpen ? <SearchOverlay onClose={() => setSearchOpen(false)} /> : null}
      <CartDrawer />

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
