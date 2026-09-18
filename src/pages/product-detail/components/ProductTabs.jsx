import { useState } from 'react'

import Button from '@/components/ui/Button'
import { REVIEWS } from '@/data/reviews'
import { cn } from '@/lib/cn'

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.'

const ADDITIONAL_INFO = [
  { label: 'Weight', value: '0.3 kg' },
  { label: 'Dimentions', value: '15 x 10 x 1 cm' },
  { label: 'Colours', value: 'Black, Browns, White' },
  { label: 'Material', value: 'Metal' },
]

function StarInput({ value, onChange }) {
  return (
    <div className="flex gap-1 text-xl">
      {Array.from({ length: 5 }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`${i + 1} звёзд`}
          onClick={() => onChange(i + 1)}
          className={i < value ? 'text-ink' : 'text-line'}
        >
          ★
        </button>
      ))}
    </div>
  )
}

// Табы «Description / Aditional information / Reviews(N)». Figma: Product - Desktop.
// Названия табов и опечатки ("Aditional", "Dimentions") — как в макете, не поправлял.
export default function ProductTabs({ productName }) {
  const [tab, setTab] = useState('description')
  const [reviews, setReviews] = useState(REVIEWS)
  const [rating, setRating] = useState(0)
  const [form, setForm] = useState({ text: '', name: '', email: '' })

  const tabs = [
    { id: 'description', title: 'Description' },
    { id: 'additional', title: 'Aditional information' },
    { id: 'reviews', title: `Reviews(${reviews.length})` },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.text || !form.name || !form.email || !rating) return

    setReviews((prev) => [
      { id: Date.now(), author: form.name, date: 'Только что', rating, text: form.text },
      ...prev,
    ])
    setForm({ text: '', name: '', email: '' })
    setRating(0)
  }

  return (
    <div className="mt-16">
      <div className="flex gap-10 border-b border-line text-sm">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              '-mb-px border-b pb-3 transition-colors',
              tab === t.id ? 'border-ink text-ink' : 'border-transparent text-muted',
            )}
          >
            {t.title}
          </button>
        ))}
      </div>

      {tab === 'description' && <p className="mt-8 max-w-3xl text-sm text-muted">{DESCRIPTION}</p>}

      {tab === 'additional' && (
        <dl className="mt-8 flex flex-col gap-2 text-sm">
          {ADDITIONAL_INFO.map((row) => (
            <div key={row.label} className="flex gap-2">
              <dt className="font-medium">{row.label}:</dt>
              <dd className="text-muted">{row.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {tab === 'reviews' && (
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm">
              {reviews.length} Reviews for {productName.toLowerCase()}
            </h3>

            <ul className="mt-4 flex flex-col divide-y divide-line">
              {reviews.map((review) => (
                <li key={review.id} className="py-4">
                  <div className="flex items-baseline gap-3 text-sm">
                    <span className="font-medium">{review.author}</span>
                    <span className="text-xs text-muted">{review.date}</span>
                  </div>
                  <div className="mt-1 flex gap-0.5 text-sm">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < review.rating ? 'text-ink' : 'text-line'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted">{review.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-sm font-medium">Add a Review</h3>
            <p className="text-xs text-muted">
              Your Email Address Will Not Be Published. Required Fields Are Marked *
            </p>

            <input
              value={form.text}
              onChange={(e) => setForm((p) => ({ ...p, text: e.target.value }))}
              placeholder="Your Review*"
              required
              className="border-b border-line pb-2 text-sm outline-none placeholder:text-muted"
            />
            <input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              placeholder="Enter your name*"
              required
              className="border-b border-line pb-2 text-sm outline-none placeholder:text-muted"
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="Enter your Email*"
              required
              className="border-b border-line pb-2 text-sm outline-none placeholder:text-muted"
            />

            <label className="flex items-center gap-2 text-xs text-muted">
              <input type="checkbox" className="size-3.5" />
              Save my name, email, and website in this browser for the next time I comment
            </label>

            <div>
              <p className="text-sm">Your Rating*</p>
              <StarInput value={rating} onChange={setRating} />
            </div>

            <Button type="submit" className="w-fit px-10">
              Submit
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}
