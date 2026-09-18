import { Link } from 'react-router-dom'

import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/formatPrice'
import { getProductPath } from '@/routes/routes'

import { CartIcon, EyeIcon, HeartIcon } from '../ui/icons'

// Карточка товара: фото + hover-оверлей (корзина/глаз/сердце), badge скидки/распродано.
// Figma: Home ("Shop The Latest"), Shop (листинг) — одна и та же карточка.
export default function ProductCard({ product, className }) {
  const { addItem } = useCart()
  const productPath = getProductPath(product.id)

  return (
    <article className={cn('group flex flex-col', className)}>
      <div className="relative aspect-square overflow-hidden bg-surface">
        <Link to={productPath} className="block size-full">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex size-full items-center justify-center text-xs text-muted">
              Фото товара
            </div>
          )}
        </Link>

        {product.discountPercent && !product.soldOut && (
          <span className="absolute top-3 left-3 bg-ink px-2 py-1 text-[11px] text-white">
            - %{product.discountPercent}
          </span>
        )}

        {product.soldOut && (
          <span className="absolute top-3 left-3 bg-ink px-2 py-1 text-[11px] text-white">
            Sold out
          </span>
        )}

        {!product.soldOut && (
          <div className="absolute inset-0 hidden items-center justify-center gap-4 bg-black/5 opacity-0 transition-opacity group-hover:flex group-hover:opacity-100 md:flex">
            <button
              type="button"
              aria-label="В корзину"
              onClick={() => addItem(product.id)}
              className="text-ink transition-colors hover:text-gold"
            >
              <CartIcon className="size-5" />
            </button>
            <Link
              to={productPath}
              aria-label="Быстрый просмотр"
              className="text-ink transition-colors hover:text-gold"
            >
              <EyeIcon className="size-5" />
            </Link>
            <button
              type="button"
              aria-label="В избранное"
              className="text-ink transition-colors hover:text-gold"
            >
              <HeartIcon className="size-5" />
            </button>
          </div>
        )}

        {product.soldOut && (
          <button
            type="button"
            disabled
            className="absolute inset-x-0 bottom-0 bg-ink py-3 text-center text-[11px] tracking-[0.15em] text-white uppercase opacity-60"
          >
            Sold Out
          </button>
        )}

        {!product.soldOut && (
          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="absolute inset-x-0 bottom-0 hidden bg-ink py-3 text-center text-[11px] tracking-[0.15em] text-white uppercase transition-opacity group-hover:block"
          >
            Add to cart
          </button>
        )}
      </div>

      <h3 className="mt-4 text-sm">
        <Link to={productPath} className="transition-colors hover:text-gold">
          {product.name}
        </Link>
      </h3>

      <p className="mt-1 text-sm text-gold">{formatPrice(product.price)}</p>
    </article>
  )
}
