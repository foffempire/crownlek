import { useState } from 'react'
import { ArrowRight, Minus, Plus } from 'lucide-react'
import { bespokeSteps, services } from '../data/services'
import { PHOTO, img } from '../lib/images'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Media from '../components/common/Media'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { cn } from '../lib/format'

export default function Services() {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      <Seo
        title="Services"
        description="Ready-to-wear, bespoke tailoring, wedding and ceremony outfits, corporate native wear, group outfits and custom embroidery — all made in our Lagos atelier."
        path="/services"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Services"
        title="What we make, and how"
        description="Whether you need one garment for a Friday or a hundred for a family celebration, everything is produced in-house by the same team."
      />

      {/* Service cards */}
      <section className="pb-20 sm:pb-28">
        <div className="container-brand">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => {
              const isOpen = expanded === service.slug
              return (
                <li key={service.slug}>
                  <Reveal delay={(index % 3) * 80} className="h-full">
                    <article className="flex h-full flex-col">
                      <Media
                        src={service.image}
                        alt={service.title}
                        label={service.title}
                        ratio="4 / 3"
                        className="w-full"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />

                      <h2 className="mt-6 font-display text-2xl text-ink">{service.title}</h2>

                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>

                      <div
                        id={`service-${service.slug}`}
                        hidden={!isOpen}
                        className="mt-4 text-sm leading-relaxed text-muted"
                      >
                        {service.longDescription}
                      </div>

                      <div className="mt-auto flex items-center gap-6 pt-6">
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : service.slug)}
                          aria-expanded={isOpen}
                          aria-controls={`service-${service.slug}`}
                          className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] text-primary uppercase"
                        >
                          {isOpen ? (
                            <Minus size={13} strokeWidth={1.6} aria-hidden="true" />
                          ) : (
                            <Plus size={13} strokeWidth={1.6} aria-hidden="true" />
                          )}
                          {isOpen ? 'Show less' : 'Learn more'}
                        </button>

                        <Button
                          to="/contact"
                          variant="ghost"
                          size="sm"
                          className="group gap-2 px-0 text-muted hover:text-primary"
                        >
                          Enquire
                          <ArrowRight
                            size={13}
                            strokeWidth={1.5}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Button>
                      </div>
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Bespoke */}
      <section className="relative overflow-hidden bg-primary-dark py-20 sm:py-28 lg:py-32">
        <Media
          src={img(PHOTO.sewingHands, 1800)}
          alt="Tailor finishing a garment by hand"
          label="Bespoke tailoring"
          tone="dark"
          fill
          className="h-full w-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-dark/80" aria-hidden="true" />

        <div className="container-brand relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <SectionTitle
              eyebrow="Bespoke"
              title={
                <>
                  Designed Specifically
                  <br />
                  for You.
                </>
              }
              description="From fabric selection to final fitting, our bespoke service creates a piece that reflects your personality and occasion — drafted from your measurements, never graded."
              tone="dark"
            />

            <div className="lg:pt-2">
              <ol className="flex flex-col">
                {bespokeSteps.map((step) => (
                  <li key={step.step} className="flex gap-6 border-b border-cream/12 py-6 first:pt-0">
                    <span className="font-display text-2xl text-gold">{step.step}</span>
                    <div>
                      <h3 className="font-display text-xl text-cream">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/65">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" variant="gold">
                  Start your bespoke journey
                </Button>
                <Button to="/collections/bespoke" variant="light">
                  View bespoke pieces
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-brand">
          <div className={cn('flex flex-col items-center gap-6 text-center')}>
            <p className="max-w-2xl font-display text-3xl leading-snug text-ink sm:text-4xl">
              Not sure which service you need? Tell us the occasion and we&rsquo;ll advise.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" size="lg">
                Contact us
              </Button>
              {/* <Button to="/shop" variant="outline" size="lg">
                Shop ready-to-wear
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
