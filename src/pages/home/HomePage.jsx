import { Link } from 'react-router-dom'

import ProductCard from '@/components/shop/ProductCard'
import { HERO_SLIDES, PRODUCTS } from '@/data/products'
import { ROUTES } from '@/routes/routes'

import Hero from './Hero'

// URL: /  Figma: Home - Desktop
export default function HomePage() {
  return (
    <>
      <Hero slides={HERO_SLIDES} />

      <section className="mx-auto max-w-[1440px] px-page py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl md:text-3xl">Shop The Latest</h2>
          <Link to={ROUTES.SHOP} className="text-sm text-gold underline-offset-4 hover:underline">
            View All
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
