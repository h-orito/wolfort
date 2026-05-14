import {
  DM_Sans,
  Fraunces,
  JetBrains_Mono,
  Noto_Sans_JP,
  Noto_Serif_JP
} from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-latin'
})

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
  display: 'swap',
  variable: '--font-display-latin'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono'
})

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans-jp'
})

const notoSerifJp = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-display-jp'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontVars = [
    dmSans.variable,
    fraunces.variable,
    jetbrainsMono.variable,
    notoSansJp.variable,
    notoSerifJp.variable
  ].join(' ')

  return (
    <html lang='ja' className={fontVars}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>wolfort</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </head>
      <body className='relative bg-ink font-sans text-bone antialiased'>
        {children}
        <div aria-hidden className='noise-overlay' />
      </body>
    </html>
  )
}
