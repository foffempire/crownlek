import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import { site } from '../data/site'

const SECTIONS = [
  {
    title: 'Information we collect',
    body: [
      'When you contact us or place an order we collect the details you provide: your name, email address, phone number and delivery address. We also record the measurements you share for made-to-order and bespoke garments so we can remake or alter pieces for you later.',
      'We do not collect payment card details on this website. This site is a frontend demonstration with no backend, so no order data is transmitted or stored anywhere.',
    ],
  },
  {
    title: 'How we use your information',
    body: [
      'Your details are used solely to fulfil your order, arrange delivery, provide aftercare and — where you have opted in — to send occasional collection announcements.',
      'We never sell, rent or trade your personal information to third parties.',
    ],
  },
  {
    title: 'Measurement records',
    body: [
      'Measurement records are held securely and used only to produce future garments for you. You may request that we delete them at any time by emailing us.',
    ],
  },
  {
    title: 'Marketing preferences',
    body: [
      'You can unsubscribe from our newsletter at any time using the link in any email, or by contacting the atelier. Transactional messages relating to an active order are not marketing and will still be sent.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'You may request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it. Contact us at the address below and we will respond within 30 days.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Crownlek collects, uses and protects your personal information."
        path="/privacy"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated September 2026. This policy explains what we collect, why we collect it, and the control you have over it."
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
              <h2 className="font-display text-2xl text-ink">Contact</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Questions about this policy? Email{' '}
                <a href={site.contact.emailHref} className="text-primary underline underline-offset-4">
                  {site.contact.email}
                </a>{' '}
                or write to us at {site.contact.addressLines.join(', ')}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
