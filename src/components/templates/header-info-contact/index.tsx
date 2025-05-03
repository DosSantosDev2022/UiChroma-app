'use client'

import {
	Button,
	Input,
	Navigation,
	NavigationItem,
	NavigationList,
} from '@/components/packages'
import { useState } from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
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
		<header className='w-full px-4 lg:px-10 py-5 border border-border space-y-1.5'>
			<div className='w-full flex items-center justify-between flex-wrap gap-1.5 lg:gap-0 p-2.5 border-b border-border'>
				<div className='flex items-center justify-center gap-2'>
					<FaPhone size={14} />
					<span className='text-xs lg:text-base'>{'(11) 3434-3434'} </span>
				</div>

				<div className='flex items-center justify-center gap-2'>
					<FaMapLocationDot />
					<span className='text-xs lg:text-base'>
						Washington Dc, Some address, Usa
					</span>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10'>
				{/* Logo + Toggle Mobile */}
				<div className='flex items-center justify-between w-full lg:w-auto'>
					<h1 className='text-xl font-bold'>Logo</h1>
					<Button
						onClick={handleOpenMenu}
						sizes='icon'
						className='lg:hidden'
						aria-label='Toggle menu'
					>
						{isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
					</Button>
				</div>

				{/* Navegação */}
				<div
					className={`
						transition-all duration-300 ease-in-out
						overflow-hidden p-1
						w-full lg:w-auto
						${isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
						lg:!max-h-none lg:!opacity-100 lg:!translate-y-0 lg:flex
						flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-10
					`}
				>
					<Navigation>
						<NavigationList className='flex flex-col lg:flex-row gap-5'>
							{links.map((link) => (
								<NavigationItem key={link.label}>
									<a href={link.url}>{link.label}</a>
								</NavigationItem>
							))}
						</NavigationList>
					</Navigation>
					<Input placeholder='Buscar...' />
				</div>
			</div>
		</header>
	)
}

export default Header
