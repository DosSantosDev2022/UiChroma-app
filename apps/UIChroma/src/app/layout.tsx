import type { Metadata } from 'next'

import '@/styles/globals.css'
import { Header } from '@/components/header/Header'
import { SideBar } from '@/components/sideBar/SideBar'
import { nunito } from '@/assets/fonts'

export const metadata: Metadata = {
  title: 'UIChroma',
  description: 'Biblioteca de componentes React',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.className} antialiased`}>
        <div className="grid h-screen grid-cols-[320px_1fr] grid-rows-[auto_1fr] overflow-hidden">
          <SideBar  />

          <Header />
          <main className="bg-primary-50 col-start-2 row-start-2 overflow-auto p-4 text-primary-900 scrollbar-thin scrollbar-track-secondary-50 scrollbar-thumb-primary-900">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
