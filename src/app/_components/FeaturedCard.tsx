import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import GithubIcon from './icons/GithubIcon'
import type { Project } from '../_data/projects'

type Props = {
  project: Project
  reverse?: boolean
}

export default function FeaturedCard({ project, reverse }: Props) {
  return (
    <article
      className={`grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <Link
        href={project.href}
        target='_blank'
        className='group relative col-span-1 block aspect-[16/10] overflow-hidden md:col-span-7'
      >
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent' />
        <div className='absolute inset-0 ring-1 ring-inset ring-slate-line' />
      </Link>

      <div className='col-span-1 flex flex-col justify-center md:col-span-5'>
        <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
          <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-accent'>
            {project.category}
          </p>
          {project.started && (
            <p className='font-mono text-[10px] uppercase tracking-[0.25em] text-muted'>
              since {project.started}
            </p>
          )}
        </div>
        <h3 className='display-card mt-3 font-display text-3xl leading-tight text-bone md:text-5xl'>
          <Link
            href={project.href}
            target='_blank'
            className='!text-bone transition-colors hover:!text-accent'
          >
            {project.title}
          </Link>
        </h3>

        {project.longDescription && (
          <p className='mt-5 max-w-md text-sm leading-relaxed text-moon md:text-[15px]'>
            {project.longDescription}
          </p>
        )}

        <ul className='mt-6 flex flex-wrap gap-2'>
          {project.stack.slice(0, 6).map((tech) => (
            <li
              key={tech}
              className='border border-slate-line px-2 py-1 font-mono text-[10px] tracking-wider text-moon'
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className='mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em]'>
          <Link
            href={project.href}
            target='_blank'
            className='inline-flex items-center gap-1.5 !text-bone transition-colors hover:!text-accent'
          >
            visit site
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden />
          </Link>
          {project.repos?.map((repo) => (
            <Link
              key={repo.href}
              href={repo.href}
              target='_blank'
              className='inline-flex items-center gap-1.5 text-moon hover:text-accent'
            >
              <GithubIcon size={12} />
              {repo.label.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
