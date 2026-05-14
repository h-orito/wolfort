import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import GithubIcon from './_components/icons/GithubIcon'
import ScrollingHeader from './ScrollingHeader'
import SectionHeader from './_components/SectionHeader'
import FeaturedCard from './_components/FeaturedCard'
import ProjectIndex from './_components/ProjectIndex'
import ContactList from './_components/ContactList'
import FooterBar from './_components/FooterBar'
import { FEATURED, INDEX_PROJECTS, PROJECTS } from './_data/projects'

export default function TopPage() {
  return (
    <main className='flex min-h-screen flex-col bg-ink text-bone'>
      <title>wolfort — selected projects by ort</title>
      <ScrollingHeader />

      <div className='mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pt-24 md:gap-40 md:px-12 md:pt-32'>
        {/* 01 / PROFILE */}
        <section id='profile' className='scroll-mt-12'>
          <SectionHeader number='01' label='Profile'>
            <span className='block'>
              Small things,{' '}
              <em className='italic text-accent'>mostly wolves</em>,
            </span>
            <span className='block'>made after hours.</span>
          </SectionHeader>

          <div className='mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16'>
            <div className='md:col-span-7'>
              <p className='text-base leading-relaxed text-moon md:text-[17px] md:leading-[1.7]'>
                趣味でWebサービスを開発・運営している、関東在住のITエンジニアです。
                本業はバックエンド側で、フロントエンドは独学で勉強しながらやっています。
                人狼にまつわる長期Webゲーム、ロールプレイの遊び場、シナリオ通過記録、
                ちょっとしたツールなど、思いつくままに作って公開しています。
              </p>
            </div>
            <div className='md:col-span-5 md:pl-8'>
              <dl className='grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.2em] [&>dt]:uppercase [&>dt]:tracking-[0.25em]'>
                <dt className='text-muted'>Name</dt>
                <dd className='text-bone'>ort</dd>
                <dt className='text-muted'>Role</dt>
                <dd className='text-bone'>Backend engineer / hobbyist</dd>
                <dt className='text-muted'>Based</dt>
                <dd className='text-bone'>Kanto, JP</dd>
                <dt className='text-muted'>GitHub</dt>
                <dd>
                  <Link
                    href='https://github.com/h-orito'
                    target='_blank'
                    className='inline-flex items-center gap-1.5 !text-bone hover:!text-accent'
                  >
                    <GithubIcon size={11} />
                    h-orito
                  </Link>
                </dd>
                <dt className='text-muted'>Projects</dt>
                <dd className='text-bone'>{PROJECTS.length} sites</dd>
              </dl>
            </div>
          </div>
        </section>

        {/* 02 / FEATURED */}
        <section id='works' className='scroll-mt-12'>
          <SectionHeader number='02' label='Featured'>
            <span className='block'>Three I keep</span>
            <span className='block'>
              <em className='italic text-accent'>coming back</em> to.
            </span>
          </SectionHeader>

          <div className='mt-16 flex flex-col gap-24 md:gap-32'>
            {FEATURED.map((project, i) => (
              <FeaturedCard
                key={project.id}
                project={project}
                reverse={i % 2 === 1}
              />
            ))}
          </div>
        </section>

        {/* 03 / INDEX */}
        <section id='index' className='scroll-mt-12'>
          <SectionHeader number='03' label='Other projects'>
            <span className='block'>
              And <em className='italic text-accent'>more</em>
            </span>
            <span className='block'>small things.</span>
          </SectionHeader>

          <div className='mt-12'>
            <ProjectIndex projects={INDEX_PROJECTS} />
          </div>

          <div className='mt-10 flex justify-end'>
            <Link
              href='/tech'
              className='inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-moon hover:text-accent'
            >
              full tech stack
              <ArrowRight size={12} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>
        </section>

        {/* 04 / CONTACT */}
        <section id='contact' className='scroll-mt-12'>
          <SectionHeader number='04' label='Contact'>
            <span className='block'>Howl at me</span>
            <span className='block'>
              <em className='italic text-accent'>anytime</em>.
            </span>
          </SectionHeader>

          <div className='mt-12'>
            <ContactList />
          </div>
        </section>
      </div>

      <FooterBar />
    </main>
  )
}
