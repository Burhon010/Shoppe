import { useEffect } from 'react'

import { CloseIcon } from '@/components/ui/icons'

export default function BlogArticleModal({ post, onClose }) {
  useEffect(() => {
    if (!post) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [post, onClose])

  if (!post) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-5 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <article className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-2xl animate-[blog-modal-in_300ms_ease-out]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-4 right-4 z-10 flex size-8 items-center justify-center bg-white/90 text-ink transition-colors hover:text-gold"
        >
          <CloseIcon className="size-4" />
        </button>

        <img src={post.image} alt="" className="aspect-[1.5] w-full object-cover" />

        <div className="p-6 md:p-10">
          <p className="text-[9px] text-muted">
            {post.category} - {post.date}
          </p>
          <h2 id="blog-modal-title" className="mt-2 font-display text-2xl md:text-3xl">
            {post.title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted">
            {post.excerpt} This article explores the details, textures and ideas behind the
            collection, with an emphasis on pieces that feel elegant, easy and timeless.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-7 border-b border-ink pb-1 text-xs tracking-[0.12em] uppercase transition-colors hover:text-gold hover:border-gold"
          >
            Close
          </button>
        </div>
      </article>
    </div>
  )
}
