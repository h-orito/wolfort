import Image from 'next/image'
import Link from 'next/link'

export default function TopPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pb-10 text-sm'>
      <title>wolfort</title>
      <div className='relative block w-full items-center justify-between text-sm'>
        <Image
          src='/profile/image/header.png'
          alt='header'
          className='hidden h-screen w-full object-cover md:block'
          width='1194'
          height='627'
        />
        <Image
          src='/profile/image/header-sm.png'
          alt='header'
          className='h-screen w-full object-cover md:hidden'
          width='1280'
          height='853'
        />
        <div
          className='absolute text-[12vw] font-bold tracking-widest text-white md:text-[8vw]'
          style={{
            top: '50%',
            left: '50%',
            margin: 'auto',
            transform: 'translateX(-50%) translateY(-50%)',
            lineHeight: '2.5rem',
            textShadow:
              '2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 0px 2px 0 #000,  0 -2px 0 #000, -2px 0 0 #000, 2px 0 0 #000'
          }}
        >
          WOLFORT
        </div>
      </div>
      <p className='my-10 text-2xl md:mb-10 md:mt-20'>
        <strong>Profile</strong>
      </p>
      <div className='w-full px-2 text-center md:px-20'>
        <div className='rounded-xl bg-gray-200 p-4 leading-5'>
          <p className='mb-2'>Name: ort</p>
          <p className='mt-2'>
            趣味でWebサービスを開発・運営している、関東在住のITエンジニアです。
            <br />
            本業はバックエンド側なので、フロントエンドは独学で勉強しながらやっています。
          </p>
          <p className='mt-2'>
            <Link href='https://github.com/h-orito' target='_blank'>
              GitHub
            </Link>
          </p>
        </div>
      </div>
      <p className='my-10 text-2xl md:mb-10 md:mt-20'>
        <strong>Contact</strong>
      </p>
      <div className='w-full px-2 text-center md:px-20'>
        <div className='rounded-xl bg-gray-200 p-4 leading-5'>
          <p>問い合わせは上から順に返答が得られやすいです。</p>
          <ul className='my-2 inline-block leading-6'>
            <li className='text-left'>
              Twitter（X）:&nbsp;
              <Link href='https://twitter.com/ort_dev' target='_blank'>
                @ort_dev
              </Link>
            </li>
            <li className='text-left'>
              Bluesky（避難用）:&nbsp;
              <Link href='https://bsky.app/profile/wolfort.dev' target='_blank'>
                @wolfort.dev
              </Link>
            </li>
            <li className='text-left'>
              Email(★ → @):&nbsp;wolfort★googlegroups.com
            </li>
            <li className='text-left'>
              目安箱:&nbsp;
              <Link href='https://forms.gle/RiXBoGbh4vfpBxYz7' target='_blank'>
                forms.gle/RiXBoGbh4vfpBxYz7
              </Link>
            </li>
          </ul>
          <hr className='m-4 border-gray-400' />
          <p className='my-2'>以下は問い合わせ先ではありません。</p>
          <ul className='my-2 inline-block leading-6'>
            <li className='text-left'>
              運営告知Twitter（X）:&nbsp;
              <Link href='https://twitter.com/ort_dev_notice' target='_blank'>
                @ort_dev_notice
              </Link>
            </li>
            <li className='text-left'>
              Mastodon（自動通知）:&nbsp;
              <Link href='https://mstdn.jp/@ort_dev' target='_blank'>
                mstdn.jp@ort_dev
              </Link>
            </li>
          </ul>
        </div>
      </div>{' '}
      <p className='my-10 text-2xl md:mt-20'>
        <strong>Websites</strong>
      </p>
      <div className='grid w-full grid-cols-1 gap-4 px-2 md:grid-cols-3 md:gap-8 md:px-20'>
        <SiteCard
          title='Besten'
          description='10選作成・共有'
          imagePath='/profile/image/besten.png'
          href='https://besten.wolfort.dev'
          bordered
        />
        <SiteCard
          title='ロールをプレイ！'
          description='ロールプレイ'
          imagePath='/profile/image/chat-role-play.webp'
          href='https://wolfort.dev/chat-role-play'
          bordered
        />
        <SiteCard
          title='Scenario Tuker'
          description='マダミス/TRPG通過記録'
          imagePath='/profile/image/scenario-tuker.webp'
          href='https://wolfort.dev/scenario-tuker'
        />
        <SiteCard
          title='WOLF MANSION'
          description='足音人狼'
          imagePath='/profile/image/wolf-mansion.png'
          href='https://wolfort.net/wolf-mansion/'
        />
        <SiteCard
          title='WOLF MANSION Analyzer'
          description='WOLF MANSION推理補助'
          imagePath='/profile/image/wolf-mansion-analyzer.png'
          href='https://wolf-mansion-analyzer.netlify.app'
        />
        <SiteCard
          title='人狼館の事件簿 GMツール'
          description='WOLF MANSION GM支援'
          imagePath='/profile/image/wolf-mansion-gm-tools.jpeg'
          href='https://wolf-mansion-gm-tool.wolfort.dev/'
        />
        <SiteCard
          title='HOWLING WOLF'
          description='野良長期人狼'
          imagePath='/profile/image/howling-wolf.jpg'
          href='https://howling-wolf.com'
        />
        <SiteCard
          title='FIREWOLF'
          description='身内長期人狼'
          imagePath='/profile/image/firewolf.jpg'
          href='https://firewolf.netlify.app'
        />
        <SiteCard
          title='LASTWOLF'
          description='身内短期人狼'
          imagePath='/profile/image/lastwolf.jpg'
          href='https://lastwolf.netlify.app'
        />
        <SiteCard
          title='WOLFBBS STATS'
          description='人狼BBS 統計情報'
          imagePath='/profile/image/wolfbbs-stats.jpeg'
          href='https://wolfort.net/wolfbbs-stats/'
        />
        <SiteCard
          title='ワードウルフオンライン'
          description='ワードウルフ'
          imagePath='/profile/image/wordwolf.png'
          href='https://wordwolf-online.com'
          bordered
        />
        <SiteCard
          title='オンライン人狼ポータル'
          description='Web人狼開催情報/統計'
          imagePath='/profile/image/portal.jpeg'
          href='https://wolfort.dev/wolf-portal/'
          bordered
        />
        <SiteCard
          title='わーどるめーかー'
          description='オリジナルWordle作成'
          imagePath='/profile/image/wordle.png'
          href='https://wordle-maker.vercel.app/'
          bordered
        />
        <SiteCard
          title='配置するやつメーカー'
          description='ポジショニングマップ'
          imagePath='/profile/image/positioning.png'
          href='https://wolfort.dev/positioning-map'
          bordered
        />
        <SiteCard
          title='ortの灰ログ'
          description='ブログ（ほぼ更新停止）'
          imagePath='/profile/image/blog.png'
          href='https://oritone.hatenablog.com/'
          bordered
        />
      </div>
      <div className='mt-6 w-full px-2 text-center md:px-20'>
        <div className='rounded-xl bg-gray-200 p-4 leading-5'>
          技術スタック
          <div className='mt-4 flex overflow-x-auto lg:justify-center'>
            <table className='table-auto border-collapse border border-gray-400 '>
              <thead>
                <tr>
                  <th className='border border-gray-400 px-4 py-2'>Service</th>
                  <th className='border border-gray-400 px-4 py-2'>
                    Technology stack
                  </th>
                  <th className='border border-gray-400 px-4 py-2'>Infra</th>
                  <th className='border border-gray-400 px-4 py-2'>Source</th>
                  <th className='border border-gray-400 px-4 py-2'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>Besten</td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>React.js</li>
                      <li>React Router</li>
                      <li>TailwindCSS</li>
                      <li>Cloudflare Workers</li>
                      <li>Cloudflare D1</li>
                      <li>Drizzle</li>
                      <li>Remix Auth</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Cloudflare
                  </td>
                  <td className='border border-gray-400 px-4 py-2'></td>
                  <td className='border border-gray-400 px-4 py-2'></td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    ロールをプレイ！
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>Next.js</li>
                      <li>React.js</li>
                      <li>TailwindCSS</li>
                      <li>Go</li>
                      <li>Gorm</li>
                      <li>GraphQL</li>
                      <li>MySQL</li>
                      <li>Cloudflare R2</li>
                      <li>Auth0</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/chat-role-play-graphql'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'></td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    Scenario Tuker
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>Next.js</li>
                      <li>React.js</li>
                      <li>TailwindCSS</li>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Firebase Authentication</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/scenario-tuker'
                      target='_blank'
                    >
                      GitHub(Frontend)
                    </Link>
                    <br />
                    <Link
                      href='https://github.com/h-orito/scenario-tuker-api'
                      target='_blank'
                    >
                      GitHub(Backend)
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Nuxt.js(2)→Next.js, Netlify→Kubernetes移行
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    WOLF MANSION
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Thymeleaf</li>
                      <li>JavaScript</li>
                      <li>Microsoft Translator API</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/wolf-mansion'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Maven→Gradle、Java→Kotlin
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    WOLF MANSION Analyzer
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>Vue3</li>
                      <li>Nuxt.js(v3)</li>
                      <li>PrimeVue/Flex</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>Netlify</td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/wolf-mansion-analyzer'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'></td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    人狼館の事件簿 GMツール
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>React.js</li>
                      <li>React Router</li>
                      <li>TailwindCSS</li>
                      <li>Cloudflare Workers</li>
                      <li>Cloudflare D1</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Cloudflare
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/wolf-mansion-gm-tool'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'></td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    HOWLING WOLF
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>Vue3</li>
                      <li>Nuxt.js(v4)</li>
                      <li>TailwindCSS</li>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Firebase Authentication</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Netlify, Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/howling-wolf-ui'
                      target='_blank'
                    >
                      GitHub(Frontend)
                    </Link>
                    <br />
                    <Link
                      href='https://github.com/h-orito/howling-wolf-api'
                      target='_blank'
                    >
                      GitHub(Backend)
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Nuxt v2→v4移行
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>FIREWOLF</td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>Vue3</li>
                      <li>Nuxt.js(v4)</li>
                      <li>TailwindCSS</li>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Firebase Authentication</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Netlify, Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/firewolf-ui'
                      target='_blank'
                    >
                      GitHub(Frontend)
                    </Link>
                    <br />
                    <Link
                      href='https://github.com/h-orito/firewolf-api'
                      target='_blank'
                    >
                      GitHub(Backend)
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Nuxt v2→v4移行
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>LASTWOLF</td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>Vue3</li>
                      <li>Nuxt.js(v4)</li>
                      <li>TailwindCSS</li>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Firebase Authentication</li>
                      <li>Firebase Realtime Database</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Netlify, Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/lastwolf-ui'
                      target='_blank'
                    >
                      GitHub(Frontend)
                    </Link>
                    <br />
                    <Link
                      href='https://github.com/h-orito/lastwolf-api'
                      target='_blank'
                    >
                      GitHub(Backend)
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Nuxt v2→v4移行
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    WOLFBBS STATS
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>MyBatis</li>
                      <li>MySQL</li>
                      <li>Thymeleaf</li>
                      <li>Jsoup</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/wolfbbs-stats'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Java(TERASOLUNA gfw)→Kotlin(Spring Boot)、MySQL 5.1→8移行
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    ワードウルフオンライン
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>JavaScript</li>
                      <li>Vue3</li>
                      <li>Nuxt.js(v4)</li>
                      <li>Firebase Authentication</li>
                      <li>Firebase Realtime Database</li>
                      <li>Cloud Firestore</li>
                      <li>Cloud functions for Firebase</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>Netlify</td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/wordwolf'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Nuxt v2→v4移行
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    オンライン人狼ポータル
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Thymeleaf</li>
                      <li>JavaScript</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/wolf-portal'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Java→Kotlin
                  </td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    わーどるめーかー
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>TailwindCSS</li>
                      <li>Firebase Authentication</li>
                      <li>Firebase Realtime Database</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>Vercel</td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/wordron'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'></td>
                </tr>
                <tr>
                  <td className='border border-gray-400 px-4 py-2'>
                    配置するやつメーカー
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <ul className='ml-2 list-disc text-left'>
                      <li>TypeScript</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>TailwindCSS</li>
                      <li>Firebase Realtime Database</li>
                    </ul>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    Kubernetes
                  </td>
                  <td className='border border-gray-400 px-4 py-2'>
                    <Link
                      href='https://github.com/h-orito/quadrant-maker'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border border-gray-400 px-4 py-2'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className='my-10 text-2xl md:mb-10 md:mt-20'>
        <strong>Donation</strong>
      </p>
      <div className='w-full px-2 text-center md:px-20'>
        <div className='rounded-xl bg-gray-200 p-4 leading-10'>
          <ul className='my-2 leading-6'>
            <li className='my-2'>
              <Link
                href='https://www.amazon.jp/hz/wishlist/ls/1KZSJAJS1ETW4?ref_=wl_share'
                target='_blank'
              >
                ほしいものリスト
              </Link>
            </li>
            <li className='my-2'>
              <Link href='https://ort.fanbox.cc/' target='_blank'>
                Pixiv Fanbox
              </Link>
            </li>
            <li className='my-2'>
              <Link
                href='https://www.amazon.co.jp/dp/B004N3APGO'
                target='_blank'
              >
                Amazonギフト券（Eメールタイプ）
              </Link>
              <ul>
                <li className='text-xs'>
                  wolfort★googlegroups.com を指定してください(★ → @)
                </li>
              </ul>
            </li>
            <li className='my-2'>
              <Link href='https://amzn.to/48auG7Q' target='_blank'>
                Amazonアソシエイト経由での買い物
              </Link>
              <ul>
                <li className='text-xs'>
                  このページを経由してAmazonで何かしらの買い物をすると、ortに若干の紹介料が入ります
                </li>
              </ul>
            </li>
          </ul>
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
      className={`card relative ${props.bordered ? 'rounded-xl border' : ''}`}
      target='_blank'
    >
      <div className='flex flex-col rounded-xl'>
        <div
          className='card-image relative z-10 h-60 w-full rounded-xl bg-cover bg-center bg-no-repeat p-4'
          style={{
            backgroundImage: `url(${props.imagePath})`,
            height: '300px'
          }}
        ></div>
        <div
          className={`absolute z-20 size-full rounded-xl bg-gradient-to-t from-black/80 via-white/5 via-30% to-white/5`}
        ></div>
        <div className='absolute bottom-1 z-30 p-4 text-white'>
          <p className='text-lg'>{props.title}</p>
          <p className='text-sm'>{props.description}</p>
        </div>
      </div>
    </Link>
  )
}
