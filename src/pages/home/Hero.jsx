import { useRef, useState } from 'react'

import Button from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/formatPrice'

const SWIPE_THRESHOLD = 60

// Свайпаемый промо-баннер (мышь/тач) + точки-пагинация. Figma: Home — Hero.
export default function Hero({ slides }) {
  const [index, setIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)

  const goTo = (i) => setIndex(Math.max(0, Math.min(slides.length - 1, i)))

  const handlePointerDown = (event) => {
    setIsDragging(true)
    startX.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!isDragging) return
    setDragX(event.clientX - startX.current)
  }

  const endDrag = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (dragX < -SWIPE_THRESHOLD) goTo(index + 1)
    else if (dragX > SWIPE_THRESHOLD) goTo(index - 1)
    setDragX(0)
  }

  return (
    <section
      className="relative h-[480px] touch-pan-y overflow-hidden bg-surface select-none md:h-[640px]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <div
        className={cn(
          'flex h-full cursor-grab active:cursor-grabbing',
          !isDragging && 'transition-transform duration-400 ease-out',
        )}
        style={{ transform: `translateX(calc(${-index * 100}% + ${dragX}px))` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex h-full w-full shrink-0 items-end px-page pb-10 md:items-center md:pb-0"
          >
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.name}
                draggable={false}
                className="absolute inset-0 size-full object-cover object-[70%_center] md:inset-y-0 md:right-0 md:left-auto md:w-2/3 md:object-left"
              />
            )}

            {/* затемнение для читаемости текста поверх фото — на мобильном фото на весь баннер */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:bg-gradient-to-r md:from-black/35 md:via-black/0 md:to-transparent"
            />

            <div
              className="relative z-10 max-w-xs"
              onPointerDown={(event) => event.stopPropagation()}
            >
              <h1 className="font-display text-3xl text-white md:text-4xl">{slide.name}</h1>
              <p className="mt-3 text-lg text-white/90">{formatPrice(slide.price)}</p>
              <Button to={slide.to} variant="outline" className="mt-6">
                View Product
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-6 flex justify-center gap-2"
        onPointerDown={(event) => event.stopPropagation()}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => goTo(i)}
            className={
              i === index
                ? 'size-2 rounded-full bg-white'
                : 'size-2 rounded-full border border-white'
            }
          />
        ))}
      </div>
    </section>
  )
}
