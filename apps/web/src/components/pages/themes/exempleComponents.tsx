'use client'

import * as Examples from '@/components/@examples'
import { useThemeStore } from '@/store/use-Theme-Store'
import { updateCssVariables } from '@/utils/update-Css-Variables'
import { type ReactNode, useEffect } from 'react'

interface ContainerPreviewProps {
	children: ReactNode
	title?: string
}

const ContainerPreview = ({ children, title }: ContainerPreviewProps) => {
	return (
		<div
			className={
				'flex w-full flex-col items-start justify-center gap-3 rounded-md border px-6 py-4 dark:border-border'
			}
		>
			<h4 className='text-lg font-extrabold tracking-wide'>{title}</h4>
			<div className='flex w-full grow flex-col items-center justify-center px-2 py-3'>
				{children}
			</div>
		</div>
	)
}

export function ExempleComponents() {
	const { theme, lightColors, darkColors } = useThemeStore()

	useEffect(() => {
		updateCssVariables(theme, lightColors, darkColors) // Aplica as variáveis CSS com base no tema
	}, [theme, lightColors, darkColors])

	return (
		<div
			id='CssVariables'
			className='grid grid-cols-1 gap-6 bg-background text-foreground lg:grid-cols-2'
		>
			<ContainerPreview title='Componente button'>
				<Examples.ButtonPreview />
			</ContainerPreview>

			<ContainerPreview title='Componente Bedge'>
				<Examples.BadgePreview />
			</ContainerPreview>

			<ContainerPreview title='Componente Input'>
				<Examples.InputPreview />
			</ContainerPreview>

			<ContainerPreview title='Componente Calendar'>
				<Examples.CalendarPreview />
			</ContainerPreview>

			<ContainerPreview title='Componente Card'>
				<Examples.CardPreview />
			</ContainerPreview>

			<ContainerPreview title='Componente Card Image'>
				<Examples.CardImagePreview />
			</ContainerPreview>

			<ContainerPreview title='Componente pagination'>
				<Examples.PaginationPreview />
			</ContainerPreview>

			<ContainerPreview title='Componente Modal'>
				<Examples.ModalPreview />
			</ContainerPreview>

			<ContainerPreview title='Componente Carousel'>
				<Examples.CarouselPreview />
			</ContainerPreview>

			<ContainerPreview title='Componente DropDown'>
				<Examples.DropDownPreview />
			</ContainerPreview>
		</div>
	)
}
