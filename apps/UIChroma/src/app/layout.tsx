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
        <div className="flex  h-screen w-screen overflow-hidden">
          <SideBar />

          <div className="flex flex-1 flex-col">
            <Header />
            <main className="bg-primary-50 min-h-0 flex-1 overflow-auto p-4  text-primary-900 scrollbar-thin scrollbar-track-secondary-50 scrollbar-thumb-primary-900">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
