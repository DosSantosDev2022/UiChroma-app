'use client'

import {
	Button,
	Input,
	Navigation,
	NavigationItem,
	NavigationList,
	Avatar,
} from '@/components/packages'
import { useState } from 'react'
import { FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoClose, IoMenu } from 'react-icons/io5'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenMenu = () => {
		setIsOpen(!isOpen)
	}

	const links = [
		{ label: 'Home', url: '/#' },
		{ label: 'About', url: '/#' },
		{ label: 'Blog', url: '/#' },
		{ label: 'Contact', url: '/#' },
	]

	return (
		<header className='w-full px-4 lg:px-10 py-5 border border-border bg-background'>
			{/* Topo: Logo + Menu Toggle + Busca + Ações */}
			<div className='flex flex-col lg:flex-row items-center justify-between gap-4 border-b border-border pb-4'>
				{/* Logo e Toggle Mobile */}
				<div className='flex items-center justify-between w-full lg:w-auto'>
					<h1 className='text-xl font-bold'>Logo</h1>
					<Button
						onClick={handleOpenMenu}
						sizes='icon'
						className='lg:hidden'
						aria-label='Toggle menu'
					>
						{isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
					</Button>
				</div>

				{/* Busca e ícones */}
				<div className='flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3'>
					<Input
						className='w-full sm:w-80 h-10'
						placeholder='Search products...'
					/>
					{/* Ícones no mobile - só aparecem quando menu está aberto */}
					{isOpen && (
						<div className='flex items-center justify-between w-full gap-2 lg:hidden'>
							<Button variants='link' sizes='icon'>
								<FaShoppingCart />
							</Button>
							<Button variants='link' sizes='icon'>
								<Avatar src='/avatars/joao.png' name='João Pedro' />
							</Button>
						</div>
					)}

					{/* Ícones no desktop - sempre visíveis */}
					<div className='hidden lg:flex items-center gap-2'>
						<Button variants='link' sizes='icon'>
							<FaShoppingCart />
						</Button>
						<Button variants='link' sizes='icon'>
							<Avatar src='/avatars/joao.png' name='João Pedro' />
						</Button>
					</div>
				</div>
			</div>

			{/* Navegação principal */}
			<div
				className={`
					transition-all duration-300 ease-in-out
					overflow-hidden
					w-full
					${isOpen ? 'max-h-[500px] opacity-100 translate-y-0 mt-4' : 'max-h-0 opacity-0 -translate-y-2'}
					lg:max-h-none lg:opacity-100 lg:translate-y-0
				`}
			>
				<Navigation>
					<NavigationList className='flex flex-col lg:flex-row gap-4 items-start lg:items-center lg:justify-center mt-2'>
						{links.map((link) => (
							<NavigationItem key={link.label}>
								<a href={link.url}>{link.label}</a>
							</NavigationItem>
						))}
					</NavigationList>
				</Navigation>
			</div>
		</header>
	)
}

export default Header
