import type { Metadata } from 'next'

import { inter } from '@/assets/fonts'
import { Header } from '@/components/global/header/Header'
import { AppSidebar } from '@/components/global/SideBar'
import '../../../../global.css'

export const metadata: Metadata = {
  title: 'UIChroma',
  description: 'Biblioteca de componentes React',
  icons: {
    icon: '/icon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} relative overflow-hidden bg-background text-foreground antialiased`}
      >
        <div className="flex h-screen w-screen flex-row overflow-hidden">
          <AppSidebar />

          <div className="flex flex-1 flex-col">
            <Header />
            <main className="custom-scrollbar min-h-0 flex-1 overflow-auto p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
