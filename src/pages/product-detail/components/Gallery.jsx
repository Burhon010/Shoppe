import { useState } from 'react'

import { cn } from '@/lib/cn'

// Миниатюры слева + главное фото. Figma: Product - Desktop (ThumbnailLayout).
// image — пока null у всех товаров, показываем плейсхолдер (см. src/data/products.js).
export default function Gallery({ image, name }) {
  const [active, setActive] = useState(0)
  const thumbs = Array.from({ length: 4 })

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      <div className="flex flex-row gap-3 md:flex-col">
        {thumbs.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Фото ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              'size-16 shrink-0 overflow-hidden bg-surface md:size-20',
              active === i && 'ring-1 ring-ink',
            )}
          >
            {image ? (
              <img src={image} alt="" className="size-full object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center text-[10px] text-muted">
                фото
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="aspect-square w-full min-w-0 flex-1 bg-surface">
        {image ? (
          <img src={image} alt={name} className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-sm text-muted">
            Фото товара
          </div>
        )}
      </div>
    </div>
  )
}
