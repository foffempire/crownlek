import { cn } from '../../lib/format'

/** Shared label / hint / error wrapper for all form controls. */
export function Field({ id, label, hint, error, required, className, children }) {
  return (
    <div className={cn('flex min-w-0 flex-col gap-2', className)}>
      {label ? (
        <label htmlFor={id} className="eyebrow text-muted">
          {label}
          {required ? <span className="ml-1 text-primary">*</span> : null}
        </label>
      ) : null}

      {children}

      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs text-primary">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

const CONTROL =
  'w-full min-w-0 max-w-full border border-line bg-white px-4 py-3 text-sm text-ink transition-colors duration-300 placeholder:text-muted/60 hover:border-primary/40 focus:border-primary disabled:cursor-not-allowed disabled:bg-beige'

/** Single-line text input with label, hint and error states. */
export default function Input({ id, name, label, hint, error, className, required, ...rest }) {
  const fieldId = id || name
  const describedBy = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined

  return (
    <Field id={fieldId} label={label} hint={hint} error={error} required={required} className={className}>
      <input
        id={fieldId}
        name={name}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        className={cn(CONTROL, error && 'border-primary')}
        {...rest}
      />
    </Field>
  )
}

/** Multi-line text input. */
export function Textarea({ id, name, label, hint, error, className, rows = 5, required, ...rest }) {
  const fieldId = id || name
  const describedBy = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined

  return (
    <Field id={fieldId} label={label} hint={hint} error={error} required={required} className={className}>
      <textarea
        id={fieldId}
        name={name}
        rows={rows}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        className={cn(CONTROL, 'resize-y', error && 'border-primary')}
        {...rest}
      />
    </Field>
  )
}

/** Native select styled to match the text inputs. */
export function Select({
  id,
  name,
  label,
  hint,
  error,
  className,
  options = [],
  children,
  required,
  ...rest
}) {
  const fieldId = id || name
  const describedBy = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined

  return (
    <Field id={fieldId} label={label} hint={hint} error={error} required={required} className={className}>
      <select
        id={fieldId}
        name={name}
        required={required}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        className={cn(CONTROL, 'appearance-none pr-10', error && 'border-primary')}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%236B6B6B' stroke-width='1.5'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
        }}
        {...rest}
      >
        {children ??
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </Field>
  )
}
