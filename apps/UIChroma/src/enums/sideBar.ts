import { FaHome } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { MdOutlineInstallDesktop } from 'react-icons/md'
import { IconType } from 'react-icons/lib'
import { MdNewReleases } from 'react-icons/md'
import { v4 as uuid } from 'uuid'

export enum NavigationLinksSideBar {
  HOME = 'Home',
  GETTING_STARTED = 'Primeiros passos',
  CLI = 'CLI',
  RELEASES = 'Releases'
}

export enum NavigationUrls {
  HOME = '/',
  GETTING_STARTED = '/gettingstarted',
  CLI = '/cli',
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
    name: NavigationLinksSideBar.GETTING_STARTED,
    Url: NavigationUrls.GETTING_STARTED,
    icon: IoIosRocket
  },
  {
    id: uuid(),
    name: NavigationLinksSideBar.CLI,
    Url: NavigationUrls.CLI,
    icon: MdOutlineInstallDesktop
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
    label: 'Documentação',
    url: 'themes/docs'
  },
  {
    label: 'Criar tema',
    url: 'themes/create'
  }
]

export const docs = [
  {
    label: 'Temas e cores',
    url: 'docs/themes'
  },
  {
    label: 'Dark mode',
    url: 'docs/dark'
  },
  {
    label: 'Tailwind css',
    url: 'docs/tailwind'
  },
  {
    label: 'Sass',
    url: 'docs/sass'
  }
]
