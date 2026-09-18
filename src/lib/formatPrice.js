// 20 → "$ 20,00"
export const formatPrice = (value) => `$ ${value.toFixed(2).replace('.', ',')}`
