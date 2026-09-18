import { useEffect, useState } from 'react'

const STORAGE_KEY = 'shoppe-theme'

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    // localStorage недоступен — используем светлую тему по умолчанию
  }
  return 'light'
}

// const { theme, toggleTheme } = useTheme() — переключает чёрный/белый фон сайта
export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage недоступен — тема живёт до перезагрузки
    }
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
