import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import Header from './components/header'
import { ThemeProvider } from './components/theme-provider'

const leagueSpartan = League_Spartan({ 
  subsets: ['latin'],
  weight: ["400", "600"],
    
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
    <html lang="pt-br">
      <body className={leagueSpartan.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
