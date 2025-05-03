import { Label } from './../components/packages/label/Label';
import { FaHome } from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'
import { MdNewReleases } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'

export enum NavigationLinksSideBar {
	HOME = 'Home',
	RELEASES = 'Releases',
}

export enum NavigationUrls {
	HOME = '/',
	RELEASES = '/releases',
}

interface LinkItem {
	id: string
	name: NavigationLinksSideBar
	Url: NavigationUrls
	icon: IconType
}

export const links: LinkItem[] = [
	{
		id: uuidv4(),
		name: NavigationLinksSideBar.HOME,
		Url: NavigationUrls.HOME,
		icon: FaHome,
	},
	{
		id: uuidv4(),
		name: NavigationLinksSideBar.RELEASES,
		Url: NavigationUrls.RELEASES,
		icon: MdNewReleases,
	},
]

export const themes = [
	{
		label: 'Criar tema',
		url: 'themes/create',
	},
]

interface DocsItem {
	id: string
	label: string
	url: string
	status?: 'maintenance' | 'deprecated' | 'new' | 'in-dev'
}

export const docs: DocsItem[] = [
	{
		id: uuidv4(),
		label: 'Primeiros passos',
		url: 'docs/gettingstarted',
	},
	{
		id: uuidv4(),
		label: 'CLI',
		url: 'docs/cli',
	},
	{
		id: uuidv4(),
		label: 'Temas e cores',
		url: 'docs/themes',
	},
	{
		id: uuidv4(),
		label: 'Dark mode',
		url: 'docs/dark',
	},
	{
		id: uuidv4(),
		label: 'Sass',
		url: 'docs/sass',
		status: 'in-dev',
	},
]

interface templatesItem {
  id: string
	label: string
	url: string
	status?: 'maintenance' | 'deprecated' | 'new' | 'in-dev'
}

export const templates:templatesItem[] = [
  {
		id: uuidv4(),
		label: 'Headers',
	  url: 'template/headers'
	},
	{
		id: uuidv4(),
		label: 'Footers',
	  url: 'template/footers'
	}
]
