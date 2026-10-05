import { PHOTO, img } from '../../lib/images'
import Media from '../common/Media'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

/** Split editorial story block: image left, narrative right. */
export default function BrandStory() {
  return (
    <section className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-brand">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <Media
              src={img(PHOTO.sewingHands, 1200)}
              alt="Tailor guiding brocade fabric through a sewing machine in the Crownlek atelier"
              label="Inside the atelier"
              ratio="4 / 5"
              className="w-full"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />

            <div className="absolute -bottom-6 -right-4 hidden bg-primary px-7 py-6 text-cream sm:block lg:-right-8">
              <p className="font-display text-4xl leading-none text-gold">1999</p>
              <p className="mt-2 text-[0.6rem] tracking-[0.22em] text-cream/70 uppercase">
                Est. in Lagos
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionTitle
              eyebrow="Our Story"
              title={
                <>
                  Rooted in Culture.
                  <br />
                  Designed for Today.
                </>
              }
              description="We celebrate African heritage through carefully crafted native attire that combines traditional identity with contemporary elegance. Every garment begins as a conversation and ends as a piece worn with pride."
            />

            <ul className="mt-10 flex flex-col gap-5">
              {[
                'Hand-guided embroidery, never machine stamped',
                'Fabrics inspected in-house before they are cut',
                'Made to measure at no extra cost',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-sm text-muted">
                  <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <Button to="/about" variant="outline" className="mt-10">
              Discover our story
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
