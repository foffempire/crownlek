import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

/**
 * Newsletter sign-up. There is no backend, so submission is simulated and a
 * success state is shown inline.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const value = email.trim()
    if (!value) {
      setError('Please enter your email address.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setSubmitted(true)
  }

  return (
    <section className="bg-beige py-20 sm:py-28">
      <div className="container-brand">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle
            eyebrow="Join our community"
            title="Be the first to know"
            description="New collections, exclusive pieces and African fashion stories — a few times a year, never more."
            align="center"
          />

          {submitted ? (
            <div
              role="status"
              className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4 border border-gold/40 bg-gold/10 px-8 py-10"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-gold text-gold">
                <Check size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="font-display text-2xl text-ink">
                Thank you for joining our community.
              </p>
              <p className="text-sm text-muted">
                We&rsquo;ve added <span className="text-ink">{email.trim()}</span> to our list.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex-1 text-left">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (error) setError('')
                    }}
                    placeholder="Email address"
                    autoComplete="email"
                    aria-invalid={error ? 'true' : undefined}
                    aria-describedby={error ? 'newsletter-error' : undefined}
                    className="h-14 w-full border border-line bg-white px-5 text-sm text-ink transition-colors duration-300 placeholder:text-muted/60 focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex h-14 items-center justify-center gap-3 bg-primary px-8 text-[0.7rem] font-medium tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-burgundy"
                >
                  Subscribe
                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>

              {error ? (
                <p id="newsletter-error" role="alert" className="mt-3 text-left text-xs text-primary">
                  {error}
                </p>
              ) : (
                <p className="mt-3 text-left text-xs text-muted">
                  We respect your inbox. Unsubscribe at any time.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
