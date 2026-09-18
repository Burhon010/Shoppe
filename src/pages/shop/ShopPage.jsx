import { useMemo, useState } from 'react'

import ProductCard from '@/components/shop/ProductCard'
import SidebarFilter from '@/components/shop/SidebarFilter'
import { PRODUCTS } from '@/data/products'

// URL: /shop  Figma: Shop - Desktop (ShopSidebarPage)
export default function ShopPage() {
  const [search, setSearch] = useState('')

  const products = useMemo(
    () => PRODUCTS.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
    [search],
  )

  return (
    <div className="mx-auto max-w-[1440px] px-page py-16">
      <h1 className="font-display text-3xl md:text-4xl">Shop The Latest</h1>

      <div className="mt-10 grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
        <SidebarFilter search={search} onSearchChange={setSearch} />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {products.length === 0 && (
            <p className="col-span-full py-10 text-center text-muted">Ничего не найдено</p>
          )}
        </div>
      </div>
    </div>
  )
}
