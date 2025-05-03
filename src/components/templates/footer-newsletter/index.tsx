import { Button, Input } from '@/components/packages'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
	const listContact = [
		{
			icon: <FaMapLocation />,
			label: '8819 Ohio St. South Gate',
		},
		{
			icon: <MdEmail />,
			label: 'contato@loja.com',
		},
		{
			icon: <FaPhone />,
			label: '(11) 99999-9999',
		},
	]

	const socialLinks = [
		{
			label: 'Dr',
			url: '/#',
		},
		{
			label: 'Be',
			url: '/#',
		},
		{
			label: 'Tw',
			url: '/#',
		},
		{
			label: 'Ig',
			url: '/#',
		},
	]

	return (
		<footer className='text-muted-foreground px-4 py-8 md:px-8'>
			<div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-6'>
				{/* Logo / About */}
				<div>
					<h2 className='text-2xl font-bold'>Logo</h2>
					<p className='mt-2 text-sm'>
						Sua loja favorita online. Qualidade, preço justo e confiança.
					</p>

					{/* Copyright */}
					<div className='mt-8 border-t border-border pt-4 text-xs text-start text-muted-foreground'>
						© {new Date().getFullYear()} MeuNome.
					</div>
				</div>

				{/* Contato */}
				<nav>
					<h3 className='text-lg font-semibold mb-2'>Entre em contato</h3>
					<ul className='space-y-1 text-sm'>
						{listContact.map((list, index) => (
							<li
								className='flex items-center gap-1.5 truncate text-sm'
								key={index}
							>
								{list.icon}
								{list.label}
							</li>
						))}
					</ul>
				</nav>

				{/* Social */}
				<div>
					<nav>
						<h3 className='text-lg font-semibold mb-2'>Social</h3>
						<ul className='flex gap-2 space-y-1 text-sm'>
							{socialLinks.map((list, index) => (
								<Link key={index} href={list.url}>
									<li className='bg-accent hover:bg-accent-hover duration-300 transition-colors rounded-full p-2 w-10 h-10 text-center'>
										{list.label}
									</li>
								</Link>
							))}
						</ul>
					</nav>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
						do eiusmod.
					</p>
				</div>

				{/* newsletter */}
				<div className='space-y-2'>
					<h3 className='text-lg font-semibold mb-2 leading-5'>
						Inscreva-se para receber uma newsletter
					</h3>
					<label htmlFor=''>Seu Email</label>
					<Input placeholder='Digite o seu e-mail' />
					<Button sizes='full'>Inscreva-se</Button>
				</div>
			</div>
		</footer>
	)
}

export default Footer
