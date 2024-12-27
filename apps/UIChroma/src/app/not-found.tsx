import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex h-screen items-center p-16">
      <div className="container flex flex-col items-center ">
        <div className="flex max-w-md flex-col gap-6 text-center">
          <h2 className="text-9xl font-extrabold text-foreground">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl text-muted-foreground md:text-3xl">
            Desculpe, nenhum componente foi encontrado!
          </p>
          <Link
            href="/"
            className="hover:bg-primary/80 rounded bg-primary px-8 py-4 text-lg text-primary-foreground duration-500"
          >
            Voltar para home
          </Link>
        </div>
      </div>
    </section>
  )
}
