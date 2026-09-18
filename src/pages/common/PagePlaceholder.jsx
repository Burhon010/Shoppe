// ВРЕМЕННАЯ заглушка страницы — удаляется, когда страницу свёрстает её владелец.
export default function PagePlaceholder({ title }) {
  return (
    <div className="mx-auto max-w-[1440px] px-page py-24">
      <h1 className="font-display text-2xl">{title}</h1>
      <p className="mt-4 text-sm text-muted">Страница ещё не свёрстана</p>
    </div>
  )
}
