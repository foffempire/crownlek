import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import { site } from '../data/site'

const SECTIONS = [
  {
    title: 'Orders',
    body: [
      'An order is confirmed when we acknowledge it in writing, either by email or WhatsApp. Where a piece is made to order, the timeline we confirm at that point is binding on us and we will notify you of any change.',
      'Prices are shown in Nigerian Naira and include the cost of tailoring. Delivery is calculated separately and is free on orders above ₦150,000.',
    ],
  },
  {
    title: 'Measurements and fittings',
    body: [
      'For made-to-order and bespoke garments, we rely on the measurements you supply or that we take. If a measurement you provided is inaccurate, we will still alter the garment free of charge, but any additional fabric required is chargeable.',
      'Two fittings are included in a bespoke commission. Further fittings are charged at our standard alteration rate.',
    ],
  },
  {
    title: 'Delivery',
    body: [
      'Nationwide delivery within Nigeria takes 1–3 working days. International delivery takes 3–7 working days via DHL Express. Duties and taxes on international orders are payable by the recipient.',
      'Risk in the goods passes to you on delivery. Please inspect your parcel on arrival and report any damage within 48 hours.',
    ],
  },
  {
    title: 'Returns and exchanges',
    body: [
      'Ready-to-wear pieces may be returned unworn, with tags attached, within 14 days of delivery for an exchange or store credit. Made-to-order and bespoke garments are cut specifically for you and are not eligible for return.',
      'Sale items are final sale. Where a garment is faulty, we will repair, replace or refund it in full.',
    ],
  },
  {
    title: 'Intellectual property',
    body: [
      'All imagery, embroidery motifs, patterns and written content on this site belong to Crownlek and may not be reproduced without written permission.',
    ],
  },
  {
    title: 'Governing law',
    body: [
      'These terms are governed by the laws of the Federal Republic of Nigeria, and any dispute will be subject to the exclusive jurisdiction of the Nigerian courts.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="The terms that apply when you order from Crownlek."
        path="/terms"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated September 2026. These terms apply to every order placed with us."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-brand">
          <div className="max-w-3xl">
            {SECTIONS.map((section) => (
              <article key={section.title} className="border-t border-line py-8 first:border-t-0 first:pt-0">
                <h2 className="font-display text-2xl text-ink">{section.title}</h2>
                <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="border-t border-line pt-8">
              <h2 className="font-display text-2xl text-ink">Questions</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                If anything here is unclear, contact us at{' '}
                <a href={site.contact.emailHref} className="text-primary underline underline-offset-4">
                  {site.contact.email}
                </a>{' '}
                before placing your order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
