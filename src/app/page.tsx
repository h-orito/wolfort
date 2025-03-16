import Image from 'next/image'
import Link from 'next/link'

export default function TopPage() {
  return (
    <main className='text-sm flex min-h-screen flex-col items-center justify-between pb-10'>
      <title>wolfort</title>
      <div className='relative block w-full items-center justify-between text-sm'>
        <Image
          src='/profile/image/header.png'
          alt='header'
          className='hidden md:block w-full h-screen object-cover'
          width='1194'
          height='627'
        />
        <Image
          src='/profile/image/header-sm.png'
          alt='header'
          className='md:hidden w-full h-screen object-cover'
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
            lineHeight: '2.5rem',
            textShadow:
              '2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 0px 2px 0 #000,  0 -2px 0 #000, -2px 0 0 #000, 2px 0 0 #000'
          }}
        >
          WOLFORT
        </div>
      </div>
      <p className='my-10 md:mt-20 md:mb-10 text-2xl'>
        <strong>Profile</strong>
      </p>
      <div className='w-full px-2 md:px-20 text-center'>
        <div className='bg-gray-200 rounded-xl p-4 leading-5'>
          <p className='mb-2'>Name: ort</p>
          <p className='mt-2'>
            趣味でWebサービスを開発・運営している、関東在住のITエンジニアです。
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
          <p>問い合わせは上から順に返答が得られやすいです。</p>
          <ul className='leading-6 my-2 inline-block'>
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
          </ul>
          <hr className='my-4 border-gray-400 mx-4' />
          <p className='my-2'>以下は問い合わせ先ではありません。</p>
          <ul className='leading-6 my-2 inline-block'>
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
      <p className='my-10 md:mt-20 mb-10 text-2xl'>
        <strong>Websites</strong>
      </p>
      <div className='w-full px-2 md:px-20 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3'>
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
          description='ブログ'
          imagePath='/profile/image/blog.png'
          href='https://oritone.hatenablog.com/'
          bordered
        />
      </div>
      <div className='mt-6 w-full px-2 md:px-20 text-center'>
        <div className='bg-gray-200 rounded-xl p-4 leading-5'>
          技術スタック
          <div className='mt-4 flex lg:justify-center overflow-x-auto'>
            <table className='table-auto border-collapse border border-gray-400 '>
              <thead>
                <tr>
                  <th className='px-4 py-2 border border-gray-400'>Service</th>
                  <th className='px-4 py-2 border border-gray-400'>
                    Technology stack
                  </th>
                  <th className='px-4 py-2 border border-gray-400'>Infra</th>
                  <th className='px-4 py-2 border border-gray-400'>Source</th>
                  <th className='px-4 py-2 border border-gray-400'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    ロールをプレイ！
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
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
                  <td className='border px-4 py-2 border-gray-400'>
                    Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <Link
                      href='https://github.com/h-orito/chat-role-play-graphql'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    Scenario Tuker
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
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
                  <td className='border px-4 py-2 border-gray-400'>
                    Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
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
                  <td className='border px-4 py-2 border-gray-400'>
                    Nuxt.js(2)→Next.js, Netlify→Kubernetes移行
                  </td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    WOLF MANSION
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Thymeleaf</li>
                      <li>JavaScript</li>
                      <li>Microsoft Translator API</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    さくらVPS, Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <Link
                      href='https://github.com/h-orito/wolf-mansion'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    Maven→Gradle、Java→Kotlin
                  </td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    WOLF MANSION Analyzer
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>TypeScript</li>
                      <li>Vue3</li>
                      <li>Nuxt.js(v3)</li>
                      <li>PrimeVue/Flex</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>Netlify</td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <Link
                      href='https://github.com/h-orito/wolf-mansion-analyzer'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    HOWLING WOLF
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>TypeScript</li>
                      <li>Vue2</li>
                      <li>Nuxt.js(v2)</li>
                      <li>Buefy</li>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Firebase Authentication</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    Netlify, Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
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
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>FIREWOLF</td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>TypeScript</li>
                      <li>Vue2</li>
                      <li>Nuxt.js(v2)</li>
                      <li>Buefy</li>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Firebase Authentication</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    Netlify, Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
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
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>LASTWOLF</td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>TypeScript</li>
                      <li>Vue2</li>
                      <li>Nuxt.js(v2)</li>
                      <li>Buefy</li>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Firebase Authentication</li>
                      <li>Firebase Realtime Database</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    Netlify, Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
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
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    ワードウルフオンライン
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>JavaScript</li>
                      <li>Vue2</li>
                      <li>Nuxt.js(v2)</li>
                      <li>Firebase Authentication</li>
                      <li>Firebase Realtime Database</li>
                      <li>Cloud Firestore</li>
                      <li>Cloud functions for Firebase</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>Netlify</td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <Link
                      href='https://github.com/h-orito/wordwolf'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    オンライン人狼ポータル
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>Kotlin</li>
                      <li>Spring Boot</li>
                      <li>DBFlute</li>
                      <li>MySQL</li>
                      <li>Thymeleaf</li>
                      <li>JavaScript</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <Link
                      href='https://github.com/h-orito/wolf-portal'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    Java→Kotlin
                  </td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    わーどるめーかー
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>TypeScript</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>TailwindCSS</li>
                      <li>Firebase Authentication</li>
                      <li>Firebase Realtime Database</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>Vercel</td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <Link
                      href='https://github.com/h-orito/wordron'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
                <tr>
                  <td className='border px-4 py-2 border-gray-400'>
                    配置するやつメーカー
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <ul className='text-left list-disc ml-2'>
                      <li>TypeScript</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>TailwindCSS</li>
                      <li>Firebase Realtime Database</li>
                    </ul>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    Kubernetes
                  </td>
                  <td className='border px-4 py-2 border-gray-400'>
                    <Link
                      href='https://github.com/h-orito/quadrant-maker'
                      target='_blank'
                    >
                      GitHub
                    </Link>
                  </td>
                  <td className='border px-4 py-2 border-gray-400'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className='my-10 md:mt-20 md:mb-10 text-2xl'>
        <strong>Donation</strong>
      </p>
      <div className='w-full px-2 md:px-20 text-center'>
        <div className='bg-gray-200 rounded-xl p-4 leading-10'>
          <ul className='leading-6 my-2'>
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
          className={`absolute z-20 w-full h-full rounded-xl bg-gradient-to-t from-black/80 to-white/5 via-white/5 via-30%`}
        ></div>
        <div className='absolute z-30 text-white bottom-1 p-4'>
          <p className='text-lg'>{props.title}</p>
          <p className='text-sm'>{props.description}</p>
        </div>
      </div>
    </Link>
  )
}
