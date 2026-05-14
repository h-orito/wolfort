import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'
import DonationDialog from './DonationDialog'

export default function FooterBar() {
  return (
    <footer className='mt-32 w-full border-t border-slate-line px-6 py-10 md:px-16'>
      <div className='mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-end'>
        <div>
          <p className='font-display text-xl italic text-bone'>wolfort</p>
          <p className='mt-2 font-mono text-[10px] tracking-[0.25em] text-muted'>
            <span className='uppercase tracking-[0.3em]'>
              © 2026 · built by
            </span>
            <span className='ml-2'>ort</span>
          </p>
        </div>
        <nav className='flex flex-wrap items-center gap-x-6 gap-y-2'>
          <Link
            href='https://github.com/h-orito'
            target='_blank'
            className='inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-moon hover:text-accent'
          >
            <GithubIcon size={12} />
            github
          </Link>
          <Link
            href='/tech'
            className='inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-moon hover:text-accent'
          >
            tech stack
            <ArrowRight size={12} strokeWidth={1.5} aria-hidden />
          </Link>
          <DonationDialog />
        </nav>
      </div>
    </footer>
  )
}
