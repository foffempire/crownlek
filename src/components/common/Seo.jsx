import { useEffect } from 'react'
import { site } from '../../data/site'

/**
 * Sets the document title and meta description per page so every route has
 * unique, meaningful metadata without a server.
 */
export default function Seo({ title, description, path, noIndex = false }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${site.name}`
      : `${site.name} | African Native Attire`
    document.title = fullTitle

    const setMeta = (attr, key, value) => {
      if (!value) return
      let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', value)
    }

    if (description) setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    if (description) setMeta('property', 'og:description', description)

    if (path) {
      let canonical = document.head.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', `${window.location.origin}${path}`)
    }

    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, path, noIndex])

  return null
}
