/** Small presentational helpers shared across the app. */

/** Join conditional class names. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/** Format a number as Nigerian Naira, e.g. 185000 -> "₦185,000". */
export function formatPrice(value) {
  return `₦${Number(value || 0).toLocaleString('en-NG', { maximumFractionDigits: 0 })}`
}

/** URL-safe slug from any string. */
export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Format an ISO-ish date for order/summary copy. */
export function formatDate(value) {
  return new Date(value).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Clamp a number between a minimum and maximum. */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/** Estimated delivery window shown in the cart, based on order value. */
export function estimatedDelivery(subtotal) {
  if (subtotal <= 0) return 0
  return subtotal >= 150000 ? 0 : 5500
}
