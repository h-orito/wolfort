const IMAGES = [
  '/profile/image/besten.png',
  '/profile/image/chat-role-play.webp',
  '/profile/image/scenario-tuker.webp',
  '/profile/image/wolf-mansion.png',
  '/profile/image/wolf-mansion-analyzer.png',
  '/profile/image/wolf-mansion-gm-tools.jpeg',
  '/profile/image/howling-wolf.jpg',
  '/profile/image/firewolf.jpg',
  '/profile/image/lastwolf.jpg',
  '/profile/image/wolfbbs-stats.jpeg',
  '/profile/image/wordwolf.png',
  '/profile/image/portal.jpeg',
  '/profile/image/wordle.png',
  '/profile/image/positioning.png',
  '/profile/image/blog.png'
]

const HALF = Math.floor(IMAGES.length / 2)
const FIRST_HALF = IMAGES.slice(0, HALF)
const SECOND_HALF = IMAGES.slice(HALF, HALF * 2)

export default function ScrollingHeader() {
  return (
    <header
      className='relative w-full overflow-hidden'
      style={{ height: '50vh', minHeight: '440px' }}
    >
      <div className='flex h-full flex-col'>
        <div className='flex h-1/2 items-center overflow-hidden'>
          <div className='marquee-left flex h-full'>
            {[...FIRST_HALF, ...FIRST_HALF].map((src, i) => (
              <Tile key={i} src={src} />
            ))}
          </div>
        </div>
        <div className='flex h-1/2 items-center overflow-hidden'>
          <div className='marquee-right flex h-full'>
            {[...SECOND_HALF, ...SECOND_HALF].map((src, i) => (
              <Tile key={i} src={src} />
            ))}
          </div>
        </div>
      </div>

      {/* base flatten */}
      <div className='pointer-events-none absolute inset-0 z-10 bg-ink/40' />
      {/* radial spotlight to focus on logo */}
      <div
        className='pointer-events-none absolute inset-0 z-10'
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 50%, rgb(var(--color-ink) / 0.85) 0%, rgb(var(--color-ink) / 0.35) 45%, transparent 75%)'
        }}
      />
      {/* edge fade to ink (left/right) */}
      <div
        className='pointer-events-none absolute inset-0 z-10'
        style={{
          background:
            'linear-gradient(to right, rgb(var(--color-ink)), transparent 8%, transparent 92%, rgb(var(--color-ink)))'
        }}
      />
      {/* top/bottom subtle fade */}
      <div
        className='pointer-events-none absolute inset-0 z-10'
        style={{
          background:
            'linear-gradient(to bottom, rgb(var(--color-ink)) 0%, transparent 12%, transparent 82%, rgb(var(--color-ink)) 100%)'
        }}
      />

      {/* hero block */}
      <div className='pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6'>
        <h1 className='display-hero font-display text-bone'>
          <span className='block text-center text-[22vw] italic leading-[0.9] tracking-tight md:text-[13vw]'>
            wolfort
          </span>
        </h1>
        <p className='mt-8 font-mono text-[11px] tracking-[0.25em] text-moon md:mt-12 md:text-[13px]'>
          <span className='uppercase tracking-[0.35em]'>
            selected projects by
          </span>
          <span className='ml-2'>ort</span>
        </p>
      </div>
    </header>
  )
}

const Tile = ({ src }: { src: string }) => (
  <div
    className='h-full w-[240px] shrink-0 bg-cover bg-center md:w-[600px]'
    style={{
      backgroundImage: `url(${src})`,
      filter: 'brightness(0.7) saturate(0.85)'
    }}
  />
)
