import { useState } from 'react'

import { ArrowIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../ui/icons'

const LINKS = [
  { title: 'Contact', href: '#' },
  { title: 'Terms of Services', href: '#' },
  { title: 'Shipping and Returns', href: '#' },
]

const SOCIALS = [
  { title: 'LinkedIn', Icon: LinkedinIcon },
  { title: 'Facebook', Icon: FacebookIcon },
  { title: 'Instagram', Icon: InstagramIcon },
  { title: 'Twitter', Icon: TwitterIcon },
]

// Figma: Home/Shop/Product — Footer. Ссылки, форма подписки, соцсети, копирайт.
export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-page py-10 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-wide text-muted uppercase">
          {LINKS.map((link) => (
            <li key={link.title}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-xs items-end gap-2 border-b border-line pb-2 md:w-72"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Give an email, get the newsletter."
            className="w-full bg-transparent text-sm text-muted outline-none placeholder:text-muted"
          />
          <button type="submit" aria-label="Подписаться" className="shrink-0 text-ink">
            <ArrowIcon className="size-4" />
          </button>
        </form>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-4 border-t border-line px-page py-6 text-xs text-muted md:flex-row md:justify-between">
        <p>
          © 2021 Shelly. <span className="underline">Terms of use</span> and{' '}
          <span className="underline">privacy policy</span>.
        </p>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ title, Icon }) => (
            <a key={title} href="#" aria-label={title} className="transition-colors hover:text-ink">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
