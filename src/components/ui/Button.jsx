import { Link } from 'react-router-dom'

import { cn } from '@/lib/cn'

// Кнопка бренда: variant="solid" (чёрная, ADD TO CART, Submit) | "outline" (View Product)
// Передай `to`, чтобы получить ссылку, иначе будет <button>.
export default function Button({ to, variant = 'solid', className, children, ...props }) {
  const classes = cn(
    'inline-flex h-12 items-center justify-center px-8 text-xs font-medium tracking-[0.15em] uppercase transition-colors',
    variant === 'solid'
      ? 'bg-ink text-white hover:bg-black disabled:bg-muted'
      : 'border border-white text-white hover:bg-white hover:text-ink',
    'disabled:pointer-events-none',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
