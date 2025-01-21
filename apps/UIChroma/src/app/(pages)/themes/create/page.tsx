'use client'

import { Title } from '@/components/global/title/title'
import ColorModeSelector from '@/components/pages/themes/ColorModeSelector'
import { ExempleComponents } from '@/components/pages/themes/exempleComponents'
import { ModalCodeCss } from '@/components/pages/themes/ModalCodeCss'
import { ModalTemplates } from '@/components/pages/themes/modaltemplates'
import { useThemeStore } from '@/store/useThemeStore'
import { Button } from '@repo/ChromaUI/components'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ThemeCreatePage() {
  const {
    readyColors,
    handleLightColorChange,
    handleDarkColorChange,
    theme,
    setTheme
  } = useThemeStore()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="flex flex-col space-y-10">
      <section className="relative mx-auto p-2">
        <div className="z-10 col-span-12 grid items-start gap-x-6 gap-y-14 border border-border p-2 text-center md:gap-y-9 lg:grid-cols-2 lg:text-left">
          <div className="grid h-full gap-y-4 border border-border p-6">
            <div className="space-y-4">
              <Title className="text-7xl">Chroma UI generator</Title>
              <p className="text-base font-normal text-muted-foreground">
                Crie facilmente temas personalizados a partir de uma única cor
                que você pode copiar e colar em seus aplicativos.
              </p>
              <Button
                className="rounded-md"
                asChild
                sizes="sm"
                variants="primary"
              >
                <Link href={'docs'}>Documentação</Link>
              </Button>
            </div>
          </div>
          <div className="grid space-x-2 border border-border">
            {/* Seletor de cores prontas */}
            <div className="flex w-full items-start gap-1.5 p-4">
              <ModalTemplates />
              <ModalCodeCss />
            </div>

            <div className="flex w-full flex-row items-center justify-between gap-4">
              {/* Seletor para o Light Mode */}
              <ColorModeSelector
                title="Light mode"
                colors={readyColors.light}
                handleColorChange={handleLightColorChange}
                onClick={() => setTheme('light')}
              />

              {/* Seletor para o Dark Mode */}
              <ColorModeSelector
                title="Dark mode"
                colors={readyColors.dark}
                handleColorChange={handleDarkColorChange}
                onClick={() => setTheme('dark')}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-md border border-border px-6 py-4">
        <ExempleComponents />
      </section>
    </div>
  )
}
