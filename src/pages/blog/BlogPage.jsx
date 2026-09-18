import { useState } from 'react'

import heroImage from '@/assets/images/blog-page-img-1.png'
import trendsImage from '@/assets/images/blog-page-img-2.png'
import avatarImage from '@/assets/images/blog-page-img-for-comments.png'
import Button from '@/components/ui/Button'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

// URL: /blog  Figma: Blog Post - Desktop
// Скругления углов у фото уже «запечены» в PNG из Figma — rounded-* не добавляем.
// У всех комментаторов одна и та же аватарка, как в макете.

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.'

const TRENDS = [
  'consectetur adipiscing elit. Aliquam placerat',
  'Lorem ipsum dolor sit amet consectetur',
  'sapien tortor faucibus augue',
  'a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis',
]

const TAGS = ['Fashion', 'Style', 'Season']

const SOCIALS = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
]

const INITIAL_COMMENTS = [
  {
    id: 1,
    author: 'Scarlet withch',
    date: '6 May, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.',
    replies: [
      {
        id: 2,
        author: 'Rahul Tron',
        date: '6 May, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit.',
      },
    ],
  },
  {
    id: 3,
    author: 'Scarlet withch',
    date: '6 May, 2020',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.',
    replies: [],
  },
]

const EMPTY_FORM = { name: '', email: '', website: '', comment: '' }

function Comment({ comment, onReply, isReply }) {
  return (
    <div className={cn('flex gap-4', isReply && 'mt-6 ml-10 md:ml-20')}>
      <img
        src={avatarImage}
        alt={comment.author}
        className="size-12 shrink-0 object-cover md:size-16"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <span className="text-sm font-medium">{comment.author}</span>
            <span className="text-xs text-muted">{comment.date}</span>
          </div>
          {!isReply && (
            <button
              type="button"
              onClick={() => onReply(comment.author)}
              className="text-xs text-muted transition-colors hover:text-ink"
            >
              ↩ Reply
            </button>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{comment.text}</p>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [comments, setComments] = useState(INITIAL_COMMENTS)
  const [form, setForm] = useState(EMPTY_FORM)

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleReply = (author) => {
    setForm((prev) => ({ ...prev, comment: `@${author} ` }))
    document.getElementById('blog-comment')?.focus()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.comment) return

    setComments((prev) => [
      ...prev,
      { id: Date.now(), author: form.name, date: 'Только что', text: form.comment, replies: [] },
    ])
    setForm(EMPTY_FORM)
  }

  const inputClass =
    'w-full border-b border-line pb-3 text-sm outline-none placeholder:text-muted focus:border-ink'

  return (
    <article className="mx-auto max-w-[1440px] px-page pt-12 pb-24 md:pt-16">
      <header className="text-center">
        <h1 className="font-display text-2xl md:text-3xl">Fast Fashion, And Faster Fashion</h1>
        <p className="mt-3 text-xs text-muted">
          by <span className="text-ink uppercase">Anny Johnson</span> - October 8,2020
        </p>
      </header>

      <img
        src={heroImage}
        alt="Руки с золотыми часами"
        className="mx-auto mt-10 w-full max-w-[1248px]"
      />

      <div className="mx-auto mt-12 max-w-[800px]">
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted">
          <p>{LOREM}</p>
          <p>{LOREM}</p>
        </div>

        <img src={trendsImage} alt="Руки с жемчужным ожерельем" className="mt-10 w-full" />

        <h2 className="mt-10 text-lg font-medium">Top trends</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">{LOREM}</p>
        <ul className="mt-4 flex list-disc flex-col gap-1 pl-5 text-sm text-muted">
          {TRENDS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <p>
            Tags <span className="ml-4 text-muted md:ml-8">{TAGS.join(', ')}</span>
          </p>
          <div className="flex items-center gap-4">
            <span>Share</span>
            <span className="h-px w-10 bg-ink md:w-16" />
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted transition-colors hover:text-ink"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-xl">Leave a Reply</h2>
          <p className="mt-2 text-xs text-muted">
            Your email address will not be published. Required fields are marked *
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
            <input
              value={form.name}
              onChange={update('name')}
              placeholder="Enter your name*"
              required
              className={inputClass}
            />
            <input
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="Enter your Email*"
              required
              className={inputClass}
            />
            <input
              value={form.website}
              onChange={update('website')}
              placeholder="Enter your Website"
              className={inputClass}
            />

            <label className="-mt-4 flex items-center gap-2 text-xs text-muted">
              <input type="checkbox" className="size-3.5" />
              Save my name, email, and website in this browser for the next time I comment
            </label>

            <textarea
              id="blog-comment"
              value={form.comment}
              onChange={update('comment')}
              placeholder="Your Comment*"
              required
              rows={3}
              className={cn(inputClass, 'resize-none')}
            />

            <Button type="submit" className="w-fit px-10">
              Post Comment
            </Button>
          </form>
        </section>

        <section className="mt-16">
          <h2 className="text-xl">Comments({comments.length})</h2>

          <ul className="mt-8 flex flex-col gap-10">
            {comments.map((comment) => (
              <li key={comment.id}>
                <Comment comment={comment} onReply={handleReply} />
                {comment.replies.map((reply) => (
                  <Comment key={reply.id} comment={reply} isReply />
                ))}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
