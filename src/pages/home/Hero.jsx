import { useState } from 'react'

import Button from '@/components/ui/Button'
import { formatPrice } from '@/lib/formatPrice'
import { getProductPath } from '@/routes/routes'

// Промо-баннер с точками-пагинацией. Figma: Home — Hero.
// TODO: слайды — сейчас один статичный слайд (HERO_PRODUCT), точки декоративные.
export default function Hero({ product }) {
  const [, setSlide] = useState(0)
  const slidesCount = 5

  return (
    <section className="relative flex h-[480px] items-end overflow-hidden bg-surface px-page pb-10 md:h-[640px] md:items-center md:pb-0">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 size-full object-cover object-[70%_center] md:inset-y-0 md:right-0 md:left-auto md:w-2/3 md:object-left"
        />
      )}

      {/* затемнение для читаемости текста поверх фото — на мобильном фото на весь баннер */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/35 md:via-black/0 md:to-transparent"
      />

      <div className="relative z-10 max-w-xs">
        <h1 className="font-display text-3xl text-white md:text-4xl">{product.name}</h1>
        <p className="mt-3 text-lg text-white/90">{formatPrice(product.price)}</p>
        <Button to={getProductPath(product.id)} variant="outline" className="mt-6">
          View Product
        </Button>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {Array.from({ length: slidesCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => setSlide(i)}
            className={
              // Figma: первая точка контурная, остальные залиты — статичный визуал,
              // т.к. реального слайдера ещё нет (см. TODO выше)
              i === 0 ? 'size-2 rounded-full border border-white' : 'size-2 rounded-full bg-white'
            }
          />
        ))}
      </div>
    </section>
  )
}
