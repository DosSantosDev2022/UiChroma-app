import { inter } from '@/assets/fonts'
import Image from 'next/image'
import { ReactNode } from 'react'

interface defaultRenderersProps {
  children: ReactNode
}

const defaultRenderers = {
  // Títulos
  h1: ({ children }: defaultRenderersProps) => (
    <h1 className={`${inter.className} text-6xl font-bold`}>{children}</h1>
  ),
  h2: ({ children }: defaultRenderersProps) => (
    <h2 className="text-start text-4xl font-extrabold tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: defaultRenderersProps) => (
    <h3 className="text-start text-3xl font-semibold tracking-tight">
      {children}
    </h3>
  ),
  h4: ({ children }: defaultRenderersProps) => (
    <h4 className="text-start text-2xl font-semibold tracking-tight">
      {children}
    </h4>
  ),
  h5: ({ children }: defaultRenderersProps) => (
    <h5 className="text-start text-lg font-semibold tracking-tight">
      {children}
    </h5>
  ),
  h6: ({ children }: defaultRenderersProps) => (
    <h6 className="text-md text-start font-extrabold tracking-tight">
      {children}
    </h6>
  ),

  // Parágrafos
  p: ({ children }: defaultRenderersProps) => (
    <p className="w-full text-base font-normal">{children}</p>
  ),
  // bold
  b: ({ children }: defaultRenderersProps) => (
    <b className="text-accent">{children}</b>
  ),
  // Listas
  li: ({ children }: defaultRenderersProps) => (
    <li className="text-muted-foreground">{children}</li>
  ),
  ul: ({ children }: defaultRenderersProps) => (
    <ul className="ml-6 mt-1 list-disc space-y-4 px-2">{children}</ul>
  ),
  ol: ({ children }: defaultRenderersProps) => (
    <ol className="mt-2 space-y-2 px-2">{children}</ol>
  ),

  // Links
  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <a href={href} className="text-primary hover:text-primary-hover">
      {children}
    </a>
  ),

  // Imagens
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      className="max-w-full rounded-md shadow-md"
    />
  ),

  // Bloco de código
  code_block: ({ children }: defaultRenderersProps) => (
    <pre className="custom-scrollbar w-full overflow-x-auto rounded-xl border border-border bg-foreground px-10 py-5 dark:bg-muted">
      <code className="text-background dark:text-muted-foreground">
        {children}
      </code>
    </pre>
  ),

  // Bloco de citação
  blockquote: ({ children }: defaultRenderersProps) => (
    <blockquote className="border-l-4 border-border pl-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),

  // Tabelas
  table: ({ children }: defaultRenderersProps) => (
    <table className="w-full border-collapse border border-border">
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
    <span className="text-muted-foreground">{children}</span>
  ),

  // Strong (negrito)
  strong: ({ children }: defaultRenderersProps) => (
    <strong className="font-bold">{children}</strong>
  ),

  // Em (itálico)
  em: ({ children }: defaultRenderersProps) => (
    <em className="italic">{children}</em>
  ),

  // Small (texto pequeno)
  small: ({ children }: defaultRenderersProps) => (
    <small className="text-sm text-accent">{children}</small>
  )
}

export { defaultRenderers }
