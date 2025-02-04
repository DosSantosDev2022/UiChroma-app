import { ModalSearch } from '@/components/global/header/modalSearch'
import { GET_COMPONENTS_NAME } from '@/services/get-Component-Names'
import { Badge } from '@repo/ChromaUI/components'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'
import { SelectTheme } from './selectTheme'

const Header = async () => {
  const { pageComponents } = await GET_COMPONENTS_NAME()

  const links = [
    {
      url: '',
      icon: IoLogoFigma
    },
    {
      url: 'https://github.com/DosSantosDev2022/UiChroma',
      icon: FaGithub
    }
  ]
  return (
    <header className="col-start-2 row-start-1 flex h-16 w-full items-center justify-between border-b border-border px-6">
      <ModalSearch data={pageComponents} />

      <div className="flex items-center gap-4">
        <Badge variant="accent" size="md">
          v.1.0.0
        </Badge>
        {links.map((link, index) => (
          <Link
            key={index}
            className="text-muted-foreground duration-300 hover:scale-105"
            href={link.url}
          >
            <link.icon size={22} />
          </Link>
        ))}

        <SelectTheme />
      </div>
    </header>
  )
}

export { Header }
