export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  PRODUCT: '/product/:productId',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ACCOUNT: '/account',
  BLOG: '/blog',
  OUR_STORY: '/our-story',
  CONTACT: '/contact',
}

export const getProductPath = (productId) => `/product/${productId}`
