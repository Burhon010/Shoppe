import { useState } from 'react'

import { ChevronIcon, SearchIcon } from '../ui/icons'

// Тумблер on/off (On sale / In stock)
function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between py-2 text-sm">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <span className="relative h-5 w-9 rounded-full bg-line transition-colors peer-checked:bg-ink">
        <span className="absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
      </span>
    </label>
  )
}

// Боковая панель фильтров каталога. Figma: Shop - Desktop.
export default function SidebarFilter({ search, onSearchChange, className }) {
  const [onSale, setOnSale] = useState(false)
  const [inStock, setInStock] = useState(false)

  return (
    <aside className={className}>
      <div className="flex items-center justify-between border-b border-line pb-3">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
          className="w-full text-sm outline-none placeholder:text-muted"
        />
        <SearchIcon className="size-4 shrink-0 text-muted" />
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-between border-b border-line py-3 text-sm"
      >
        Shop By
        <ChevronIcon className="size-4" />
      </button>

      <button
        type="button"
        className="flex w-full items-center justify-between border-b border-line py-3 text-sm"
      >
        Sort By
        <ChevronIcon className="size-4" />
      </button>

      <div className="py-4">
        <div className="h-1 rounded-full bg-line">
          <div className="h-1 w-2/3 rounded-full bg-ink" />
        </div>
        <p className="mt-3 text-sm">
          Price: $40 – $180 <span className="ml-2 text-gold">Filter</span>
        </p>
      </div>

      <Toggle label="On sale" checked={onSale} onChange={setOnSale} />
      <Toggle label="In stock" checked={inStock} onChange={setInStock} />
    </aside>
  )
}
