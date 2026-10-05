import { Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Stars from '../ui/Stars'

/** Customer testimonials in an editorial three-up grid. */
export default function Testimonials() {
  return (
    <section className="bg-primary-dark py-20 sm:py-28 lg:py-32">
      <div className="container-brand">
        <SectionTitle
          eyebrow="Testimonials"
          title="Worn with pride"
          description="A few words from clients who trusted us with their most important days."
          align="center"
          tone="dark"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 80} className="h-full">
              <figure className="flex h-full flex-col border border-cream/12 bg-cream/[0.04] p-7 lg:p-8">
                <Quote size={26} strokeWidth={1} className="text-gold/70" aria-hidden="true" />

                <Stars rating={testimonial.rating} className="mt-6" />

                <blockquote className="mt-5 flex-1">
                  <p className="text-[0.95rem] leading-relaxed text-cream/80">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-7 border-t border-cream/12 pt-5">
                  <p className="font-display text-lg text-cream">{testimonial.name}</p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                    Verified Customer
                  </p>
                  <p className="mt-1 text-xs text-cream/50">
                    {testimonial.location} · {testimonial.piece}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
