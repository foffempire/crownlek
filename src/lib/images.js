/**
 * Central place for every image used on the site.
 *
 * The real photography lives in `public/images` and is served from the site
 * root, so every slot renders a real photo. `Media` still falls back to the
 * branded placeholder if a file is missing, so a typo never breaks a layout.
 *
 * Set `IMAGES_ENABLED` to `false` to go back to placeholder plates.
 */

export const IMAGES_ENABLED = true

const BASE = `${import.meta.env.BASE_URL}images/`

/**
 * Resolve a file in `public/images` to a URL.
 *
 * `width` and `ratio` are kept so existing call sites stay unchanged — the
 * local photography is already sized and cropped, so they no longer build the
 * URL the way the old remote-photo helper did.
 *
 * @param {string} id File name from `PHOTO`, e.g. `crownlek_108.webp`
 * @param {number} width Target render width in pixels (unused)
 * @param {number} ratio Optional width/(height) crop (unused)
 */
export function img(id, width = 1200, ratio) {
  void width
  void ratio
  return `${BASE}${id}`
}

/** Photo file names referenced by more than one section, kept in one place. */
export const PHOTO = {
  /* Campaign & hero */
  heroAgbada: 'crownlek_108.webp',
  heroAgbadaAlt: 'crownlek_67.webp',

  /* Agbada */
  agbadaWhite: 'crownlek_112.webp',
  agbadaEmerald: 'crownlek_86.webp',
  agbadaGold: 'crownlek_75.webp',
  agbadaBlue: 'crownlek_65.webp',
  agbadaCouple: 'crownlek_120.webp',

  /* Senator & suits */
  senatorBlack: 'crownlek_118.webp',
  senatorCouple: 'crownlek_90.webp',
  suitDetail: 'crownlek_96.webp',

  /* Menswear */
  nigerianMan: 'crownlek_62.webp',
  menPosing: 'crownlek_64.webp',
  menGroup: 'crownlek_78.webp',
  dashikiMan: 'crownlek_74.webp',
  filaMan: 'crownlek_105.webp',
  fatherSon: 'crownlek_71.webp',

  /* Womenswear */
  laceWoman: 'crownlek_110.webp',
  beadedWoman: 'crownlek_110.webp',
  printWoman: 'crownlek_84.webp',
  traditionalWoman: 'crownlek_83.webp',
  patternWoman: 'crownlek_84.webp',
  hatWoman: 'crownlek_83.webp',
  floralWoman: 'crownlek_84.webp',
  wrapperWoman: 'crownlek_83.webp',
  groupWomen: 'crownlek_79.webp',
  seatedWoman: 'crownlek_84.webp',
  greenHatWoman: 'crownlek_110.webp',
  twoWomen: 'crownlek_99.webp',
  blueDressWoman: 'crownlek_83.webp',
  afroWoman: 'crownlek_110.webp',
  redWallWoman: 'crownlek_110.webp',
  collarWoman: 'crownlek_83.webp',
  fanWoman: 'crownlek_99.webp',

  /* Ceremonial, editorial & group */
  coupleTraditional: 'crownlek_95.webp',
  trioPrints: 'crownlek_104.webp',
  weddingCouple: 'crownlek_115.webp',
  brideGroom: 'crownlek_115.webp',
  orangeWalk: 'crownlek_77.webp',
  yellowPose: 'crownlek_75.webp',

  /* Fabric, market & atelier */
  fabricMarket: 'crownlek_98.webp',
  fabricPattern: 'crownlek_117.webp',
  fabricStack: 'crownlek_81.webp',
  fabricDisplay: 'crownlek_96.webp',
  textiles: 'crownlek_82.webp',
  elderWoman: 'crownlek_110.webp',
  sewingHands: 'crownlek_94.webp',
  sewingWoman: 'crownlek_89.webp',
  sewingWork: 'crownlek_81.webp',
  sewingGreen: 'crownlek_82.webp',
  atelierTable: 'crownlek_106.webp',

  // others
  tradefair: 'crownlek_113.webp',
  calabarCarnival: 'crownlek_119.webp',
  africanMenWhite: 'crownlek_121.webp',
  africanMenBlue: 'crownlek_122.webp',
}
