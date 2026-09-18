import { Link, NavLink } from 'react-router-dom'

import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/cn'
import { ROUTES } from '@/routes/routes'

import { CartIcon, SearchIcon, UserIcon } from '../ui/icons'

const NAV = [
  { title: 'Shop', to: ROUTES.SHOP },
  { title: 'Blog', to: ROUTES.BLOG },
  { title: 'Our Story', to: ROUTES.OUR_STORY },
]

// Figma: Home/Shop/Product — Header. Логотип SHOPPE (S золотой), навигация, поиск/корзина/аккаунт.
export default function Header() {
  const { count } = useCart()

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-page">
        <Link to={ROUTES.HOME} aria-label="SHOPPE — на главную" className="shrink-0">
          <span className="font-display text-xl tracking-[0.1em]">
            <span className="text-gold">S</span>HOPPE
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'pb-1 transition-colors hover:text-ink',
                  isActive ? 'border-b border-ink text-ink' : 'text-ink/80',
                )
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <span className="hidden h-5 w-px bg-line md:block" aria-hidden="true" />

          <button type="button" aria-label="Поиск" className="transition-colors hover:text-gold">
            <SearchIcon className="size-5" />
          </button>

          <Link
            to={ROUTES.CART}
            aria-label="Корзина"
            className="relative transition-colors hover:text-gold"
          >
            <CartIcon className="size-5" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-gold text-[10px] text-white">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Личный кабинет"
            className="transition-colors hover:text-gold"
          >
            <UserIcon className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
