/** Navigation model shared by the navbar, mobile drawer and footer. */

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export const footerShopLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'Lookbook', to: '/lookbook' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export const footerCareLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Shipping', to: '/faq#delivery' },
  { label: 'Returns', to: '/faq#returns' },
  { label: 'Size Guide', to: '/faq#sizes' },
]

export const footerLegalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

/** Sort options offered on the shop page. */
export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
]
