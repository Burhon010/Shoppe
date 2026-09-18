// Счётчик количества «- 1 +». Figma: Product - Desktop.
export default function QuantityStepper({ value, onChange }) {
  return (
    <div className="flex h-12 w-28 items-center justify-between border border-line px-4 text-sm">
      <button
        type="button"
        aria-label="Уменьшить количество"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="text-muted transition-colors hover:text-ink"
      >
        −
      </button>
      <span>{value}</span>
      <button
        type="button"
        aria-label="Увеличить количество"
        onClick={() => onChange(value + 1)}
        className="text-muted transition-colors hover:text-ink"
      >
        +
      </button>
    </div>
  )
}
