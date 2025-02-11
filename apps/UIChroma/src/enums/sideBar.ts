import { FaHome } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { MdNewReleases } from 'react-icons/md'
import { v4 as uuid } from 'uuid'

export enum NavigationLinksSideBar {
  HOME = 'Home',
  RELEASES = 'Releases'
}

export enum NavigationUrls {
  HOME = '/',
  RELEASES = '/releases'
}

interface LinkItem {
  id: string
  name: NavigationLinksSideBar
  Url: NavigationUrls
  icon: IconType
}

export const links: LinkItem[] = [
  {
    id: uuid(),
    name: NavigationLinksSideBar.HOME,
    Url: NavigationUrls.HOME,
    icon: FaHome
  },
  {
    id: uuid(),
    name: NavigationLinksSideBar.RELEASES,
    Url: NavigationUrls.RELEASES,
    icon: MdNewReleases
  }
]

export const themes = [
  {
    label: 'Criar tema',
    url: 'themes/create'
  }
]

interface DocsItem {
  label: string
  url: string
  status?: 'maintenance' | 'deprecated' | 'new' | 'in-dev'
}

export const docs: DocsItem[] = [
  {
    label: 'Primeiros passos',
    url: 'docs/gettingstarted'
  },
  {
    label: 'CLI',
    url: 'docs/cli'
  },
  {
    label: 'Temas e cores',
    url: 'docs/themes'
  },
  {
    label: 'Dark mode',
    url: 'docs/dark'
  },
  {
    label: 'Sass',
    url: 'docs/sass',
    status: 'in-dev'
  }
]
