import { Title } from '@/components/global/title'
import { ColorModeSelector } from '@/components/pages/themes/ColorModeSelector'
import { ExempleComponents } from '@/components/pages/themes/exempleComponents'
import { ModalCodeCss } from '@/components/pages/themes/ModalCodeCss'
import { ModalTemplates } from '@/components/pages/themes/modaltemplates'
import { Button } from '@repo/ChromaUI/components'
import Link from 'next/link'

export default function ThemeCreatePage() {
  return (
    <div className="flex flex-col space-y-10">
      <section className="relative mx-auto p-2">
        <div className="z-10 grid grid-cols-12 items-start gap-x-6 gap-y-14 border border-border p-2 text-center md:gap-y-9 lg:text-left">
          <div className="col-span-5 h-full gap-y-4 border border-border p-6">
            <div className="space-y-4">
              <Title className="text-5xl">Gerador de temas UI</Title>
              <p className="text-base font-normal text-muted-foreground">
                Crie facilmente temas personalizados a partir de uma única cor
                que você pode copiar e colar em seus aplicativos.
              </p>
              <Button
                className="rounded-md"
                asChild
                sizes="sm"
                variants="shine"
              >
                <Link href={'docs'}>Documentação</Link>
              </Button>
            </div>
          </div>
          <div className="col-span-7 space-x-2 border border-border p-2">
            {/* Seletor de cores prontas */}
            <div className="flex w-full items-start gap-1.5 p-4">
              <ModalTemplates />
              <ModalCodeCss />
            </div>

            <div className="flex items-center justify-between gap-2">
              {/* Seletor para o Light Mode */}
              <ColorModeSelector mode="light" />
              {/* Seletor para o Dark Mode */}
              <ColorModeSelector mode="dark" />
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
