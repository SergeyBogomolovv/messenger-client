import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'messenger with next.js + nest.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
