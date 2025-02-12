import { inter } from '@/assets/fonts'
import Image from 'next/image'
import { ReactNode } from 'react'

interface defaultRenderersProps {
  children: ReactNode
}

const defaultRenderers = {
  // Títulos
  h1: ({ children }: defaultRenderersProps) => (
    <h1
      className={`${inter.className} text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl`}
    >
      {children}
    </h1>
  ),
  h2: ({ children }: defaultRenderersProps) => (
    <h2 className="text-start text-2xl font-extrabold tracking-tight sm:text-3xl md:text-3xl lg:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }: defaultRenderersProps) => (
    <h3 className="text-start text-xl font-semibold tracking-tight sm:text-2xl md:text-2xl lg:text-2xl">
      {children}
    </h3>
  ),
  h4: ({ children }: defaultRenderersProps) => (
    <h4 className="text-start text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
      {children}
    </h4>
  ),
  h5: ({ children }: defaultRenderersProps) => (
    <h5 className="text-start text-base font-semibold tracking-tight sm:text-lg">
      {children}
    </h5>
  ),
  h6: ({ children }: defaultRenderersProps) => (
    <h6 className="text-start text-sm font-extrabold tracking-tight sm:text-base">
      {children}
    </h6>
  ),

  // Parágrafos
  p: ({ children }: defaultRenderersProps) => (
    <p className="w-full text-sm font-normal sm:text-base md:text-base lg:text-base">
      {children}
    </p>
  ),

  // Bold
  b: ({ children }: defaultRenderersProps) => (
    <b className="text-accent">{children}</b>
  ),

  // Listas
  li: ({ children }: defaultRenderersProps) => (
    <li className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground dark:bg-secondary dark:text-secondary-foreground sm:text-base">
      {children}
    </li>
  ),
  ul: ({ children }: defaultRenderersProps) => (
    <ul className="ml-4 mt-1 list-disc space-y-2 px-2 py-2.5 sm:ml-6 sm:space-y-4">
      {children}
    </ul>
  ),
  ol: ({ children }: defaultRenderersProps) => (
    <ol className="mt-2 space-y-2 px-2 sm:space-y-4">{children}</ol>
  ),

  // Links
  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <a
      href={href}
      className="text-sm text-primary hover:text-primary-hover sm:text-base"
    >
      {children}
    </a>
  ),

  // Imagens
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      className="max-w-full rounded-md shadow-md"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  ),

  // Bloco de código
  code_block: ({ children }: defaultRenderersProps) => (
    <pre className="custom-scrollbar w-full overflow-x-auto rounded-xl border border-border bg-foreground px-4 py-3 dark:bg-muted sm:px-6 sm:py-4 md:px-10 md:py-5">
      <code className="text-xs text-background dark:text-muted-foreground sm:text-sm md:text-base">
        {children}
      </code>
    </pre>
  ),

  // Bloco de citação
  blockquote: ({ children }: defaultRenderersProps) => (
    <blockquote className="border-l-4 border-border pl-4 text-sm italic text-muted-foreground sm:pl-6 sm:text-base">
      {children}
    </blockquote>
  ),

  // Tabelas
  table: ({ children }: defaultRenderersProps) => (
    <table className="w-full border-collapse border border-border text-sm sm:text-base">
      {children}
    </table>
  ),
  th: ({ children }: defaultRenderersProps) => (
    <th className="border-b border-border p-2 text-left">{children}</th>
  ),
  td: ({ children }: defaultRenderersProps) => (
    <td className="border-b border-border p-2">{children}</td>
  ),

  // Span (texto em linha)
  span: ({ children }: defaultRenderersProps) => (
    <span className="text-sm text-muted-foreground sm:text-base">
      {children}
    </span>
  ),

  // Strong (negrito)
  strong: ({ children }: defaultRenderersProps) => (
    <strong className="text-sm font-bold sm:text-base">{children}</strong>
  ),

  // Em (itálico)
  em: ({ children }: defaultRenderersProps) => (
    <em className="text-sm italic sm:text-base">{children}</em>
  ),

  // Small (texto pequeno)
  small: ({ children }: defaultRenderersProps) => (
    <small className="text-xs text-accent sm:text-sm">{children}</small>
  )
}

export { defaultRenderers }
