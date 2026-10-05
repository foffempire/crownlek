import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Info, PackageCheck } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/format'
import Seo from '../components/common/Seo'
import PageHeader from '../components/layout/PageHeader'
import Button from '../components/ui/Button'
import Input, { Select } from '../components/ui/Input'
import Media from '../components/common/Media'

const NIGERIAN_STATES = [
  'Lagos',
  'Abuja (FCT)',
  'Rivers',
  'Oyo',
  'Kano',
  'Enugu',
  'Kaduna',
  'Anambra',
  'Delta',
  'Other',
]

/**
 * Demo checkout. No payment provider or backend is wired up — the order is
 * never submitted anywhere. A clear notice explains this to the customer.
 */
export default function Checkout() {
  const { items, subtotal, delivery, total } = useCart()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Lagos',
  })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState(false)

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!values.firstName.trim()) next.firstName = 'Please enter your first name.'
    if (!values.lastName.trim()) next.lastName = 'Please enter your last name.'
    if (!values.email.trim()) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (values.phone.replace(/\D/g, '').length < 10) next.phone = 'Please enter a valid phone number.'
    if (!values.address.trim()) next.address = 'Please enter a delivery address.'
    if (!values.city.trim()) next.city = 'Please enter a city.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length === 0) setNotice(true)
  }

  if (items.length === 0) {
    return (
      <>
        <Seo title="Checkout" description="Complete your Crownlek order." path="/checkout" noIndex />

        <PageHeader
          breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Checkout' }]}
          eyebrow="Checkout"
          title="Nothing to check out yet"
          description="Add a piece to your bag and your order summary will appear here."
        />

        <section className="pb-24 sm:pb-32">
          <div className="container-brand">
            <Button to="/shop" size="lg">
              Browse the collection
            </Button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Seo title="Checkout" description="Complete your Crownlek order." path="/checkout" noIndex />

      <PageHeader
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Bag', to: '/cart' }, { label: 'Checkout' }]}
        eyebrow="Checkout"
        title="Delivery details"
        description="Enter where you would like your order delivered."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-brand">
          <div className="mb-10 flex items-start gap-4 border border-gold/40 bg-gold/10 px-6 py-5">
            <Info size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#8a6f14]" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-[#7a6212]">Demo checkout</p>
              <p className="mt-1 text-sm leading-relaxed text-[#7a6212]/90">
                Checkout functionality will be connected when the backend is implemented. No payment
                is taken and no order is placed from this page.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            <form onSubmit={handleSubmit} noValidate className="flex min-w-0 flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  name="firstName"
                  label="First name"
                  value={values.firstName}
                  onChange={update('firstName')}
                  error={errors.firstName}
                  autoComplete="given-name"
                  required
                />
                <Input
                  name="lastName"
                  label="Last name"
                  value={values.lastName}
                  onChange={update('lastName')}
                  error={errors.lastName}
                  autoComplete="family-name"
                  required
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  name="email"
                  type="email"
                  label="Email address"
                  value={values.email}
                  onChange={update('email')}
                  error={errors.email}
                  autoComplete="email"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  label="Phone number"
                  value={values.phone}
                  onChange={update('phone')}
                  error={errors.phone}
                  autoComplete="tel"
                  placeholder="+234 800 000 0000"
                  required
                />
              </div>

              <Input
                name="address"
                label="Delivery address"
                value={values.address}
                onChange={update('address')}
                error={errors.address}
                autoComplete="street-address"
                required
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={update('city')}
                  error={errors.city}
                  autoComplete="address-level2"
                  required
                />
                <Select
                  name="state"
                  label="State"
                  value={values.state}
                  onChange={update('state')}
                  autoComplete="address-level1"
                  options={NIGERIAN_STATES.map((state) => ({ value: state, label: state }))}
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to="/cart"
                  className="group inline-flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-primary"
                >
                  <ArrowLeft
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Back to bag
                </Link>

                <Button type="submit" size="lg">
                  Place order
                </Button>
              </div>

              {notice ? (
                <div
                  role="status"
                  className="flex items-start gap-3 border border-primary/30 bg-primary/5 px-6 py-5"
                >
                  <PackageCheck size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-primary">
                    Your details passed validation. Checkout functionality will be connected when the
                    backend is implemented — please message us on WhatsApp to complete this order.
                  </p>
                </div>
              ) : null}
            </form>

            {/* Summary */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-line bg-beige/50 p-7">
                <h2 className="eyebrow text-ink">Your order</h2>

                <ul className="mt-6 flex flex-col divide-y divide-line">
                  {items.map((line) => (
                    <li key={line.key} className="flex gap-4 py-4 first:pt-0">
                      <Media
                        src={line.image}
                        alt={line.name}
                        label={line.name}
                        ratio="3 / 4"
                        className="w-14 shrink-0"
                        sizes="56px"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-base text-ink">{line.name}</p>
                        <p className="mt-0.5 text-[0.65rem] tracking-[0.12em] text-muted uppercase">
                          {line.selectedSize} · {line.selectedColor} · ×{line.quantity}
                        </p>
                      </div>
                      <p className="shrink-0 text-sm text-ink tabular-nums">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 flex flex-col gap-3 border-t border-line pt-5 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd className="text-ink tabular-nums">{formatPrice(subtotal)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted">Delivery</dt>
                    <dd className="text-ink tabular-nums">
                      {delivery === 0 ? 'Free' : formatPrice(delivery)}
                    </dd>
                  </div>
                  <div className="mt-1 flex items-center justify-between border-t border-line pt-4">
                    <dt className="text-[0.75rem] tracking-[0.18em] text-ink uppercase">Total</dt>
                    <dd className="font-display text-2xl text-ink tabular-nums">
                      {formatPrice(total)}
                    </dd>
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
