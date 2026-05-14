export type Project = {
  id: string
  title: string
  titleEn?: string
  category: string
  description: string
  longDescription?: string
  image: string
  href: string
  featured?: boolean
  /** YYYY/MM */
  started?: string
  stack: string[]
  infra?: string
  repos?: { label: string; href: string }[]
  notes?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'wolf-mansion',
    title: 'WOLF MANSION',
    titleEn: 'Wolf Mansion',
    category: '足音人狼 / Footstep werewolf',
    description: '足音人狼',
    longDescription:
      '人狼の特殊ルール「人狼館の事件簿」ルールを実装・発展させ、100以上の役職で遊べるWeb人狼ゲーム。状況のみで推理・説得する、新しい人狼が遊べる。',
    image: '/profile/image/wolf-mansion.png',
    href: 'https://wolfort.net/wolf-mansion/',
    featured: true,
    started: '2018/03',
    stack: ['Kotlin', 'Spring Boot', 'DBFlute', 'MySQL', 'Thymeleaf'],
    infra: 'Kubernetes',
    repos: [
      { label: 'GitHub', href: 'https://github.com/h-orito/wolf-mansion' }
    ],
    notes: 'Maven→Gradle、Java→Kotlin'
  },
  {
    id: 'scenario-tuker',
    title: 'Scenario Tuker',
    category: 'マダミス・TRPG 通過記録 / Scenario Database',
    description: 'マダミス/TRPG通過記録',
    longDescription:
      'マーダーミステリーやTRPGの通過シナリオを管理・共有できる作品データベース。通過記録や所持シナリオ・ルールブックを一括管理できる。',
    image: '/profile/image/scenario-tuker.webp',
    href: 'https://wolfort.dev/scenario-tuker',
    featured: true,
    started: '2022/07',
    stack: [
      'TypeScript',
      'Next.js',
      'Kotlin',
      'Spring Boot',
      'MySQL',
      'Firebase Auth'
    ],
    infra: 'Kubernetes',
    repos: [
      {
        label: 'Frontend',
        href: 'https://github.com/h-orito/scenario-tuker'
      },
      {
        label: 'Backend',
        href: 'https://github.com/h-orito/scenario-tuker-api'
      }
    ],
    notes: 'Nuxt.js(2)→Next.js, Netlify→Kubernetes移行'
  },
  {
    id: 'howling-wolf',
    title: 'HOWLING WOLF',
    category: '野良長期人狼 / Long-term werewolf',
    description: '野良長期人狼',
    longDescription: '知り合い以外とも遊べるオープン参加型の長期Web人狼。',
    image: '/profile/image/howling-wolf.jpg',
    href: 'https://howling-wolf.com',
    started: '2020/06',
    stack: [
      'TypeScript',
      'Nuxt.js',
      'Kotlin',
      'Spring Boot',
      'MySQL',
      'Firebase Auth'
    ],
    infra: 'Netlify, Kubernetes',
    repos: [
      { label: 'Frontend', href: 'https://github.com/h-orito/howling-wolf-ui' },
      { label: 'Backend', href: 'https://github.com/h-orito/howling-wolf-api' }
    ],
    notes: 'Nuxt v2→v4移行'
  },
  {
    id: 'besten',
    title: 'Besten',
    category: '10選作成・共有',
    description: '10選作成・共有',
    image: '/profile/image/besten.png',
    href: 'https://besten.wolfort.dev',
    started: '2026/01',
    stack: [
      'TypeScript',
      'React',
      'React Router',
      'Cloudflare Workers',
      'Cloudflare D1',
      'Drizzle'
    ],
    infra: 'Cloudflare'
  },
  {
    id: 'chat-role-play',
    title: 'ロールをプレイ！',
    titleEn: 'Role Play',
    category: 'ロールプレイ',
    description: 'ロールプレイ',
    image: '/profile/image/chat-role-play.webp',
    href: 'https://wolfort.dev/chat-role-play',
    started: '2023/08',
    stack: ['TypeScript', 'Next.js', 'Go', 'GraphQL', 'MySQL', 'Auth0'],
    infra: 'Kubernetes',
    repos: [
      {
        label: 'GitHub',
        href: 'https://github.com/h-orito/chat-role-play-graphql'
      }
    ]
  },
  {
    id: 'wolf-mansion-analyzer',
    title: 'WOLF MANSION Analyzer',
    category: 'WOLF MANSION 推理補助',
    description: 'WOLF MANSION推理補助',
    image: '/profile/image/wolf-mansion-analyzer.png',
    href: 'https://wolf-mansion-analyzer.netlify.app',
    started: '2022/10',
    stack: ['TypeScript', 'Vue 3', 'Nuxt.js', 'PrimeVue'],
    infra: 'Netlify',
    repos: [
      {
        label: 'GitHub',
        href: 'https://github.com/h-orito/wolf-mansion-analyzer'
      }
    ]
  },
  {
    id: 'wolf-mansion-gm-tool',
    title: '人狼館の事件簿 GMツール',
    category: 'WOLF MANSION GM支援',
    description: 'WOLF MANSION GM支援',
    image: '/profile/image/wolf-mansion-gm-tools.jpeg',
    href: 'https://wolf-mansion-gm-tool.wolfort.dev/',
    started: '2026/04',
    stack: [
      'TypeScript',
      'React',
      'React Router',
      'Cloudflare Workers',
      'Cloudflare D1'
    ],
    infra: 'Cloudflare',
    repos: [
      {
        label: 'GitHub',
        href: 'https://github.com/h-orito/wolf-mansion-gm-tool'
      }
    ]
  },
  {
    id: 'firewolf',
    title: 'FIREWOLF',
    category: '身内長期人狼 / Long-term werewolf',
    description: '身内長期人狼',
    longDescription:
      '身内向けに設計した長期Web人狼。魅力的なキャラクターになりきってロールプレイしながら遊べる。',
    image: '/profile/image/firewolf.jpg',
    href: 'https://firewolf.netlify.app',
    featured: true,
    started: '2020/08',
    stack: ['TypeScript', 'Nuxt.js', 'Kotlin', 'Spring Boot', 'Firebase Auth'],
    infra: 'Netlify, Kubernetes',
    repos: [
      { label: 'Frontend', href: 'https://github.com/h-orito/firewolf-ui' },
      { label: 'Backend', href: 'https://github.com/h-orito/firewolf-api' }
    ],
    notes: 'Nuxt v2→v4移行'
  },
  {
    id: 'lastwolf',
    title: 'LASTWOLF',
    category: '身内短期人狼',
    description: '身内短期人狼',
    image: '/profile/image/lastwolf.jpg',
    href: 'https://lastwolf.netlify.app',
    started: '2020/12',
    stack: [
      'TypeScript',
      'Nuxt.js',
      'Kotlin',
      'Spring Boot',
      'Firebase Realtime DB'
    ],
    infra: 'Netlify, Kubernetes',
    repos: [
      { label: 'Frontend', href: 'https://github.com/h-orito/lastwolf-ui' },
      { label: 'Backend', href: 'https://github.com/h-orito/lastwolf-api' }
    ],
    notes: 'Nuxt v2→v4移行'
  },
  {
    id: 'wolfbbs-stats',
    title: 'WOLFBBS STATS',
    category: '人狼BBS 統計情報',
    description: '人狼BBS 統計情報',
    image: '/profile/image/wolfbbs-stats.jpeg',
    href: 'https://wolfort.net/wolfbbs-stats/',
    started: '2017/05',
    stack: ['Kotlin', 'Spring Boot', 'MyBatis', 'MySQL', 'Thymeleaf', 'Jsoup'],
    infra: 'Kubernetes',
    repos: [
      { label: 'GitHub', href: 'https://github.com/h-orito/wolfbbs-stats' }
    ],
    notes: 'Java(TERASOLUNA gfw)→Kotlin、MySQL 5.1→8'
  },
  {
    id: 'wordwolf',
    title: 'ワードウルフオンライン',
    category: 'ワードウルフ',
    description: 'ワードウルフ',
    image: '/profile/image/wordwolf.png',
    href: 'https://wordwolf-online.com',
    started: '2019/01',
    stack: [
      'JavaScript',
      'Nuxt.js v4',
      'Firebase Auth',
      'Firebase Realtime DB',
      'Cloud Firestore'
    ],
    infra: 'Netlify',
    repos: [{ label: 'GitHub', href: 'https://github.com/h-orito/wordwolf' }],
    notes: 'Nuxt v2→v4移行'
  },
  {
    id: 'wolf-portal',
    title: 'オンライン人狼ポータル',
    category: 'Web人狼 開催情報・統計',
    description: 'Web人狼開催情報/統計',
    image: '/profile/image/portal.jpeg',
    href: 'https://wolfort.dev/wolf-portal/',
    started: '2018/11',
    stack: ['Kotlin', 'Spring Boot', 'DBFlute', 'MySQL', 'Thymeleaf'],
    infra: 'Kubernetes',
    repos: [
      { label: 'GitHub', href: 'https://github.com/h-orito/wolf-portal' }
    ],
    notes: 'Java→Kotlin'
  },
  {
    id: 'wordle-maker',
    title: 'わーどるめーかー',
    category: 'オリジナルWordle作成',
    description: 'オリジナルWordle作成',
    image: '/profile/image/wordle.png',
    href: 'https://wordle-maker.vercel.app/',
    started: '2022/02',
    stack: ['TypeScript', 'Next.js', 'Firebase Auth', 'Firebase Realtime DB'],
    infra: 'Vercel',
    repos: [{ label: 'GitHub', href: 'https://github.com/h-orito/wordron' }]
  },
  {
    id: 'positioning-map',
    title: '配置するやつメーカー',
    category: 'ポジショニングマップ',
    description: 'ポジショニングマップ',
    image: '/profile/image/positioning.png',
    href: 'https://wolfort.dev/positioning-map',
    started: '2024/01',
    stack: ['TypeScript', 'Next.js', 'Firebase Realtime DB'],
    infra: 'Kubernetes',
    repos: [
      { label: 'GitHub', href: 'https://github.com/h-orito/quadrant-maker' }
    ]
  },
  {
    id: 'blog',
    title: 'ortの灰ログ',
    category: 'ブログ（更新停止中）',
    description: 'ブログ（ほぼ更新停止）',
    image: '/profile/image/blog.png',
    href: 'https://oritone.hatenablog.com/',
    started: '2018/03',
    stack: ['Hatena Blog']
  }
]

export const FEATURED = PROJECTS.filter((p) => p.featured)
export const INDEX_PROJECTS = PROJECTS.filter((p) => !p.featured)
