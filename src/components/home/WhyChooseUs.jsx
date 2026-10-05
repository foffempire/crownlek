import { Calendar, Gem, Scissors, Sparkles } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'

const PILLARS = [
  {
    icon: Gem,
    title: 'Premium Fabrics',
    description:
      'Guinea and cashmere brocade, handwoven aso-oke, Austrian lace and European linen — sourced for hand feel and longevity.',
  },
  {
    icon: Scissors,
    title: 'Expert Craftsmanship',
    description:
      'Patterns drafted per client and finished by hand, so the garment sits on you and not the other way around.',
  },
  {
    icon: Sparkles,
    title: 'Authentic African Designs',
    description:
      'Motifs drawn from Nigerian and West African traditions, reinterpreted with restraint for a modern wardrobe.',
  },
  {
    icon: Calendar,
    title: 'Made for Every Occasion',
    description:
      'From Friday prayers to a daughter’s wedding — one house, cut for the whole of your life.',
  },
]

/** Four-point value proposition. */
export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-brand">
        <SectionTitle
          eyebrow="Why Crownlek"
          title="Built on four promises"
          align="center"
        />

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={index * 90}>
                <div className="flex flex-col border-t border-line pt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-line">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon size={22} strokeWidth={1.2} className="text-primary" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl text-ink">{pillar.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
