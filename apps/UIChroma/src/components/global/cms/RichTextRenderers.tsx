import { inter } from "@/assets/fonts";
import Image from "next/image";
import { ReactNode } from "react";

interface defaultRenderersProps {
  children: ReactNode;
}

export const defaultRenderers = {
  // Títulos
  h1: ({ children }: defaultRenderersProps) => (
    <h1 className={`${inter.className} text-6xl text-foreground font-bold`}>{children}</h1>
  ),
  h2: ({ children }: defaultRenderersProps) => (
    <h2 className="text-start text-4xl text-foreground font-extrabold tracking-tight">{children}</h2>
  ),
  h3: ({ children }: defaultRenderersProps) => (
    <h3 className="text-start text-2xl text-foreground font-semibold tracking-tight">{children}</h3>
  ),
  h4: ({ children }: defaultRenderersProps) => (
    <h4 className="text-start text-lg text-foreground font-semibold tracking-tight">{children}</h4>
  ),
  h5: ({ children }: defaultRenderersProps) => (
    <h5 className="text-start text-md text-foreground font-semibold tracking-tight">{children}</h5>
  ),
  h6: ({ children }: defaultRenderersProps) => (
    <h6 className="text-start text-xl text-foreground font-extrabold tracking-tight">{children}</h6>
  ),

  // Parágrafos
  p: ({ children }: defaultRenderersProps) => (
    <p className="w-full text-base font-normal text-primary-900">{children}</p>
  ),

  // Listas
  li: ({ children }: defaultRenderersProps) => <li>{children}</li>,
  ul: ({ children }: defaultRenderersProps) => (
    <ul className="ml-6 mt-1 list-disc space-y-4 px-2">{children}</ul>
  ),
  ol: ({ children }: defaultRenderersProps) => <ol className="mt-2 space-y-2 px-2">{children}</ol>,

  // Links
  a: ({ children, href }: { children: ReactNode; href?: string }) => (
    <a href={href} className="text-primary hover:text-primary/80">
      {children}
    </a>
  ),

  // Imagens
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <Image src={src || ''} alt={alt || ''} className="max-w-full rounded-md shadow-md" />
  ),

  // Bloco de código
  code_block: ({ children }: defaultRenderersProps) => (
    <pre className="w-full overflow-x-auto rounded-xl bg-primary-950 px-10 py-5 shadow-lg scrollbar-thin scrollbar-track-primary-900 scrollbar-thumb-primary-800">
      <code className="text-zinc-50">{children}</code>
    </pre>
  ),

  // Bloco de citação
  blockquote: ({ children }: defaultRenderersProps) => (
    <blockquote className="pl-6 border-l-4 border-accent-foreground italic text-accent">
      {children}
    </blockquote>
  ),

  // Tabelas
  table: ({ children }: defaultRenderersProps) => (
    <table className="w-full border-collapse border border-primary-300">{children}</table>
  ),
  th: ({ children }: defaultRenderersProps) => (
    <th className="border-b border-primary-300 p-2 text-left">{children}</th>
  ),
  td: ({ children }: defaultRenderersProps) => (
    <td className="border-b border-primary-300 p-2">{children}</td>
  ),

  // Span (texto em linha)
  span: ({ children }: defaultRenderersProps) => (
    <span className="text-primary">{children}</span>
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
    <small className="text-sm text-accent-foreground0">{children}</small>
  ),
};
