import type { Metadata } from 'next'
import './globals.css'
import Provider from '@/lib/provider'
import { Toaster } from '@/components/ui/sonner'

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
        <Provider>
          <Toaster />
          {children}
        </Provider>
      </body>
    </html>
  )
}
