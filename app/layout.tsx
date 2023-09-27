import './globals.css'
import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'
import Header from './components/header'

const Exo2 = Exo_2({ 
  subsets: ['latin'],
  weight: ['400', '600'],
    
})

export const metadata: Metadata = {
  title: 'iroutine',
  description: 'created by vinicius x.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Exo2.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
