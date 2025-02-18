'use client'

import {
	Input,
	ModalClose,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalRoot,
	ModalTitle,
	ModalTrigger,
} from '@repo/ChromaUI/components'
import Link from 'next/link'
import { type ChangeEvent, useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Component {
	id: string
	slug: string
	name: string
}

interface ModalProps {
	data: Component[]
}

const ModalSearch = ({ data }: ModalProps) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filtered, setFiltered] = useState<Component[]>([])
	const [isOpen, setIsOpen] = useState(false)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase()
		setSearchTerm(value)

		if (value) {
			const filteredComponents = data.filter((data) =>
				data.name.toLowerCase().includes(value),
			)

			setFiltered(filteredComponents)
		} else {
			setFiltered([])
		}
	}
	useEffect(() => {
		if (!isOpen) {
			setSearchTerm('')
			setFiltered([])
		}
	}, [isOpen])

	const handleOpenChange = (newState: boolean) => {
		setIsOpen(newState)
	}

	return (
		<ModalRoot open={isOpen} onOpenChange={handleOpenChange}>
			<ModalTrigger className='max-w-full justify-start sm:w-80'>
				<BsSearch size={18} />
				<span>Buscar...</span>
			</ModalTrigger>
			<ModalOverlay variant='blur' />
			<ModalContent>
				<ModalHeader>
					<ModalTitle>Encontre o seu componente</ModalTitle>
					<ModalClose>
						X<span className='sr-only'>Close modal</span>
					</ModalClose>
				</ModalHeader>
				<form className='w-full'>
					<Input
						placeholder='Buscar por componentes...'
						type='text'
						id='search'
						value={searchTerm}
						onChange={handleSearch}
					/>
				</form>
				<div className='custom-scrollbar max-h-80 overflow-y-auto'>
					{filtered.length > 0 ? (
						<ul className='space-y-1'>
							{filtered.map((filter) => (
								<li className='flex flex-col space-y-2' key={filter.id}>
									<Link
										className='w-full rounded-md border border-border p-2 transition-all duration-200 hover:bg-muted-hover hover:text-muted-foreground'
										href={`/preview/components/${filter.slug}`}
										onClick={() => handleOpenChange(false)}
									>
										{filter.name}
									</Link>
								</li>
							))}
						</ul>
					) : searchTerm.trim() !== '' ? (
						<span className='font-normal text-muted-foreground'>
							Nenhum componente encontrado !
						</span>
					) : null}
				</div>
			</ModalContent>
		</ModalRoot>
	)
}

export { ModalSearch }
