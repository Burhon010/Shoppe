import { useTheme } from '@/hooks/useTheme'

import { MoonIcon, SunIcon } from './icons'

// Кнопка «включить/выключить чёрный фон» — переключает тему всего сайта.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
      aria-pressed={isDark}
      className="transition-colors hover:text-gold"
    >
      {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
    </button>
  )
}
