import lira from '@/assets/images/lira-earrings.jpg'
import hal from '@/assets/images/hal-earrings.jpg'
import kaedeHairPin from '@/assets/images/kaede-hair-pin-set.jpg'
import hairPinSet from '@/assets/images/hair-pin-set.jpg'
import plaineNecklace from '@/assets/images/plaine-necklace.jpg'
import yukiHairPin from '@/assets/images/yuki-hair-pin-set.jpg'
import heroGoldHoops from '@/assets/images/hero-gold-hoops.jpg'

/*
 * Моковые данные товаров (имена, цены и фото — вырезаны из скринов Figma
 * пользователя). У Ollie Earrings нет отдельного фото в макете — используем
 * то же, что у Hal Earrings (так в исходном макете).
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
    // На скрине это фото было снято в hover-состоянии (видны иконки корзина/глаз/сердце) —
    // чистой версии не было, стоит заменить, когда появится.
    image: hairPinSet,
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
