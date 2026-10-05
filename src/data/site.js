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
    phone: '+234 803 000 0000',
    phoneHref: 'tel:+2348030000000',
    whatsapp: '2348030000000',
    email: 'hello@crownlek.com',
    emailHref: 'mailto:hello@crownlek.com',
    addressLines: ['14 Adeola Odeku Street', 'Victoria Island, Lagos', 'Nigeria'],
    hours: 'Mon – Sat, 9:00am – 6:00pm WAT',
  },

  socials: [
    { label: 'Instagram', href: 'https://instagram.com', handle: '@crownlek' },
    { label: 'Facebook', href: 'https://facebook.com', handle: '/crownlek' },
    { label: 'TikTok', href: 'https://tiktok.com', handle: '@crownlek' },
  ],

  instagramHandle: '@crownlek',

  /** Delivery thresholds used by the cart summary. */
  freeDeliveryThreshold: 150000,
  standardDeliveryFee: 5500,
}

export const whatsappLink = (message = "Hello Crownlek, I'd like to make an enquiry.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
