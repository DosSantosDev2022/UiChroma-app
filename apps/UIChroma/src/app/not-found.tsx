import Link from 'next/link'
 
export default function NotFound() {
  return (
    <section className="flex items-center h-screen p-16">
    <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-foreground">
                <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground">Desculpe, nenhum componente foi encontrado!</p>
            <Link href="/" 
            className="rounded px-8 py-4 text-lg bg-primary hover:bg-primary/80 duration-500 text-primary-foreground">
              Voltar para home
            </Link>
        </div>
    </div>
</section>
  )
}