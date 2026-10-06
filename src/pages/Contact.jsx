import { useState } from 'react'
import { Check, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '../data/site'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Input, { Select, Textarea } from '../components/ui/Input'
import Reveal from '../components/ui/Reveal'

const SUBJECTS = [
  'General enquiry',
  'Ready-to-wear order',
  'Bespoke commission',
  'Wedding or ceremony',
  'Corporate or group order',
  'Order support',
]

const EMPTY = { name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' }

/** Contact details plus a validated, frontend-only enquiry form. */
export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (values.phone.replace(/\D/g, '').length < 10)
      next.phone = 'Please enter a valid phone number.'
    if (!values.message.trim()) next.message = 'Please tell us a little about your enquiry.'
    else if (values.message.trim().length < 10)
      next.message = 'Please give us a little more detail.'

    setErrors(next)

    if (Object.keys(next).length === 0) {
      setSubmitted(true)
    }
  }

  const channels = [
    {
      icon: MapPin,
      label: 'Visit us',
      lines: site.contact.addressLines,
      meta: site.contact.hours,
    },
    {
      icon: Phone,
      label: 'Call us',
      lines: [site.contact.phone],
      href: site.contact.phoneHref,
      meta: site.contact.hours,
    },
    {
      icon: Mail,
      label: 'Email us',
      lines: [site.contact.email],
      href: site.contact.emailHref,
      meta: 'We reply within one working day',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      lines: ['Chat with the atelier'],
      href: whatsappLink(),
      meta: 'Fastest response',
      external: true,
    },
  ]

  return (
    <>
      <Seo
        title="Contact"
        description="Visit, call, email or WhatsApp the Crownlek atelier in Victoria Island, Lagos. Bespoke consultations available in person or by video call."
        path="/contact"
      />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Contact"
        title="Let's talk about what you need"
        description="Whether it is a single piece or a full family commission, we start with a conversation."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-brand">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* Details */}
            <div>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {channels.map((channel, index) => {
                  const Icon = channel.icon
                  const content = (
                    <>
                      <span className="flex size-10 shrink-0 items-center justify-center border border-line text-primary">
                        <Icon size={17} strokeWidth={1.4} aria-hidden="true" />
                      </span>

                      <span className="min-w-0">
                        <span className="eyebrow block text-muted">{channel.label}</span>

                        <span className="mt-2 block text-sm text-ink">
                          {channel.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </span>

                        {channel.meta ? (
                          <span className="mt-1.5 block text-xs text-muted">{channel.meta}</span>
                        ) : null}
                      </span>
                    </>
                  )

                  return (
                    <li key={channel.label}>
                      <Reveal delay={index * 70}>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            target={channel.external ? '_blank' : undefined}
                            rel={channel.external ? 'noreferrer noopener' : undefined}
                            className="flex items-start gap-4 border border-line bg-beige/40 p-5 transition-colors duration-300 hover:border-primary/50"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-start gap-4 border border-line bg-beige/40 p-5">
                            {content}
                          </div>
                        )}
                      </Reveal>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8 flex items-start gap-3 border-t border-line pt-6 text-sm text-muted">
                <Clock size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p>
                  Bespoke consultations run by appointment, in person or over video call — including
                  for international clients.
                </p>
              </div>
            </div>

            {/* Form */}
            {/* <div className="border border-line bg-beige/40 p-7 sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-center py-14 text-center" role="status">
                  <span className="flex size-14 items-center justify-center rounded-full border border-gold text-gold">
                    <Check size={22} strokeWidth={1.6} aria-hidden="true" />
                  </span>

                  <h2 className="mt-8 font-display text-3xl text-ink">Thank you for contacting us.</h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                    We&rsquo;ll get back to you soon. For anything urgent, WhatsApp is the fastest way
                    to reach the atelier.
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Button href={whatsappLink()} target="_blank" rel="noreferrer noopener">
                      Message on WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setValues(EMPTY)
                        setSubmitted(false)
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex min-w-0 flex-col gap-6">
                  <h2 className="font-display text-2xl text-ink">Send us a message</h2>

                  <Input
                    name="name"
                    label="Name"
                    value={values.name}
                    onChange={update('name')}
                    error={errors.name}
                    autoComplete="name"
                    required
                  />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Input
                      name="email"
                      type="email"
                      label="Email"
                      value={values.email}
                      onChange={update('email')}
                      error={errors.email}
                      autoComplete="email"
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      label="Phone"
                      value={values.phone}
                      onChange={update('phone')}
                      error={errors.phone}
                      autoComplete="tel"
                      placeholder="+234 800 000 0000"
                      required
                    />
                  </div>

                  <Select
                    name="subject"
                    label="Subject"
                    value={values.subject}
                    onChange={update('subject')}
                    options={SUBJECTS.map((subject) => ({ value: subject, label: subject }))}
                  />

                  <Textarea
                    name="message"
                    label="Message"
                    value={values.message}
                    onChange={update('message')}
                    error={errors.message}
                    rows={6}
                    placeholder="Tell us about the occasion, timeline and any references you have."
                    required
                  />

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
