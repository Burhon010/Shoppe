import { cn } from '@/lib/cn'

// Звёздный рейтинг: ★★★★★ — value заполненных из 5, filled/empty цвет разный
export default function Rating({ value, className }) {
  return (
    <div className={cn('flex gap-0.5', className)} aria-label={`Рейтинг ${value} из 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < value ? 'text-ink' : 'text-line'}>
          ★
        </span>
      ))}
    </div>
  )
}
