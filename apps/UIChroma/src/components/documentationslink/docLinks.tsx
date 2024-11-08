import Link from 'next/link';
import { Button } from '@repo/ChromaUI/components/button.tsx';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BiLogoFigma } from 'react-icons/bi';
import { SiStorybook } from 'react-icons/si';

interface LinksProps {
  links: {
    id: string;
    label: string;
    url: string;
  }[];
}

// Mapeamento de labels para ícones
const iconMap: { [key: string]: JSX.Element } = {
  'Storybook' : <SiStorybook size={20} />,
    'Figma' : <BiLogoFigma size={20} />,
    'GitHub':  <FaGithub size={20} /> 
};

export function DocLinks({ links }: LinksProps) {
  return (
    <ul className='flex flex-wrap gap-3 mt-6 w-full'>
      {links?.map((link) => {
        // Busca o ícone correspondente à label ou usa um ícone padrão
        const icon = iconMap[link.label] || <FaExternalLinkAlt />;

        return (
          <li key={link.id}>
            <Button className='text-base cursor-pointer w-32' asChild variant='Shine'>
              <Link
                className='px-3 py-3.5 h-10 flex items-center 
                justify-center gap-2 rounded-lg bg-primary-950 text-secondary-50'
                aria-label={`link to ${link.label}`}
                target='_blank'
                href={link.url}>
                {icon} {/* Renderiza o ícone apropriado */}
                {link.label}
              </Link>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
