import { img, PHOTO } from '../lib/images'
import { products } from './products'

/**
 * Editorial collections. `count` is derived from the catalogue so the numbers
 * stay accurate when products change.
 */

export const collections = [
  {
    slug: 'traditional',
    name: 'Traditional',
    tagline: 'Heritage silhouettes',
    description:
      'African-inspired traditional designs rooted in ceremony, lineage and the craft of hand embroidery.',
    intro:
      'Our traditional line honours the shapes and symbols passed down through generations — the agbada, the iro and buba, the gele. Each piece is cut in our Lagos atelier and finished by hand, so the garments carry the same intent as the ones that came before them.',
    image: img(PHOTO.coupleTraditional, 1400),
    featured: true,
    match: (p) => p.collection === 'Traditional',
  },
  {
    slug: 'contemporary',
    name: 'Contemporary',
    tagline: 'Modern African fashion',
    description:
      'A modern interpretation of African fashion: cleaner lines, quieter embroidery and everyday wearability.',
    intro:
      'For the person who wants their heritage to move with their life. Slimmer cuts, restrained detailing and fabrics chosen for the way we actually dress now — to the office, to dinner, to the airport and back.',
    image: img(PHOTO.orangeWalk, 1400),
    featured: true,
    match: (p) => p.collection === 'Contemporary',
  },
  {
    slug: 'agbada',
    name: 'Agbada',
    tagline: 'The royal three-piece',
    description:
      'The flowing three-piece agbada, embroidered by hand in the detail and geometry of Nigerian regalia.',
    intro:
      'The agbada is the loudest quiet garment in African menswear. Ours are built on heavyweight brocade with generous drape, so the fabric carries the occasion for you. Available as a two-piece or full three-piece with sokoto.',
    image: img(PHOTO.heroAgbadaAlt, 1400),
    featured: true,
    match: (p) => p.category === 'Agbada',
  },
  {
    slug: 'senator',
    name: 'Senator',
    tagline: 'Tailored essentials',
    description:
      'Clean, tailored senator sets for work, travel and everything that follows.',
    intro:
      'Precision tailoring without the fuss. Mandarin collars, hidden plackets and trousers cut to hold their line from morning to evening.',
    image: img(PHOTO.senatorBlack, 1400),
    featured: true,
    match: (p) => p.category === 'Senator',
  },
  {
    slug: 'kaftans',
    name: 'Kaftans',
    tagline: 'Effortless drape',
    description:
      'Relaxed, breathable kaftans in linen, crepe and brocade — designed to be worn loose.',
    intro:
      'The easiest way into African native attire. Cut generously, finished with restrained embroidery and made in fabrics that breathe in the heat.',
    image: img(PHOTO.agbadaGold, 1400),
    match: (p) => p.category === 'Kaftan',
  },
  {
    slug: 'african-prints',
    name: 'African Prints',
    tagline: 'Ankara & wax print',
    description:
      'Vivid ankara, wax print and bespoke Crownlek motifs cut into shirts, dresses and sets.',
    intro:
      'Hand-picked Dutch wax and bespoke prints, laid out deliberately so the pattern falls where it should. Bold without shouting.',
    image: img(PHOTO.trioPrints, 1400),
    featured: true,
    match: (p) => p.category === 'African Prints',
  },
  {
    slug: 'womens-collection',
    name: "Women's Collection",
    tagline: 'Lace, wrapper & print',
    description:
      'Lace ensembles, aso-oke and wrappers made for celebrations, weddings and everyday elegance.',
    intro:
      'From hand-beaded Austrian lace to handwoven aso-oke, our womenswear is built around ceremony — and the confidence that comes with it.',
    image: img(PHOTO.laceWoman, 1400),
    featured: true,
    match: (p) => p.gender === 'Women',
  },
  {
    slug: 'mens-collection',
    name: "Men's Collection",
    tagline: 'Agbada, senator & kaftan',
    description:
      'Agbada, senator sets, kaftans and print shirts for men who dress with intention.',
    intro:
      'Structured shoulders, controlled drape and embroidery placed where it earns its keep.',
    image: img(PHOTO.nigerianMan, 1400),
    match: (p) => p.gender === 'Men',
  },
  {
    slug: 'kids',
    name: 'Kids',
    tagline: 'Little ones, big occasion',
    description:
      'Miniature native attire for the youngest members of the family, cut for comfort and play.',
    intro:
      'The same fabrics and finish as our adult pieces, re-cut for small frames — soft linings, elasticated waists and room to move.',
    image: img(PHOTO.fatherSon, 1400),
    match: (p) => p.gender === 'Kids',
  },
  {
    slug: 'bespoke',
    name: 'Bespoke',
    tagline: 'Designed specifically for you',
    description:
      'Custom-made native attire, from fabric selection to final fitting.',
    intro:
      'A consultation, a mood board, fabric from our library and two fittings. The result is a garment that exists once, for you.',
    image: img(PHOTO.sewingHands, 1400),
    featured: true,
    match: (p) => p.collection === 'Bespoke' || p.category === 'Bespoke',
  },
].map((collection) => ({
  ...collection,
  count: products.filter(collection.match).length,
}))

export const getCollectionBySlug = (slug) => collections.find((c) => c.slug === slug)

export const getFeaturedCollections = (limit = 4) =>
  collections.filter((c) => c.featured).slice(0, limit)

export const getCollectionProducts = (collection) =>
  collection ? products.filter(collection.match) : []
