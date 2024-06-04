import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const font = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '99a',
  description: "99a's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
