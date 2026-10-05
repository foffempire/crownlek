import { Leaf, Sparkles, Target } from 'lucide-react'
import { craftsmanshipSteps } from '../data/services'
import { PHOTO, img } from '../lib/images'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Media from '../components/common/Media'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'

const TEAM = [
  {
    name: 'Adunni Crownlek',
    role: 'Founder & Creative Director',
    bio: 'Trained in Lagos and London, Adunni founded the house to give Nigerian tailoring the platform it deserves.',
    photo: PHOTO.elderWoman,
  },
  {
    name: 'Ibrahim Sule',
    role: 'Head of Tailoring',
    bio: 'Twenty years on the bench. Ibrahim drafts every bespoke pattern personally before it reaches the cutting table.',
    photo: PHOTO.sewingWoman,
  },
  {
    name: 'Ngozi Eze',
    role: 'Head of Embroidery',
    bio: 'Leads a team of six, translating heritage motifs into embroidery that follows the line of the body.',
    photo: PHOTO.fabricPattern,
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Crownlek preserves African heritage through modern tailoring — hand-guided embroidery, handwoven fabrics and made-to-measure garments from our Lagos atelier."
        path="/about"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="Our Story"
        title={
          <>
            Preserving Heritage.
            <br />
            Creating Modern African Fashion.
          </>
        }
        description="We began in a single Lagos workshop with three tailors and a stack of brocade. Two decades later the standard has not moved: every piece is cut, embroidered and finished by hand."
      />

      {/* Brand story */}
      <section className="pb-20 sm:pb-28">
        <div className="container-brand">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Media
                src={img(PHOTO.fabricMarket, 1200)}
                alt="Colourful handwoven fabrics displayed at a market stall"
                label="Our fabric library"
                ratio="4 / 5"
                className="w-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Reveal>

            <Reveal delay={100}>
              <SectionTitle
                eyebrow="Where it started"
                title="A workshop, three tailors, one standard"
                description="Crownlek was born out of frustration: beautiful African fabrics, expertly woven, too often cut into garments that never fit properly. We set out to pair the fabric with tailoring that could match it."
              />

              <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                <p>
                  Our founder trained as a pattern cutter before returning to Lagos, and brought that
                  discipline with her. Every Crownlek garment — from a ready-to-wear senator set to a
                  full bridal commission — is drafted from a pattern rather than graded from a block.
                </p>
                <p>
                  We work with weavers in Iseyin, lace merchants in Austria and wax print specialists in
                  the Netherlands. What we will not do is compromise on what happens after the fabric
                  arrives: it is inspected, cut, embroidered and pressed by hand.
                </p>
                <p>
                  The result is native attire that holds its shape, survives the occasion and gets
                  worn again — which is, in the end, the only real measure of craftsmanship.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="container-brand">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                title: 'To make African native attire that fits as well as it looks.',
                body: 'We exist to put properly tailored African garments on people who care about them — removing the compromise between cultural pride and a garment that actually fits.',
              },
              {
                icon: Sparkles,
                label: 'Our Vision',
                title: 'An African house held to a global standard of craft.',
                body: 'We want the next generation of African designers to inherit an industry with real infrastructure: trained tailors, fair pay, documented technique and garments worth keeping.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} delay={index * 100} className="h-full">
                  <div className="flex h-full flex-col border border-line bg-cream p-8 lg:p-10">
                    <Icon size={24} strokeWidth={1.2} className="text-primary" aria-hidden="true" />
                    <p className="eyebrow mt-7 text-gold">{item.label}</p>
                    <h2 className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-primary-dark py-20 sm:py-28">
        <div className="container-brand">
          <SectionTitle
            eyebrow="Craftsmanship"
            title="Five stages, no shortcuts"
            description="From the moment a fabric bolt arrives to the final press before dispatch."
            tone="dark"
          />

          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {craftsmanshipSteps.map((step, index) => (
              <li key={step.title} className="border-t border-cream/15 pt-6">
                <p className="font-display text-3xl text-gold">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-xl text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex items-start gap-4 border border-cream/12 bg-cream/[0.04] p-7 lg:max-w-2xl">
            <Leaf size={20} strokeWidth={1.2} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-cream/70">
              Offcuts from our cutting table are collected and passed to a network of Lagos
              accessories makers, so very little of what we buy ends up as waste.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-brand">
          <SectionTitle
            eyebrow="The people"
            title="Behind the atelier"
            align="center"
            description="A small team, deliberately. Everyone who touches your garment is named here."
          />

          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {TEAM.map((member, index) => (
              <li key={member.name}>
                <Reveal delay={index * 90}>
                  <Media
                    src={img(member.photo, 900)}
                    alt={`${member.name}, ${member.role}`}
                    label={member.name}
                    ratio="4 / 5"
                    className="w-full"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <h3 className="mt-6 font-display text-2xl text-ink">{member.name}</h3>
                  <p className="mt-1 text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col items-center gap-5 border-t border-line pt-14 text-center">
            <p className="max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">
              Come and see the work in person, or start with a conversation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/services">Explore our services</Button>
              <Button to="/contact" variant="outline">
                Contact the atelier
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
