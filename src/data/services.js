import { img, PHOTO } from '../lib/images'

/** Services offered by the brand, shown on the home page and the services page. */
export const services = [
  {
    slug: 'ready-to-wear',
    title: 'Ready-to-Wear',
    description:
      'Our seasonal collection, sized and stocked for immediate dispatch — the fastest route into the Crownlek wardrobe.',
    longDescription:
      'Every piece in the ready-to-wear line is designed in-house, cut in our Lagos atelier and stocked in a full size run. Orders placed before midday are dispatched the same working day.',
    image: img(PHOTO.printWoman, 1200),
  },
  {
    slug: 'bespoke-tailoring',
    title: 'Bespoke Tailoring',
    description:
      'A garment designed around you: consultation, fabric selection, two fittings and a final piece that exists once.',
    longDescription:
      'We begin with a conversation about the occasion, then build a mood board and select fabric together. From there it is pattern drafting, a toile fitting, a second fitting and the final hand-finish. Six to eight weeks end to end.',
    image: img(PHOTO.sewingHands, 1200),
  },
  {
    slug: 'wedding-ceremony',
    title: 'Wedding & Ceremony Outfits',
    description:
      'Complete looks for grooms, brides, parents and the entire bridal party, coordinated as one fabric story.',
    longDescription:
      'Weddings need consistency more than they need variety. We coordinate fabric, embroidery and colour across every member of the party, then schedule fittings so nobody is left without an outfit on the day.',
    image: img(PHOTO.weddingCouple, 1200),
  },
  {
    slug: 'corporate-native-wear',
    title: 'Corporate Native Wear',
    description:
      'Uniform native attire for teams, branded to your identity and delivered on a schedule you can plan around.',
    longDescription:
      'We produce corporate native wear in volume, with discreet brand embroidery and a consistent fit across the team. Reorder at any time using the measurements we hold on file.',
    image: img(PHOTO.senatorCouple, 1200),
  },
  {
    slug: 'group-event-outfits',
    title: 'Group & Event Outfits',
    description:
      'Aso ebi, family sets and event uniforms — from ten pieces to a hundred, with one coherent design language.',
    longDescription:
      'Tell us the date, the palette and the number of people. We handle fabric sourcing, sizing collection and staggered delivery so the group is ready well before the event.',
    image: img(PHOTO.groupWomen, 1200),
  },
  {
    slug: 'custom-embroidery',
    title: 'Custom Embroidery',
    description:
      'Hand-guided embroidery on your own garments, or a bespoke motif developed from a family or house symbol.',
    longDescription:
      'Our embroidery team works from reference images, sketches or existing garments. Choose from traditional motifs or commission an original pattern developed exclusively for you.',
    image: img(PHOTO.fabricPattern, 1200),
  },
]

/** The bespoke journey, used on the services page and the bespoke section. */
export const bespokeSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss the occasion, your references and the silhouette you have in mind.',
  },
  {
    step: '02',
    title: 'Fabric Selection',
    description: 'Choose from our brocade, aso-oke, lace and linen library — or source with us.',
  },
  {
    step: '03',
    title: 'Measurement & Fitting',
    description: 'Two fittings, in person or over video, with a toile before we cut the final fabric.',
  },
  {
    step: '04',
    title: 'Hand Finishing',
    description: 'Embroidery, lining and pressing completed by hand in our Lagos atelier.',
  },
]

/** Craftsmanship pillars used on the about page. */
export const craftsmanshipSteps = [
  { title: 'Fabric Selection', description: 'Every bolt is inspected for weave, weight and colour consistency.' },
  { title: 'Tailoring', description: 'Patterns are drafted per client, never graded up from a standard block.' },
  { title: 'Embroidery', description: 'Hand-guided motifs placed to follow the line of the body.' },
  { title: 'Finishing', description: 'Lining, binding and hand pressing before the piece leaves the atelier.' },
  { title: 'Quality Control', description: 'A final inspection against a fifty-point checklist.' },
]
