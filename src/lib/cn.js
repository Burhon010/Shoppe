import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      fontFamily: ['sans', 'display'],
      colors: ['ink', 'muted', 'gold', 'line', 'surface'],
    },
  },
})

// Склеивает классы Tailwind без конфликтов: cn('px-4', isActive && 'text-gold', className)
export const cn = (...inputs) => twMerge(clsx(inputs))
