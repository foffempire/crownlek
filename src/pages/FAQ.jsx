import { faqs } from '../data/faqs'
import { site, whatsappLink } from '../data/site'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'

export default function FAQ() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Answers on ordering, sizing, tailoring times, nationwide and international delivery, fabric options, garment care and returns."
        path="/faq"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
        eyebrow="Support"
        title="Frequently asked questions"
        description="Everything about ordering, sizing, timelines and care. If your question isn't here, the atelier is one message away."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-brand">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div className="max-w-3xl">
              <Accordion items={faqs} defaultOpenId={faqs[0].id} />
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-line bg-beige/50 p-7">
                <p className="eyebrow text-ink">Still need help?</p>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Message the atelier directly and we&rsquo;ll answer within one working day — usually
                  much sooner.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Button href={whatsappLink()} target="_blank" rel="noreferrer noopener" className="w-full">
                    Chat on WhatsApp
                  </Button>
                  <Button to="/contact" variant="outline" className="w-full">
                    Contact form
                  </Button>
                </div>

                <dl className="mt-7 flex flex-col gap-4 border-t border-line pt-6 text-sm">
                  <div>
                    <dt className="eyebrow text-muted">Call</dt>
                    <dd className="mt-1.5 text-ink">
                      <a href={site.contact.phoneHref} className="transition-colors duration-300 hover:text-primary">
                        {site.contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted">Email</dt>
                    <dd className="mt-1.5 text-ink">
                      <a href={site.contact.emailHref} className="transition-colors duration-300 hover:text-primary">
                        {site.contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted">Hours</dt>
                    <dd className="mt-1.5 text-ink">{site.contact.hours}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
