import { img, PHOTO } from '../lib/images'

/**
 * Mock product catalogue. No backend is used — everything here is static data
 * that can later be replaced by an API response of the same shape.
 *
 * Image ids come from `PHOTO` so the same photo can be reused consistently.
 */

const MEN_SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL']
const WOMEN_SIZES = ['UK 8', 'UK 10', 'UK 12', 'UK 14', 'UK 16', 'UK 18']
const KIDS_SIZES = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y']
const ONE_SIZE = ['One Size']

const CARE_GENTLE = [
  'Dry clean recommended to preserve the embroidery',
  'Iron on the reverse at a low temperature',
  'Store on a padded hanger away from direct sunlight',
]

const CARE_FABRIC = [
  'Hand wash cold with a mild detergent',
  'Do not bleach or tumble dry',
  'Iron on the reverse while slightly damp',
]

const DELIVERY_NOTE =
  'Made to order in 5–7 working days. Express tailoring available on request.'

let nextId = 1

/**
 * Build a product record with sensible defaults so the catalogue below stays
 * readable while every product still exposes the full shape.
 */
function product(input) {
  const {
    name,
    price,
    category,
    collection,
    gender,
    images,
    sizes = MEN_SIZES,
    colors = ['Burgundy', 'Black'],
    description,
    fabric,
    care = CARE_GENTLE,
    details = [],
    tags = [],
    featured = false,
    newArrival = false,
    rating = 4.8,
    reviews = 24,
    compareAtPrice = null,
  } = input

  return {
    id: nextId++,
    name,
    slug: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, ''),
    price,
    compareAtPrice,
    category,
    collection,
    gender,
    images: images.map((id) => img(id)),
    sizes,
    colors,
    description,
    fabric,
    care,
    details:
      details.length > 0
        ? details
        : [
            'Hand-finished by our Lagos atelier',
            'Reinforced seams for lasting wear',
            'Cut for a flattering, structured silhouette',
          ],
    delivery: DELIVERY_NOTE,
    tags,
    featured,
    newArrival,
    rating,
    reviews,
    inStock: true,
  }
}

export const products = [
  /* ----------------------------- Agbada ----------------------------- */
  product({
    name: 'Royal Burgundy Agbada',
    price: 185000,
    category: 'Agbada',
    collection: 'Traditional',
    gender: 'Men',
    images: [PHOTO.heroAgbadaAlt, PHOTO.heroAgbada, PHOTO.agbadaEmerald],
    colors: ['Burgundy', 'Black', 'Ivory'],
    description:
      'A three-piece agbada cut from heavyweight guinea brocade and finished with dense tonal embroidery across the chest and neckline. The set includes the flowing outer agbada, a matching buba and drawstring sokoto.',
    fabric: 'Premium guinea brocade with hand-guided embroidery',
    details: [
      'Three-piece set: agbada, buba and sokoto',
      'Hand-guided chest and neckline embroidery',
      'Wide sleeves with structured drape',
      'Drawstring waist for an adjustable fit',
    ],
    tags: ['agbada', 'traditional', 'burgundy', 'ceremony', 'men'],
    featured: true,
    newArrival: true,
    rating: 4.9,
    reviews: 68,
  }),
  product({
    name: 'Heritage Three-Piece Agbada',
    price: 240000,
    category: 'Agbada',
    collection: 'Traditional',
    gender: 'Men',
    images: [PHOTO.nigerianMan, PHOTO.heroAgbada, PHOTO.menPosing],
    colors: ['Navy', 'Black', 'Ivory'],
    description:
      'Our most detailed agbada to date, with a full embroidered panel that echoes Yoruba royal motifs. Cut with a generous drape so the fabric moves beautifully as you walk.',
    fabric: 'Heavyweight cashmere brocade, silk-thread embroidery',
    details: [
      'Full front embroidered panel',
      'Includes buba and sokoto',
      'Weighted hem for a sculpted drape',
    ],
    tags: ['agbada', 'heritage', 'royal', 'men', 'traditional'],
    featured: true,
    rating: 4.9,
    reviews: 41,
  }),
  product({
    name: 'Ivory Ceremonial Agbada',
    price: 265000,
    category: 'Agbada',
    collection: 'Occasion',
    gender: 'Men',
    images: [PHOTO.agbadaWhite, PHOTO.coupleTraditional, PHOTO.agbadaGold],
    sizes: MEN_SIZES,
    colors: ['Ivory', 'Cream', 'Gold'],
    description:
      'An ivory agbada designed for weddings and milestone celebrations. Tonal cream embroidery keeps the look refined while the beadwork catches the light in photographs.',
    fabric: 'Italian brocade with pearl and crystal beadwork',
    details: ['Hand-applied pearl beading', 'Silk-lined buba', 'Includes matching fila'],
    tags: ['agbada', 'wedding', 'ivory', 'occasion', 'men'],
    featured: true,
    rating: 5.0,
    reviews: 33,
    compareAtPrice: 295000,
  }),
  product({
    name: 'Atiku Embroidered Agbada',
    price: 198000,
    category: 'Agbada',
    collection: 'Contemporary',
    gender: 'Men',
    images: [PHOTO.agbadaBlue, PHOTO.heroAgbadaAlt, PHOTO.menGroup],
    colors: ['Navy', 'Charcoal', 'Burgundy'],
    description:
      'A pared-back agbada for the modern wardrobe, with a slimmer through-body cut and restrained embroidery at the placket only.',
    fabric: 'Brushed cashmere blend',
    details: ['Slimmer contemporary cut', 'Minimal placket embroidery', 'Side seam pockets'],
    tags: ['agbada', 'contemporary', 'navy', 'men'],
    newArrival: true,
    rating: 4.7,
    reviews: 26,
  }),
  product({
    name: 'Emerald Royal Agbada',
    price: 210000,
    category: 'Agbada',
    collection: 'Traditional',
    gender: 'Men',
    images: [PHOTO.agbadaEmerald, PHOTO.dashikiMan, PHOTO.filaMan],
    colors: ['Emerald', 'Burgundy', 'Black'],
    description:
      'Deep emerald brocade with gold-toned embroidery inspired by the regalia of southern Nigerian chiefs.',
    fabric: 'Jacquard brocade with metallic embroidery',
    details: ['Gold-toned thread embroidery', 'Structured shoulders', 'Three-piece set'],
    tags: ['agbada', 'emerald', 'traditional', 'men'],
    rating: 4.8,
    reviews: 19,
  }),

  /* ----------------------------- Senator ---------------------------- */
  product({
    name: 'Classic Senator Set',
    price: 120000,
    category: 'Senator',
    collection: 'Traditional',
    gender: 'Men',
    images: [PHOTO.senatorBlack, PHOTO.senatorCouple, PHOTO.nigerianMan],
    colors: ['Black', 'Navy', 'Charcoal'],
    description:
      'The essential senator: a clean two-piece with a mandarin collar, subtle chest embroidery and a straight-leg trouser.',
    fabric: 'Italian wool blend',
    details: ['Mandarin collar', 'Chest and cuff embroidery', 'Straight-leg trouser'],
    tags: ['senator', 'two-piece', 'classic', 'men'],
    featured: true,
    rating: 4.8,
    reviews: 87,
  }),
  product({
    name: 'Charcoal Senator Two-Piece',
    price: 135000,
    category: 'Senator',
    collection: 'Contemporary',
    gender: 'Men',
    images: [PHOTO.senatorBlack, PHOTO.nigerianMan, PHOTO.suitDetail],
    colors: ['Charcoal', 'Grey', 'Black'],
    description:
      'A minimalist senator in brushed charcoal, designed for the office and evening events alike.',
    fabric: 'Brushed wool-cashmere blend',
    details: ['Hidden placket', 'Tapered trouser', 'Vented hem'],
    tags: ['senator', 'charcoal', 'contemporary', 'men'],
    rating: 4.7,
    reviews: 32,
  }),
  product({
    name: 'Midnight Senator with Kaftan',
    price: 148000,
    category: 'Senator',
    collection: 'Contemporary',
    gender: 'Men',
    images: [PHOTO.nigerianMan, PHOTO.senatorBlack, PHOTO.senatorCouple],
    colors: ['Midnight', 'Black'],
    description:
      'A layered senator set pairing a tailored kaftan with a lightweight overshirt — ideal for travelling between climates.',
    fabric: 'Wool blend with a lightweight linen overshirt',
    details: ['Two-piece layered set', 'Breathable linen overshirt', 'Concealed zip'],
    tags: ['senator', 'kaftan', 'layered', 'men'],
    newArrival: true,
    rating: 4.6,
    reviews: 14,
  }),
  product({
    name: 'Platinum Senator Set',
    price: 156000,
    category: 'Senator',
    collection: 'Occasion',
    gender: 'Men',
    images: [PHOTO.senatorCouple, PHOTO.nigerianMan, PHOTO.senatorBlack],
    colors: ['Silver', 'Platinum', 'Ivory'],
    description:
      'A ceremonial senator set in a light-reflecting platinum weave, finished with silver thread embroidery along the collar.',
    fabric: 'Metallic weave with silver thread embroidery',
    details: ['Silver thread collar embroidery', 'Fully lined trouser', 'Includes matching cap'],
    tags: ['senator', 'platinum', 'occasion', 'men'],
    rating: 4.8,
    reviews: 22,
  }),

  /* ------------------------------ Kaftan ---------------------------- */
  product({
    name: 'Burgundy Embroidered Kaftan',
    price: 145000,
    category: 'Kaftan',
    collection: 'Traditional',
    gender: 'Men',
    images: [PHOTO.agbadaGold, PHOTO.agbadaBlue, PHOTO.heroAgbada],
    colors: ['Burgundy', 'Black', 'Navy'],
    description:
      'A relaxed kaftan with an elongated neckline placket and intricate thread work — an effortless choice for Friday prayers and family gatherings.',
    fabric: 'Linen-cotton blend with silk thread embroidery',
    details: ['Elongated placket', 'Side vents', 'Relaxed fit'],
    tags: ['kaftan', 'burgundy', 'traditional', 'men'],
    featured: true,
    rating: 4.9,
    reviews: 51,
  }),
  product({
    name: 'Sandstone Linen Kaftan',
    price: 128000,
    category: 'Kaftan',
    collection: 'Contemporary',
    gender: 'Men',
    images: [PHOTO.filaMan, PHOTO.dashikiMan, PHOTO.menPosing],
    colors: ['Sand', 'Stone', 'Ivory'],
    description:
      'Washed linen kaftan in warm sandstone with a soft collar and tonal stitching. Designed to be worn loose.',
    fabric: 'Washed European linen',
    details: ['Soft stand collar', 'Tonal stitch detailing', 'Naturally breathable'],
    tags: ['kaftan', 'linen', 'sandstone', 'contemporary', 'men'],
    rating: 4.7,
    reviews: 38,
  }),
  product({
    name: 'Golden Hour Kaftan',
    price: 118000,
    category: 'Kaftan',
    collection: 'Contemporary',
    gender: 'Women',
    images: [PHOTO.yellowPose, PHOTO.orangeWalk, PHOTO.greenHatWoman],
    sizes: WOMEN_SIZES,
    colors: ['Gold', 'Amber', 'Sand'],
    description:
      'A floor-skimming kaftan in golden amber with a fluid drape and slit sleeves — made for sunset occasions.',
    fabric: 'Fluid crepe with satin binding',
    details: ['Slit sleeves', 'Floor-skimming length', 'Satin-bound neckline'],
    tags: ['kaftan', 'gold', 'women', 'contemporary'],
    newArrival: true,
    rating: 4.8,
    reviews: 27,
  }),

  /* -------------------------- African prints ------------------------ */
  product({
    name: 'African Print Shirt',
    price: 78000,
    category: 'African Prints',
    collection: 'Contemporary',
    gender: 'Men',
    images: [PHOTO.dashikiMan, PHOTO.trioPrints, PHOTO.patternWoman],
    colors: ['Multi', 'Indigo', 'Ochre'],
    description:
      'A short-sleeve shirt cut from hand-picked Dutch wax ankara, finished with mother-of-pearl buttons.',
    fabric: 'Dutch wax ankara cotton',
    details: ['Mother-of-pearl buttons', 'Camp collar', 'Hand-picked print placement'],
    tags: ['ankara', 'print', 'shirt', 'men', 'casual'],
    featured: true,
    rating: 4.8,
    reviews: 94,
  }),
  product({
    name: 'Ankara Print Shirt',
    price: 72000,
    category: 'African Prints',
    collection: 'Contemporary',
    gender: 'Men',
    images: [PHOTO.trioPrints, PHOTO.twoWomen, PHOTO.dashikiMan],
    colors: ['Multi', 'Green', 'Rust'],
    description:
      'Our relaxed-fit ankara shirt with a chest patch pocket and a soft, broken-in finish from the first wear.',
    fabric: 'Wax-resist printed cotton',
    details: ['Relaxed fit', 'Chest patch pocket', 'Pre-washed for softness'],
    tags: ['ankara', 'print', 'shirt', 'men'],
    rating: 4.6,
    reviews: 61,
  }),
  product({
    name: 'Heritage Print Two-Piece',
    price: 165000,
    category: 'African Prints',
    collection: 'Traditional',
    gender: 'Men',
    images: [PHOTO.coupleTraditional, PHOTO.agbadaEmerald, PHOTO.heroAgbada],
    colors: ['Multi', 'Burgundy', 'Navy'],
    description:
      'A matching shirt-and-trouser set in a bold heritage print, tailored with the same precision as our brocade pieces.',
    fabric: 'Heavyweight wax print cotton',
    details: ['Matching shirt and trouser', 'Tailored through the waist', 'Reinforced side seams'],
    tags: ['print', 'two-piece', 'heritage', 'men'],
    rating: 4.7,
    reviews: 30,
  }),
  product({
    name: 'Ankara Wrap Dress',
    price: 98000,
    category: 'African Prints',
    collection: 'Contemporary',
    gender: 'Women',
    images: [PHOTO.blueDressWoman, PHOTO.floralWoman, PHOTO.patternWoman],
    sizes: WOMEN_SIZES,
    colors: ['Multi', 'Blue', 'Green'],
    description:
      'A true wrap dress with a self-tie waist and a full skirt that moves with you. Cut from vivid wax print cotton.',
    fabric: 'Wax print cotton with a soft hand feel',
    details: ['Self-tie wrap waist', 'Full circle skirt', 'Hidden side pockets'],
    tags: ['ankara', 'wrap dress', 'women', 'print'],
    featured: true,
    rating: 4.9,
    reviews: 112,
  }),
  product({
    name: 'Royal Print Maxi Dress',
    price: 112000,
    category: 'African Prints',
    collection: 'Contemporary',
    gender: 'Women',
    images: [PHOTO.printWoman, PHOTO.hatWoman, PHOTO.seatedWoman],
    sizes: WOMEN_SIZES,
    colors: ['Multi', 'Emerald', 'Wine'],
    description:
      'An ankle-length maxi with a gathered bodice and a dramatic sleeve, printed in a bespoke Crownlek motif.',
    fabric: 'Bespoke printed cotton blend',
    details: ['Gathered bodice', 'Dramatic balloon sleeve', 'Fully lined skirt'],
    tags: ['maxi dress', 'print', 'women', 'royal'],
    newArrival: true,
    rating: 4.8,
    reviews: 45,
  }),

  /* ------------------------------ Lace ------------------------------ */
  product({
    name: 'Premium Lace Ensemble',
    price: 320000,
    category: 'Lace',
    collection: 'Occasion',
    gender: 'Women',
    images: [PHOTO.laceWoman, PHOTO.beadedWoman, PHOTO.printWoman],
    sizes: WOMEN_SIZES,
    colors: ['Burgundy', 'Gold', 'Ivory'],
    description:
      'Austrian lace with hand-beaded pearl detailing across the bodice, paired with a matching wrapper and gele.',
    fabric: 'Austrian lace with pearl beadwork',
    details: ['Hand-beaded bodice', 'Includes wrapper and gele', 'Fully lined'],
    tags: ['lace', 'aso ebi', 'occasion', 'women', 'wedding'],
    featured: true,
    rating: 5.0,
    reviews: 57,
    compareAtPrice: 355000,
  }),
  product({
    name: 'Burgundy Lace Gown',
    price: 345000,
    category: 'Lace',
    collection: 'Occasion',
    gender: 'Women',
    images: [PHOTO.laceWoman, PHOTO.beadedWoman, PHOTO.orangeWalk],
    sizes: WOMEN_SIZES,
    colors: ['Burgundy', 'Wine', 'Black'],
    description:
      'A floor-length burgundy lace gown with a structured bodice and a sweeping train — our most requested bridal-party piece.',
    fabric: 'Corded French lace with satin lining',
    details: ['Structured boned bodice', 'Sweeping train', 'Concealed back zip'],
    tags: ['lace', 'gown', 'wedding', 'women', 'burgundy'],
    rating: 5.0,
    reviews: 29,
  }),
  product({
    name: 'Ivory Lace Two-Piece',
    price: 285000,
    category: 'Lace',
    collection: 'Occasion',
    gender: 'Women',
    images: [PHOTO.beadedWoman, PHOTO.laceWoman, PHOTO.groupWomen],
    sizes: WOMEN_SIZES,
    colors: ['Ivory', 'Cream', 'Champagne'],
    description:
      'A softly structured lace blouse and skirt set in ivory, finished with a scalloped hem and covered buttons.',
    fabric: 'Scalloped edge lace with silk lining',
    details: ['Scalloped lace hem', 'Covered buttons', 'Detachable belt'],
    tags: ['lace', 'ivory', 'two-piece', 'women'],
    rating: 4.9,
    reviews: 24,
  }),

  /* --------------------------- Traditional -------------------------- */
  product({
    name: 'Traditional Wrapper Set',
    price: 130000,
    category: 'Traditional',
    collection: 'Traditional',
    gender: 'Women',
    images: [PHOTO.wrapperWoman, PHOTO.traditionalWoman, PHOTO.groupWomen],
    sizes: WOMEN_SIZES,
    colors: ['Multi', 'Burgundy', 'Indigo'],
    description:
      'A classic iro and buba set in handwoven fabric, with a tailored blouse and a wrapper that ties to your preferred height.',
    fabric: 'Handwoven aso-oke with metallic thread',
    details: ['Three-piece iro and buba', 'Handwoven on a traditional loom', 'Adjustable wrapper'],
    tags: ['wrapper', 'iro and buba', 'traditional', 'women'],
    featured: true,
    rating: 4.8,
    reviews: 44,
  }),
  product({
    name: 'Gele & Wrapper Ceremonial Set',
    price: 175000,
    category: 'Traditional',
    collection: 'Occasion',
    gender: 'Women',
    images: [PHOTO.wrapperWoman, PHOTO.groupWomen, PHOTO.laceWoman],
    sizes: ONE_SIZE,
    colors: ['Burgundy', 'Gold', 'Emerald'],
    description:
      'A ready-to-tie ceremonial set: stiffened gele, handwoven wrapper and a matching beaded blouse.',
    fabric: 'Handwoven aso-oke, stiffened gele fabric',
    details: ['Pre-stiffened gele', 'Beaded blouse', 'Matching wrapper'],
    tags: ['gele', 'wrapper', 'ceremony', 'women'],
    rating: 4.9,
    reviews: 36,
  }),
  product({
    name: 'Emerald Aso-Oke Ensemble',
    price: 285000,
    category: 'Traditional',
    collection: 'Occasion',
    gender: 'Women',
    images: [PHOTO.traditionalWoman, PHOTO.beadedWoman, PHOTO.groupWomen],
    sizes: WOMEN_SIZES,
    colors: ['Emerald', 'Green', 'Gold'],
    description:
      'Handwoven emerald aso-oke with a coral-beaded neckline, commissioned for engagements and traditional weddings.',
    fabric: 'Handwoven aso-oke with coral beadwork',
    details: ['Coral bead neckline', 'Handwoven in Iseyin', 'Three-piece set'],
    tags: ['aso-oke', 'emerald', 'bridal', 'women'],
    newArrival: true,
    rating: 5.0,
    reviews: 18,
  }),

  /* ------------------------------- Kids ----------------------------- */
  product({
    name: 'Little Chief Agbada Set',
    price: 68000,
    category: 'Kids',
    collection: 'Traditional',
    gender: 'Kids',
    images: [PHOTO.fatherSon, PHOTO.coupleTraditional, PHOTO.heroAgbada],
    sizes: KIDS_SIZES,
    colors: ['Burgundy', 'Ivory', 'Navy'],
    description:
      'A miniature agbada set for the youngest member of the family, cut from the same brocade as our adult pieces.',
    fabric: 'Soft-lined brocade, gentle on sensitive skin',
    details: ['Fully lined for comfort', 'Elasticated sokoto waist', 'Machine washable lining'],
    tags: ['kids', 'agbada', 'family', 'traditional'],
    featured: true,
    rating: 4.9,
    reviews: 26,
  }),
  product({
    name: 'Mini Ankara Set',
    price: 52000,
    category: 'Kids',
    collection: 'African Prints',
    gender: 'Kids',
    images: [PHOTO.fatherSon, PHOTO.trioPrints, PHOTO.patternWoman],
    sizes: KIDS_SIZES,
    colors: ['Multi', 'Yellow', 'Blue'],
    description:
      'A two-piece ankara set built for play — reinforced knees, soft seams and a print that hides everything.',
    fabric: 'Brushed cotton wax print',
    details: ['Reinforced knees', 'Soft flat seams', 'Elasticated waistband'],
    tags: ['kids', 'ankara', 'set', 'prints'],
    rating: 4.7,
    reviews: 33,
  }),

  /* --------------------------- Accessories -------------------------- */
  product({
    name: 'Embroidered Fila & Cap Set',
    price: 35000,
    category: 'Accessories',
    collection: 'Traditional',
    gender: 'Men',
    images: [PHOTO.filaMan, PHOTO.heroAgbada, PHOTO.nigerianMan],
    sizes: ONE_SIZE,
    colors: ['Burgundy', 'Black', 'Gold'],
    description:
      'A hand-embroidered fila to complete your agbada, with a matching inner cap for a secure fit.',
    fabric: 'Handwoven cotton with silk embroidery',
    details: ['Hand-embroidered crown', 'Matching inner cap', 'Adjustable inner band'],
    tags: ['fila', 'cap', 'accessories', 'men'],
    rating: 4.8,
    reviews: 47,
  }),
  product({
    name: 'Handwoven Aso-Oke Fabric',
    price: 45000,
    category: 'Fabric',
    collection: 'Bespoke',
    gender: 'Unisex',
    images: [PHOTO.fabricPattern, PHOTO.fabricStack, PHOTO.fabricMarket],
    sizes: ['6 yards', '12 yards'],
    colors: ['Burgundy', 'Gold', 'Emerald'],
    description:
      'Six yards of handwoven aso-oke, sold by the piece for those commissioning their own design.',
    fabric: 'Handwoven cotton aso-oke',
    details: ['6 yards per piece', 'Handwoven in Iseyin', 'Metallic thread detail'],
    tags: ['fabric', 'aso-oke', 'bespoke', 'unisex'],
    rating: 4.9,
    reviews: 21,
  }),
  product({
    name: 'Kente Heritage Stole',
    price: 42000,
    category: 'Accessories',
    collection: 'Traditional',
    gender: 'Unisex',
    images: [PHOTO.textiles, PHOTO.fabricStack, PHOTO.fabricDisplay],
    sizes: ONE_SIZE,
    colors: ['Multi', 'Gold', 'Green'],
    description:
      'A handwoven kente stole that adds heritage to everything from a senator set to a plain shirt.',
    fabric: 'Handwoven kente cotton',
    details: ['Handwoven strip construction', 'Fringed ends', 'One size'],
    tags: ['kente', 'stole', 'accessories', 'unisex'],
    rating: 4.7,
    reviews: 17,
  }),
  product({
    name: 'Bespoke Commission',
    price: 350000,
    category: 'Bespoke',
    collection: 'Bespoke',
    gender: 'Unisex',
    images: [PHOTO.sewingHands, PHOTO.sewingWoman, PHOTO.sewingGreen],
    sizes: ONE_SIZE,
    colors: ['Burgundy', 'Ivory', 'Black'],
    description:
      'Commission an entirely original piece. We start with a consultation, agree the fabric and silhouette, then tailor to your measurements across two fittings.',
    fabric: 'Your choice from our fabric library',
    details: [
      'Personal consultation and mood board',
      'Two fittings included',
      'Made to your exact measurements',
      '6–8 week lead time',
    ],
    tags: ['bespoke', 'custom', 'commission', 'tailoring'],
    featured: true,
    rating: 5.0,
    reviews: 12,
  }),
]

/* --------------------------- Derived helpers --------------------------- */

export const productCategories = [...new Set(products.map((p) => p.category))].sort()
export const productCollections = [...new Set(products.map((p) => p.collection))].sort()
export const productGenders = [...new Set(products.map((p) => p.gender))].sort()
export const productColors = [...new Set(products.flatMap((p) => p.colors))].sort()
export const productSizes = [...new Set(products.flatMap((p) => p.sizes))]
export const priceBounds = [
  Math.min(...products.map((p) => p.price)),
  Math.max(...products.map((p) => p.price)),
]

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)

export const getFeaturedProducts = (limit = 8) =>
  products.filter((p) => p.featured).slice(0, limit)

export const getNewArrivals = (limit = 4) =>
  products.filter((p) => p.newArrival).slice(0, limit)

export const getRelatedProducts = (product, limit = 4) => {
  if (!product) return []
  const scored = products
    .filter((p) => p.id !== product.id)
    .map((p) => {
      let score = 0
      if (p.collection === product.collection) score += 3
      if (p.category === product.category) score += 2
      if (p.gender === product.gender) score += 2
      if (p.tags.some((t) => product.tags.includes(t))) score += 1
      return { p, score }
    })
    .sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.p)
}

export const searchProducts = (query, list = products) => {
  const term = query.trim().toLowerCase()
  if (!term) return list
  return list.filter((p) =>
    [p.name, p.category, p.collection, p.description, p.gender, ...p.tags]
      .join(' ')
      .toLowerCase()
      .includes(term),
  )
}
