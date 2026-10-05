import { useState } from 'react'
import { IMAGES_ENABLED } from '../../lib/images'
import { cn } from '../../lib/format'
import ImagePlaceholder from './ImagePlaceholder'

/**
 * Single image primitive used everywhere in the app.
 *
 * While `IMAGES_ENABLED` is `false` it renders the branded placeholder plate.
 * Once real photography is wired up it renders a lazy-loaded image and falls
 * back to the placeholder if the file is missing — so layouts never break.
 *
 * Use `fill` to stretch the media to the nearest positioned ancestor instead
 * of passing `absolute inset-0`, which would clash with the base `relative`.
 */
export default function Media({
  src,
  alt = '',
  label,
  ratio,
  className,
  imageClassName,
  tone = 'light',
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  priority = false,
  fill = false,
}) {
  const [failed, setFailed] = useState(false)
  const showImage = IMAGES_ENABLED && Boolean(src) && !failed

  return (
    <div
      className={cn('overflow-hidden bg-beige', fill ? 'absolute inset-0' : 'relative', className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn('h-full w-full object-cover', imageClassName)}
        />
      ) : (
        <ImagePlaceholder label={label ?? alt} tone={tone} />
      )}
    </div>
  )
}
