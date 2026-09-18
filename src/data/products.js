/*
 * Моковые данные товаров (имена и цены со скринов Figma).
 * image — пока null (нет реальных фото), ProductCard рисует плейсхолдер.
 * Когда появятся экспортированные фото из Figma — положи их в src/assets/images
 * и подставь сюда.
 */
export const PRODUCTS = [
  {
    id: 'lira-earrings',
    name: 'Lira Earrings',
    price: 20,
    discountPercent: 21,
    image: null,
  },
  {
    id: 'hal-earrings',
    name: 'Hal Earrings',
    price: 25,
    image: null,
  },
  {
    id: 'kaede-hair-pin-set',
    name: 'Kaede Hair Pin Set Of 3',
    price: 30,
    image: null,
  },
  {
    id: 'hair-pin-set',
    name: 'Hair Pin Set of 3',
    price: 30,
    image: null,
  },
  {
    id: 'plaine-necklace',
    name: 'Plaine Necklace',
    price: 19,
    soldOut: true,
    image: null,
  },
  {
    id: 'yuki-hair-pin-set',
    name: 'Yuki Hair Pin Set of 3',
    price: 29,
    image: null,
  },
  {
    id: 'ollie-earrings',
    name: 'Ollie Earrings',
    price: 30,
    image: null,
  },
]

export const HERO_PRODUCT = {
  id: 'gold-big-hoops',
  name: 'Gold big hoops',
  price: 68,
  image: null,
}

export const getProductById = (id) => PRODUCTS.find((product) => product.id === id)
