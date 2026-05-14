import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../_data/projects'

type Props = {
  projects: Project[]
}

export default function ProjectIndex({ projects }: Props) {
  return (
    <ul className='w-full'>
      {projects.map((project) => (
        <li key={project.id} className='group'>
          <Link
            href={project.href}
            target='_blank'
            className='!text-bone'
            aria-label={`${project.title} を新しいタブで開く`}
          >
            <article className='relative grid grid-cols-12 items-center gap-3 border-t border-slate-line py-5 transition-colors duration-300 group-hover:bg-midnight/60 md:gap-5 md:py-6'>
              <div
                aria-hidden
                className='col-span-2 aspect-[4/3] w-full bg-cover bg-center transition-[filter] duration-300 md:col-span-1 md:w-14'
                style={{
                  backgroundImage: `url(${project.image})`,
                  filter: 'brightness(0.8) saturate(0.85)'
                }}
              />

              <div className='col-span-10 flex flex-col gap-1 md:col-span-5'>
                <h3 className='font-display text-xl text-bone transition-colors group-hover:text-accent md:text-2xl'>
                  {project.title}
                </h3>
                <p className='font-mono text-[10px] uppercase tracking-[0.25em] text-moon'>
                  {project.started && (
                    <span className='mr-2 text-muted'>{project.started}</span>
                  )}
                  {project.category}
                </p>
              </div>

              <div className='col-span-12 md:col-span-5'>
                <ul className='flex flex-wrap gap-1.5'>
                  {project.stack.slice(0, 5).map((tech) => (
                    <li
                      key={tech}
                      className='border border-slate-line px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-moon'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <span
                aria-hidden
                className='absolute right-0 top-1/2 -translate-y-1/2 text-muted transition-all duration-300 group-hover:right-1 group-hover:text-accent md:static md:col-span-1 md:flex md:translate-y-0 md:justify-end'
              >
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </span>
            </article>
          </Link>
        </li>
      ))}
      <li>
        <hr className='hairline' />
      </li>
    </ul>
  )
}
