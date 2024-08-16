import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/common/Button/Button'

const font = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Being and Code',
  description: "99a's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header>
          <Button onClick={() => console.log('test')}>Open Drawer</Button>
        </Header>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
