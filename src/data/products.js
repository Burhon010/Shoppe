import { ROUTES, getProductPath } from '@/routes/routes'

import lira from '@/assets/images/lira-earrings.jpg'
import hal from '@/assets/images/hal-earrings.jpg'
import kaedeHairPin from '@/assets/images/kaede-hair-pin-set.jpg'
import plaineNecklace from '@/assets/images/plaine-necklace.jpg'
import yukiHairPin from '@/assets/images/yuki-hair-pin-set.jpg'
import heroGoldHoops from '@/assets/images/hero-gold-hoops.jpg'

/*
 * Моковые данные товаров (имена, цены и фото — вырезаны из скринов Figma
 * пользователя). У Ollie Earrings нет отдельного фото в макете — используем
 * то же, что у Hal Earrings (так в исходном макете). Фото Hair Pin Set of 3
 * на скрине было в hover-состоянии (иконки корзина/глаз/сердце впечатаны в
 * кадр без возможности чистого кропа) — временно показываем фото Yuki Hair
 * Pin Set (похожая категория), пока не появится чистый экспорт.
 */
export const PRODUCTS = [
  {
    id: 'lira-earrings',
    name: 'Lira Earrings',
    price: 20,
    discountPercent: 21,
    image: lira,
  },
  {
    id: 'hal-earrings',
    name: 'Hal Earrings',
    price: 25,
    image: hal,
  },
  {
    id: 'kaede-hair-pin-set',
    name: 'Kaede Hair Pin Set Of 3',
    price: 30,
    image: kaedeHairPin,
  },
  {
    id: 'hair-pin-set',
    name: 'Hair Pin Set of 3',
    price: 30,
    image: yukiHairPin,
  },
  {
    id: 'plaine-necklace',
    name: 'Plaine Necklace',
    price: 19,
    soldOut: true,
    image: plaineNecklace,
  },
  {
    id: 'yuki-hair-pin-set',
    name: 'Yuki Hair Pin Set of 3',
    price: 29,
    image: yukiHairPin,
  },
  {
    id: 'ollie-earrings',
    name: 'Ollie Earrings',
    price: 30,
    image: hal,
  },
]

export const HERO_PRODUCT = {
  id: 'gold-big-hoops',
  name: 'Gold big hoops',
  price: 68,
  image: heroGoldHoops,
}

export const getProductById = (id) => PRODUCTS.find((product) => product.id === id)

/*
 * Слайды Hero-карусели: промо-товар (без своей страницы — ведёт в каталог)
 * + несколько реальных товаров (ведут на свою страницу товара).
 */
export const HERO_SLIDES = [
  { ...HERO_PRODUCT, to: ROUTES.SHOP },
  ...['lira-earrings', 'hal-earrings', 'kaede-hair-pin-set', 'yuki-hair-pin-set'].map((id) => {
    const product = getProductById(id)
    return { ...product, to: getProductPath(product.id) }
  }),
]
