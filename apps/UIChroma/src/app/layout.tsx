import type { Metadata } from 'next'

import { inter } from '@/assets/fonts'
import { Header } from '@/components/global/header/Header'
import { SideBar } from '@/components/global/sideBar/SideBar'
import '../../../../global.css'

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
      <body className={`${inter.className} antialiased`}> 
        <div className="grid h-screen grid-cols-[260px_1fr] grid-rows-[auto_1fr] overflow-hidden">
          <SideBar />

          <Header />
          <main className="bg-background col-start-2 row-start-2 overflow-auto p-4 text-foreground scrollbar-thin scrollbar-track-background scrollbar-thumb-foreground">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
