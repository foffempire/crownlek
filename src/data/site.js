/**
 * Single source of truth for brand, contact and storefront configuration.
 * Change the values here and they update across the whole site.
 */

export const site = {
  name: 'Crownlek',
  legalName: 'Crownlek Couture',
  tagline: 'Tradition, Tailored for Today.',
  shortDescription:
    'Premium African native attire, hand-crafted in Nigeria for people who wear their heritage with pride.',
  announcement: 'Free delivery on orders above ₦150,000',
  announcementSecondary: 'Worldwide shipping available',

  contact: {
    phone: '+234 802 322 3713',
    phoneHref: 'tel:+2348023223713',
    whatsapp: '2348023223713',
    email: 'connect@crownlek.com',
    emailHref: 'mailto:connect@crownlek.com',
    addressLines: ['Crownlek Suite', '82 Rose Park LSDPC Medium Estate', 'Phase 4, Oba Ogunji Road, Ogba', 'Lagos, Nigeria'],
    hours: 'Mon – Sat, 9:00am – 6:00pm WAT',
  },

  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/crownlek/', handle: '@crownlek' },
    { label: 'Facebook', href: 'https://www.facebook.com/Crownlek', handle: '/crownlek' },
    { label: 'TikTok', href: 'http://tiktok.com/@crownlek64', handle: '@crownlek64' },
  ],

  instagramHandle: '@crownlek',

  /** Delivery thresholds used by the cart summary. */
  freeDeliveryThreshold: 150000,
  standardDeliveryFee: 5500,
}

export const whatsappLink = (message = "Hello Crownlek, I'd like to make an enquiry.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
