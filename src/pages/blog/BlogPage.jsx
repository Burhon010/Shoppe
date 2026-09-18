import { useEffect, useMemo, useState } from 'react'

import { SearchIcon } from '@/components/ui/icons'
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/data/blog'

import BlogArticleModal from './components/BlogArticleModal'
import BlogCard from './components/BlogCard'

const POSTS_PER_PAGE = 4

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState(null)

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase()

    return BLOG_POSTS.filter((post) => {
      const matchesCategory = !category || post.category === category
      const searchableText = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()
      const matchesSearch = !query || searchableText.includes(query)

      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const pageCount = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const visiblePosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [category, search])

  useEffect(() => {
    if (pageCount > 0 && page > pageCount) setPage(pageCount)
  }, [page, pageCount])

  const handleCategoryChange = (nextCategory) => {
    setCategory((current) => (current === nextCategory ? '' : nextCategory))
  }

  return (
    <section className="mx-auto max-w-[1440px] px-page py-10 md:py-12 lg:py-14">
      <div className="grid gap-9 md:grid-cols-[150px_minmax(0,1fr)] md:gap-7 lg:grid-cols-[175px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[180px_minmax(0,650px)] xl:justify-center xl:gap-7">
        <aside className="animate-[blog-sidebar-in_500ms_ease-out] md:pt-1">
          <h1 className="font-display text-[18px] leading-none md:text-[19px]">Blog</h1>

          <div className="mt-7">
            <label className="sr-only" htmlFor="blog-search">
              Search articles
            </label>
            <div className="flex items-center border-b border-line pb-1">
              <input
                id="blog-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search..."
                className="min-w-0 flex-1 bg-transparent text-[8px] text-ink outline-none placeholder:text-muted"
              />
              <SearchIcon className="size-3 shrink-0 text-ink" />
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-[9px] font-medium">Categories</h2>
            <ul className="mt-3 space-y-2">
              {BLOG_CATEGORIES.map((item) => {
                const isActive = category === item

                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => handleCategoryChange(item)}
                      aria-pressed={isActive}
                      className={`text-left text-[8px] transition-all duration-300 hover:translate-x-0.5 hover:text-ink ${
                        isActive ? 'font-medium text-ink' : 'text-muted'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        <div className="min-w-0">
          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-9">
              {visiblePosts.map((post) => (
                <BlogCard key={post.id} post={post} onReadMore={setSelectedPost} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-52 items-center justify-center border border-dashed border-line px-5 text-center text-xs text-muted">
              No articles found.
            </div>
          )}

          {pageCount > 1 && (
            <nav className="mt-9 flex items-center justify-center gap-2" aria-label="Blog pagination">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPage(item)}
                  aria-current={page === item ? 'page' : undefined}
                  className={`flex size-6 items-center justify-center border text-[9px] transition-all duration-300 ${
                    page === item
                      ? 'border-ink bg-ink text-white'
                      : 'border-line text-muted hover:border-ink hover:text-ink'
                  }`}
                >
                  {item}
                </button>
              ))}

              {page < pageCount && (
                <button
                  type="button"
                  onClick={() => setPage((current) => current + 1)}
                  aria-label="Next page"
                  className="flex size-6 items-center justify-center border border-line text-[9px] text-muted transition-all duration-300 hover:border-ink hover:text-ink"
                >
                  ›
                </button>
              )}
            </nav>
          )}
        </div>
      </div>

      <BlogArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  )
}
