import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
	Avatar,
	AvatarContainer,
	AvatarLabel,
	AvatarName,
	AvatarWrapper,
} from './Avatar'

describe('Avatar component', () => {
	it('The Avatar component must render correctly', () => {
		render(
			<AvatarContainer>
				<Avatar src='/img/avatar-01.jpg' name='Jhon Doe' />
				<AvatarWrapper>
					<AvatarName>Jhon Doe</AvatarName>
					<AvatarLabel>jhondoe@email.com</AvatarLabel>
				</AvatarWrapper>
			</AvatarContainer>,
		)
		// Verificar se o nome e o email são renderizados corretamente
		expect(screen.getByText('Jhon Doe'))
		expect(screen.getByText('jhondoe@email.com'))
		// Verificar se a imagem está presente no DOM
		const avatarImage = screen.getByAltText('Jhon Doe')
		expect(avatarImage).toBeInTheDocument()
		expect(avatarImage).toHaveAttribute('src', '/img/avatar-01.jpg')
	})

	it('should display the fallback when the image is not available', async () => {
		render(
			<AvatarContainer>
				<Avatar src='/img/avatar-01.jpg' name='Jhon Doe' />
			</AvatarContainer>,
		)

		// Simula erro de carregamento da imagem manualmente
		const img = screen.getByAltText('Jhon Doe') as HTMLImageElement
		img.dispatchEvent(new Event('error'))

		// Espera o fallback com a inicial aparecer
		const fallback = await screen.findByText('J')
		expect(fallback).toBeInTheDocument()
	})
})
