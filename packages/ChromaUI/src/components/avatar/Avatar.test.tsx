import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
	Avatar,
	AvatarContainer,
	AvatarFallback,
	AvatarImage,
	AvatarLabel,
	AvatarName,
	AvatarWrapper,
} from './Avatar'

describe('Avatar component', () => {
	it('The Avatar component must render correctly', () => {
		render(
			<AvatarContainer>
				<Avatar>
					<AvatarImage src='/img/avatar-01.jpg' />
					<AvatarFallback>J</AvatarFallback>
				</Avatar>
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
		const avatarImage = screen.getByRole('img')
		expect(avatarImage).toBeInTheDocument()
		expect(avatarImage).toHaveAttribute('src', '/img/avatar-01.jpg')
	})

	it('should display the fallback when the image is not available', () => {
		render(
			<AvatarContainer>
				<Avatar>
					<AvatarImage src='/img/non-existent.jpg' />
					<AvatarFallback>J</AvatarFallback>
				</Avatar>
			</AvatarContainer>,
		)

		const fallback = screen.getByText('J')
		expect(fallback).toBeInTheDocument()
	})
})
