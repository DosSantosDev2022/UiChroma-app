import { Button } from '@repo/ChromaUI/components/button/Button.tsx'
import Link from 'next/link'
import { BiLogoFigma } from 'react-icons/bi'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { SiStorybook } from 'react-icons/si'

interface LinksProps {
  links: {
    id: string
    label: string
    url?: string
  }[]
}

// Mapeamento de labels para ícones
const iconMap: { [key: string]: JSX.Element } = {
  Storybook: <SiStorybook size={20} />,
  Figma: <BiLogoFigma size={20} />,
  GitHub: <FaGithub size={20} />
}

export function DocLinks({ links }: LinksProps) {
  return (
    <ul className="mt-6 flex w-full flex-wrap gap-3">
      {links?.map((link) => {
        // Busca o ícone correspondente à label ou usa um ícone padrão
        const icon = iconMap[link.label] || <FaExternalLinkAlt />

        return (
          <li key={link.id}>
            <Button
              className="w-32 cursor-pointer text-base"
              asChild
              variant="Shine"
            >
              <Link
                className="bg-primary-950 text-secondary-50 flex h-10 items-center 
                justify-center gap-2 rounded-lg px-3 py-3.5"
                aria-label={`link to ${link.label}`}
                target="_blank"
                href={link.url || ''}
              >
                {icon} {/* Renderiza o ícone apropriado */}
                {link.label}
              </Link>
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
