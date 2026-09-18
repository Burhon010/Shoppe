import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/components/layout/MainLayout'
import HomePage from '@/pages/home/HomePage'
import ShopPage from '@/pages/shop/ShopPage'
import ProductPage from '@/pages/product-detail/ProductPage'
import PagePlaceholder from '@/pages/common/PagePlaceholder'

import { ROUTES } from './routes'

/*
 * Все маршруты приложения. Пути НЕ пишем строками — берём из './routes'.
 * Готово: Home, Shop, Product. Остальное — заглушки для своих владельцев
 * (checkout/account/blog/static — см. иерархию проекта).
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.SHOP, element: <ShopPage /> },
      { path: ROUTES.PRODUCT, element: <ProductPage /> },
      { path: ROUTES.CART, element: <PagePlaceholder title="Cart" /> },
      { path: ROUTES.CHECKOUT, element: <PagePlaceholder title="Checkout" /> },
      { path: ROUTES.ACCOUNT, element: <PagePlaceholder title="Account" /> },
      { path: ROUTES.BLOG, element: <PagePlaceholder title="Blog" /> },
      { path: ROUTES.OUR_STORY, element: <PagePlaceholder title="Our Story" /> },
      { path: ROUTES.CONTACT, element: <PagePlaceholder title="Contact" /> },
      { path: '*', element: <PagePlaceholder title="404" /> },
    ],
  },
])
