import { inter } from '@/app/fonts'
import { Button } from '@repo/ui/components/button.tsx'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full space-y-2  p-6  ">
      <div className="flex flex-col items-center gap-6">
        <h1
          className={`${inter.className} text-center text-7xl font-extrabold tracking-tight text-primary-900 `}
        >
          Construa aplicações modernas e responsivas rapidamente.
        </h1>
        <p className="w-[768px] text-center text-base font-normal text-primary-800 ">
          UIChroma é uma biblioteca de componentes React desenvolvida para
          simplificar e acelerar o processo de criação de interfaces de usuário
          de forma ágil e dinâmica. Com uma gama diversificada de componentes
          cuidadosamente projetados, UIChroma permite aos desenvolvedores criar
          experiências de usuário excepcionais sem a necessidade de instalar
          dependências adicionais em seus projetos.
        </p>

        <div className="flex w-full items-center justify-center gap-2">
          <Button
            variant="primary"
            asChild
            className="flex items-center justify-center"
          >
            <Link href={'/starter'}>Primeiros passos</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="flex items-center justify-center"
          >
            <Link href={'/'}>Documentação</Link>
          </Button>
        </div>
      </div>

      <div className="mt-10 space-y-2 border px-2 py-3">
        <h3
          className={`${inter.className} text-start text-2xl font-extrabold tracking-tight text-primary-900 `}
        >
          Introdução
        </h3>
        <span className="w-[768px] text-base font-normal text-primary-900 ">
          Componentes lindamente projetados que você pode copiar e colar em seus
          aplicativos. Personalizável. Código aberto e de graça.
        </span>
      </div>
    </div>
  )
}
