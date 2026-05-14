import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import GithubIcon from '../_components/icons/GithubIcon'
import SectionHeader from '../_components/SectionHeader'
import FooterBar from '../_components/FooterBar'
import { PROJECTS } from '../_data/projects'

const SORTED = [...PROJECTS].sort((a, b) => {
  if (!a.started) return 1
  if (!b.started) return -1
  return a.started.localeCompare(b.started)
})

export default function TechPage() {
  return (
    <main className='flex min-h-screen flex-col bg-ink text-bone'>
      <title>wolfort — tech stack</title>

      <div className='mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-24 md:px-12 md:pt-32'>
        <nav className='flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-moon'>
          <Link
            href='/'
            className='inline-flex items-center gap-1.5 !text-moon hover:!text-accent'
          >
            <ArrowLeft size={12} strokeWidth={1.5} aria-hidden />
            back to index
          </Link>
          <span className='text-muted'>wolfort / tech</span>
        </nav>

        <SectionHeader number='∞' label='Tech stack'>
          <span className='block'>
            The <em className='italic text-accent'>stack</em>
          </span>
          <span className='block'>behind each project.</span>
        </SectionHeader>

        <p className='max-w-2xl text-base leading-relaxed text-moon'>
          各プロジェクトの言語・フレームワーク・インフラ・公開リポジトリ。
          長く運営しているサービスは何度かフルリプレースしているので、
          移行履歴も記録しています。
        </p>

        <div className='flex flex-col'>
          {SORTED.map((project) => (
            <article
              key={project.id}
              className='grid grid-cols-12 gap-x-4 gap-y-3 border-t border-slate-line py-6 last:border-b md:gap-x-8 md:py-8'
            >
              <div
                aria-hidden
                className='col-span-2 aspect-[4/3] w-full bg-cover bg-center md:col-span-1 md:w-14'
                style={{
                  backgroundImage: `url(${project.image})`,
                  filter: 'brightness(0.8) saturate(0.85)'
                }}
              />

              <div className='col-span-10 md:col-span-3'>
                <h3 className='font-display text-xl leading-tight text-bone md:text-2xl'>
                  <Link
                    href={project.href}
                    target='_blank'
                    className='!text-bone hover:!text-accent'
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className='mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-moon'>
                  {project.started && (
                    <span className='mr-2 text-muted'>{project.started}</span>
                  )}
                  {project.category}
                </p>
              </div>

              <div className='col-span-12 md:col-span-5'>
                <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-muted'>
                  Stack
                </p>
                <ul className='mt-2 flex flex-wrap gap-1.5'>
                  {[
                    ...project.stack,
                    ...(project.infra?.split(/,\s*/) ?? [])
                  ].map((tech) => (
                    <li
                      key={tech}
                      className='border border-slate-line px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-moon'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.notes && (
                  <p className='mt-3 font-mono text-[10px] tracking-[0.2em] text-muted'>
                    <span className='uppercase tracking-[0.3em]'>
                      Migration ·
                    </span>{' '}
                    <span className='text-moon'>{project.notes}</span>
                  </p>
                )}
              </div>

              <div className='col-span-12 flex flex-col gap-2 md:col-span-3'>
                {project.repos && project.repos.length > 0 && (
                  <div>
                    <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-muted'>
                      Source
                    </p>
                    <ul className='mt-1 flex flex-col gap-0.5'>
                      {project.repos.map((repo) => (
                        <li key={repo.href}>
                          <Link
                            href={repo.href}
                            target='_blank'
                            className='inline-flex items-center gap-1.5 font-mono text-xs !text-moon hover:!text-accent'
                          >
                            <GithubIcon size={11} />
                            {repo.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <FooterBar />
    </main>
  )
}
