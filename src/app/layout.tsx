import type { Metadata } from 'next'
import './globals.css'
import Provider from '@/lib/provider'

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Messenger with next.js + nest.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
