# SHOPPE — ювелирный интернет-магазин

Командный проект, свёрстанный по референсам из Figma («SHOPPE» — Home/Shop/Product).

**Стек:** React 19 · Vite · Tailwind CSS v4 · React Router v7 · JavaScript

## Запуск

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # продакшн-сборка в /dist
npm run lint        # проверка ESLint
npm run format      # автоформат Prettier
```

## Структура

```
src/
├── main.jsx                точка входа
├── App.jsx                 корень, <CartProvider> + <RouterProvider>
├── routes/
│   ├── AppRoutes.jsx        ВСЕ маршруты
│   └── routes.js            константы путей
├── components/
│   ├── layout/               Header, Footer, MainLayout
│   ├── ui/                   Button, Rating, icons
│   └── shop/                 ProductCard, SidebarFilter — общие для Home/Shop
├── pages/
│   ├── home/                 HomePage, Hero
│   ├── shop/                 ShopPage (листинг с фильтрами)
│   ├── product-detail/       ProductPage + components/ (Gallery, ProductTabs, QuantityStepper)
│   └── common/                PagePlaceholder — временная заглушка для остальных страниц
├── context/                  CartProvider, cartContext.js
├── hooks/                    useCart
├── data/                      products.js, reviews.js — моковые данные
└── index.css                 Tailwind + дизайн-токены
```

## Готово / в работе

| Страница             | Статус                                         |
| --------------------- | ----------------------------------------------- |
| Home                  | ✅ Header, Hero (промо-товар), Shop The Latest, Footer |
| Shop (листинг)        | ✅ Сайдбар-фильтры (поиск работает, остальное — визуал), сетка товаров |
| Product (карточка)    | ✅ Галерея, qty-степпер, табы (Description/Aditional information/Reviews), форма отзыва, Similar Items |
| Cart / Checkout / Account / Blog / Our Story / Contact | ⏳ заглушки (`PagePlaceholder`) — ждут своих исполнителей |

## Известные ограничения

- **Нет ссылки на Figma** — цвета/шрифты/отступы подобраны по скриншотам на глаз. Токены в `src/index.css` (`--color-gold`, `--color-ink` и т.д.) стоит сверить, когда появится доступ к макету.
- **Фото товаров** — вырезаны из присланных скриншотов (не идеальное качество/кадрирование). У `Ollie Earrings` нет отдельного фото — переиспользует `Hal Earrings`, как в макете. У `Hair Pin Set of 3` на фото видны hover-иконки (впечатаны в исходный скриншот) — стоит заменить на чистый экспорт.
- Слайдер в Hero и слайдер цены в фильтрах — визуальные, без реальной логики перетаскивания.

## Правила команды

1. Импорты через `@`: `import Button from '@/components/ui/Button'`.
2. Пути только из `routes/routes.js`, не пиши `'/shop'` строкой.
3. Цвета/шрифты — только токены из `index.css` (`bg-ink`, `text-gold`, `font-display`...), не хардкодь hex.
4. Перед пушем: `npm run format && npm run lint`.
