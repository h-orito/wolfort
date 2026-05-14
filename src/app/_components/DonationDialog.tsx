'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Heart } from 'lucide-react'

const ITEMS = [
  {
    label: 'ほしいものリスト',
    href: 'https://www.amazon.jp/hz/wishlist/ls/1KZSJAJS1ETW4?ref_=wl_share'
  },
  { label: 'Pixiv Fanbox', href: 'https://ort.fanbox.cc/' },
  {
    label: 'Amazonギフト券（Eメールタイプ）',
    href: 'https://www.amazon.co.jp/dp/B004N3APGO',
    note: 'wolfort★googlegroups.com を指定（★→@）'
  },
  {
    label: 'Amazonアソシエイト経由の購入',
    href: 'https://amzn.to/48auG7Q',
    note: '紹介料が ort に入ります'
  }
]

export default function DonationDialog() {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-moon transition-colors hover:text-accent'
      >
        <Heart size={12} strokeWidth={1.5} aria-hidden />
        donation
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setOpen(false)
        }}
        className='m-auto max-w-md border border-slate-line bg-midnight p-0 text-bone backdrop:bg-ink/80 backdrop:backdrop-blur-sm'
      >
        <div className='p-8 md:p-10'>
          <div className='flex items-baseline justify-between'>
            <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-accent'>
              [ 0X ] Donation
            </p>
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='font-mono text-[10px] uppercase tracking-[0.3em] text-moon hover:text-accent'
              aria-label='Close'
            >
              close ×
            </button>
          </div>
          <hr className='hairline mt-3' />

          <h3 className='mt-6 font-display text-2xl text-bone md:text-3xl'>
            Support <span className='italic'>this lab.</span>
          </h3>
          <p className='mt-3 text-sm text-moon'>
            応援していただける方は以下からどうぞ。
          </p>

          <ul className='mt-6 flex flex-col'>
            {ITEMS.map((item) => (
              <li
                key={item.href}
                className='border-t border-slate-line py-3 last:border-b'
              >
                <Link
                  href={item.href}
                  target='_blank'
                  className='flex items-center justify-between gap-4 !text-bone transition-colors hover:!text-accent'
                >
                  <span className='flex flex-col'>
                    <span className='text-sm'>{item.label}</span>
                    {item.note && (
                      <span className='mt-1 font-mono text-[10px] tracking-wide text-muted'>
                        {item.note}
                      </span>
                    )}
                  </span>
                  <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  )
}
