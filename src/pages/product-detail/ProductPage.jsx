import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ProductCard from '@/components/shop/ProductCard'
import Button from '@/components/ui/Button'
import Rating from '@/components/ui/Rating'
import { CheckIcon, HeartIcon } from '@/components/ui/icons'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/formatPrice'
import { PRODUCTS, getProductById } from '@/data/products'
import { ROUTES } from '@/routes/routes'

import Gallery from './components/Gallery'
import ProductTabs from './components/ProductTabs'
import QuantityStepper from './components/QuantityStepper'

// URL: /product/:productId  Figma: Product - Desktop
export default function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addItem } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [justAdded, setJustAdded] = useState(false)

  const similarItems = PRODUCTS.filter((p) => p.id !== productId).slice(0, 3)

  if (!product) {
    return (
      <div className="mx-auto max-w-[1440px] px-page py-24 text-center">
        <p>Товар не найден</p>
        <Link to={ROUTES.SHOP} className="mt-4 inline-block text-gold underline">
          Вернуться в каталог
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product.id, quantity)
    setJustAdded(true)
  }

  return (
    <div>
      {justAdded && (
        <div className="flex items-center justify-between bg-surface px-page py-4 text-sm">
          <span className="flex items-center gap-2">
            <CheckIcon className="size-5 text-gold" />
            The item added to your Shopping bag.
          </span>
          <Link to={ROUTES.CART} className="text-gold uppercase hover:underline">
            View Cart
          </Link>
        </div>
      )}

      <div className="mx-auto max-w-[1440px] px-page py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="min-w-0">
            <Gallery image={product.image} name={product.name} />
          </div>

          <div className="min-w-0">
            <h1 className="font-display text-2xl">{product.name}</h1>
            <p className="mt-2 text-gold">{formatPrice(product.price)}</p>

            <div className="mt-4 flex items-center gap-3">
              <Rating value={5} />
              <span className="text-xs text-muted">1 customer review</span>
            </div>

            <p className="mt-4 max-w-md text-sm text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a
              volutpat hendrerit, sapien tortor faucibus augue, a maximus ex vitae libero. Sed quis
              mauris eget arcu facilisis consequat sed eu felis.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <QuantityStepper value={quantity} onChange={setQuantity} />
              <Button onClick={handleAddToCart} className="flex-1 md:flex-none md:px-16">
                Add to Cart
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-line pt-6 text-muted">
              <button type="button" aria-label="В избранное" className="hover:text-ink">
                <HeartIcon className="size-5" />
              </button>
              <span className="h-4 w-px bg-line" aria-hidden="true" />
              <span className="text-xs">Share on socials →</span>
            </div>

            <div className="mt-6 flex flex-col gap-1 text-sm">
              <p>
                <span className="text-muted">SKU:</span> 12
              </p>
              <p>
                <span className="text-muted">Categories:</span> Fashion, Style
              </p>
            </div>
          </div>
        </div>

        <ProductTabs productName={product.name} />

        <section className="mt-16">
          <h2 className="font-display text-2xl">Similar Items</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8">
            {similarItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
