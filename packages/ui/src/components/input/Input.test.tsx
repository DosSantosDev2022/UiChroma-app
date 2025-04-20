import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Component Input', () => {
	beforeEach(() => {
		render(<Input placeholder='search...' />)
	})

	it('should render Input component correctly', () => {
		expect(screen.getByPlaceholderText('search...')).toBeInTheDocument()
	})

	it('should capture the value you entered', async () => {
		const input = screen.getByPlaceholderText('search...')
		await userEvent.type(input, 'Hello')
		expect(input).toHaveValue('Hello')
	})

	it('should render an icon when passed via props', () => {
		render(<Input icon={<span data-testid='icon'>🔍</span>} />)
		const icon = screen.getByTestId('icon')
		expect(icon).toBeInTheDocument()
	})

	it('should correctly apply the variant class', () => {
		const { container } = render(<Input variants='success' />)

		expect(container.firstChild).toHaveClass('focus-within:ring-success')
	})
})
