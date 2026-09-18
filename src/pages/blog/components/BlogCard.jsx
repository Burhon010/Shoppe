export default function BlogCard({ post, onReadMore }) {
  return (
    <article className="group min-w-0 animate-[blog-card-in_500ms_ease_both]">
      <button
        type="button"
        onClick={() => onReadMore(post)}
        className="block w-full text-left"
        aria-label={`Read ${post.title}`}
      >
        <div className="aspect-[1.5] overflow-hidden rounded-[3px] bg-surface">
          <img
            src={post.image}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </button>

      <p className="mt-3 text-[8px] leading-none text-muted">
        {post.category} - {post.date}
      </p>

      <h2 className="mt-1 text-[12px] leading-[1.25] text-ink">
        <button
          type="button"
          onClick={() => onReadMore(post)}
          className="text-left transition-colors duration-300 hover:text-gold"
        >
          {post.title}
        </button>
      </h2>

      <p className="mt-2 max-w-[290px] text-[8px] leading-[1.55] text-muted">{post.excerpt}</p>

      <button
        type="button"
        onClick={() => onReadMore(post)}
        className="mt-3 text-[8px] text-muted underline decoration-transparent underline-offset-2 transition-all duration-300 hover:text-ink hover:decoration-current"
      >
        Read More
      </button>
    </article>
  )
}
