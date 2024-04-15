import Image from 'next/image'
import Link from 'next/link'

export default function TopPage() {
  return (
    <main className='text-sm flex min-h-screen flex-col items-center justify-between pb-10'>
      <title>wolfort</title>
      <div className='relative block w-full items-center justify-between text-sm'>
        <Image
          src='/image/header.png'
          alt='header'
          className='hidden md:block dark:invert w-full h-screen object-cover'
          width='1194'
          height='627'
        />
        <Image
          src='/image/header-sm.png'
          alt='header'
          className='md:hidden dark:invert w-full h-screen object-cover'
          width='1280'
          height='853'
        />
        <div
          className='absolute text-white font-bold tracking-widest text-[12vw] md:text-[8vw]'
          style={{
            top: '50%',
            left: '50%',
            margin: 'auto',
            transform: 'translateX(-50%) translateY(-50%)',
            // fontSize: '8vw',
            lineHeight: '2.5rem',
            textShadow:
              '2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 0px 2px 0 #000,  0 -2px 0 #000, -2px 0 0 #000, 2px 0 0 #000'
          }}
        >
          WOLFORT
        </div>
      </div>

      <p className='my-10 md:mt-20 mb-10 text-2xl'>
        <strong>Websites</strong>
      </p>
      <div className='w-full px-2 md:px-20 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3'>
        <SiteCard
          title='ロールをプレイ！'
          description='ロールプレイ'
          imagePath='/image/chat-role-play.webp'
          href='https://wolfort.dev/chat-role-play'
          bordered
        />
        <SiteCard
          title='Scenario Tuker'
          description='マダミス/TRPG通過記録'
          imagePath='/image/scenario-tuker.webp'
          href='https://scenario-tuker.netlify.app'
        />
        <SiteCard
          title='WOLF MANSION'
          description='足音人狼'
          imagePath='/image/wolf-mansion.png'
          href='https://wolfort.net/wolf-mansion'
        />
        <SiteCard
          title='WOLF MANSION Analyzer'
          description='WOLF MANSION推理補助'
          imagePath='/image/wolf-mansion-analyzer.png'
          href='https://wolf-mansion-analyzer.netlify.app'
        />
        <SiteCard
          title='HOWLING WOLF'
          description='野良長期人狼'
          imagePath='/image/howling-wolf.jpg'
          href='https://howling-wolf.com'
        />
        <SiteCard
          title='FIREWOLF'
          description='身内長期人狼'
          imagePath='/image/firewolf.jpg'
          href='https://firewolf.netlify.app'
        />
        <SiteCard
          title='LASTWOLF'
          description='身内短期人狼'
          imagePath='/image/lastwolf.jpg'
          href='https://lastwolf.netlify.app'
        />
        <SiteCard
          title='ワードウルフオンライン'
          description='ワードウルフ'
          imagePath='/image/wordwolf.png'
          href='https://wordwolf-online.com'
          bordered
        />
        <SiteCard
          title='オンライン人狼ポータル'
          description='Web人狼開催情報/統計'
          imagePath='/image/portal.jpeg'
          href='https://wolfort.dev/wolf-portal'
          bordered
        />
        <SiteCard
          title='わーどるめーかー'
          description='オリジナルWordle作成'
          imagePath='/image/wordle.png'
          href='https://wordle-maker.vercel.app/'
          bordered
        />
        <SiteCard
          title='配置するやつメーカー'
          description='ポジショニングマップ'
          imagePath='/image/positioning.png'
          href='https://wolfort.dev/positioning-map'
          bordered
        />
        <SiteCard
          title='ortの灰ログ'
          description='ブログ'
          imagePath='/image/blog.png'
          href='https://oritone.hatenablog.com/'
          bordered
        />
      </div>
      <p className='my-10 md:mt-20 md:mb-10 text-2xl'>
        <strong>Profile</strong>
      </p>
      <div className='w-full px-2 md:px-20 text-center'>
        <div className='bg-gray-200 rounded-xl p-4 leading-5'>
          <p className='mb-2'>Name: ort</p>
          <p className='mt-2'>
            趣味でWebサービスを開発・運営している、関東在住のサーバーサイドエンジニアです。
          </p>
          <p className='mt-2'>
            <Link href='https://github.com/h-orito' target='_blank'>
              GitHub
            </Link>
          </p>
        </div>
      </div>
      <p className='my-10 md:mt-20 md:mb-10 text-2xl'>
        <strong>Contact</strong>
      </p>
      <div className='w-full px-2 md:px-20 text-center'>
        <div className='bg-gray-200 rounded-xl p-4 leading-5'>
          <p>
            Twitter(X):&nbsp;
            <Link href='https://twitter.com/ort_dev' target='_blank'>
              @ort_dev
            </Link>
          </p>
          <p className='my-2'>
            運営告知Twitter(X):&nbsp;
            <Link href='https://twitter.com/ort_dev_notice' target='_blank'>
              @ort_dev_notice
            </Link>
          </p>
          <p className='mt-2'>Email(★ → @):&nbsp;wolfort★googlegroups.com</p>
        </div>
      </div>
      <p className='my-10 md:mt-20 md:mb-10 text-2xl'>
        <strong>Donation</strong>
      </p>
      <div className='w-full px-2 md:px-20 text-center'>
        <div className='bg-gray-200 rounded-xl p-4 leading-5'>
          <p>
            <Link
              href='https://www.amazon.jp/hz/wishlist/ls/1KZSJAJS1ETW4?ref_=wl_share'
              target='_blank'
            >
              ほしいものリスト
            </Link>
          </p>
          <p className='my-2'>
            <Link href='https://ort.fanbox.cc/' target='_blank'>
              Pixiv Fanbox
            </Link>
          </p>
          <p className='mt-2'>
            <Link href='https://www.amazon.co.jp/dp/B004N3APGO' target='_blank'>
              Amazonギフト券（Eメールタイプ）
            </Link>
            <br />※ wolfort★googlegroups.com を指定してください(★ → @)
          </p>
        </div>
      </div>
    </main>
  )
}

type SiteCardProps = {
  title: string
  description: string
  imagePath: string
  href: string
  bordered?: boolean
}
const SiteCard = (props: SiteCardProps) => {
  return (
    <Link
      href={props.href}
      className={`card relative ${props.bordered ? 'border rounded-xl' : ''}`}
      target='_blank'
    >
      <div className='flex flex-col rounded-xl'>
        <div
          className='z-10 card-image relative h-60 w-full rounded-xl bg-cover bg-center bg-no-repeat p-4'
          style={{
            backgroundImage: `url(${props.imagePath})`,
            height: '300px'
          }}
        ></div>
        <div
          className={`absolute z-20 hover:opacity-0 w-full h-full rounded-xl bg-gradient-to-t from-black/80 to-white/5 via-white/5 via-30%`}
        ></div>
        <div className='absolute z-30 text-white bottom-1 p-4'>
          <p className='text-lg'>{props.title}</p>
          <p className='text-sm'>{props.description}</p>
        </div>
      </div>
    </Link>
  )
}
