import Link from 'next/link'
import { Inbox, Mail } from 'lucide-react'
import type { ReactNode } from 'react'
import TwitterIcon from './icons/TwitterIcon'
import BlueskyIcon from './icons/BlueskyIcon'
import MastodonIcon from './icons/MastodonIcon'

type Item = {
  icon: ReactNode
  label: string
  value: string
  href?: string
  note?: string
}

const ICON_SIZE = 13

const PRIMARY: Item[] = [
  {
    icon: <TwitterIcon size={ICON_SIZE} />,
    label: 'Twitter (X)',
    value: '@ort_dev',
    href: 'https://twitter.com/ort_dev'
  },
  {
    icon: <BlueskyIcon size={ICON_SIZE} />,
    label: 'Bluesky',
    value: '@wolfort.dev',
    href: 'https://bsky.app/profile/wolfort.dev',
    note: '避難用'
  },
  {
    icon: <Mail size={ICON_SIZE} strokeWidth={1.5} aria-hidden />,
    label: 'Email',
    value: 'wolfort★googlegroups.com',
    note: '★→@'
  },
  {
    icon: <Inbox size={ICON_SIZE} strokeWidth={1.5} aria-hidden />,
    label: '目安箱',
    value: 'forms.gle/RiXBoGbh4vfpBxYz7',
    href: 'https://forms.gle/RiXBoGbh4vfpBxYz7'
  }
]

const NOTICE_ONLY: Item[] = [
  {
    icon: <TwitterIcon size={ICON_SIZE} />,
    label: '運営告知 (X)',
    value: '@ort_dev_notice',
    href: 'https://twitter.com/ort_dev_notice'
  },
  {
    icon: <MastodonIcon size={ICON_SIZE} />,
    label: 'Mastodon',
    value: 'mstdn.jp/@ort_dev',
    href: 'https://mstdn.jp/@ort_dev',
    note: '自動通知'
  }
]

export default function ContactList() {
  return (
    <div className='grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-16'>
      <ContactBlock heading='Reach me' items={PRIMARY} />
      <ContactBlock heading='Announcements only' items={NOTICE_ONLY} />
    </div>
  )
}

const ContactBlock = ({
  heading,
  items
}: {
  heading: string
  items: Item[]
}) => (
  <div>
    <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-accent'>
      {heading}
    </p>
    <ul className='mt-6 flex flex-col'>
      {items.map((item) => (
        <li
          key={item.label + item.value}
          className='flex items-baseline gap-3 border-t border-slate-line py-3 last:border-b'
        >
          <span className='flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-moon'>
            <span className='inline-flex w-[13px] justify-center text-moon'>
              {item.icon}
            </span>
            {item.label}
          </span>
          <span
            className='mx-1 flex-1 self-end border-b border-dotted border-slate-line/70'
            aria-hidden
          />
          <span className='text-right text-sm text-bone'>
            {item.href ? (
              <Link
                href={item.href}
                target='_blank'
                className='!text-bone hover:!text-accent'
              >
                {item.value}
              </Link>
            ) : (
              item.value
            )}
            {item.note && (
              <span className='ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted'>
                ({item.note})
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  </div>
)
