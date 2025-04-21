import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { TextArea } from './TextArea'

describe('Component TextArea', () => {
	it('should render the component correctly', () => {
		render(<TextArea placeholder='Type something...' />)
		expect(
			screen.getByPlaceholderText('Type something...'),
		).toBeInTheDocument()
	})

	it('should accept user input', async () => {
		const user = userEvent.setup()
		render(<TextArea placeholder='Type something...' />)
		const textarea = screen.getByPlaceholderText('Type something...')

		await user.type(textarea, 'Hello, world!')
		expect(textarea).toHaveValue('Hello, world!')
	})

	it('should apply the correct variant class', () => {
		const { rerender } = render(<TextArea variants='default' />)
		expect(screen.getByRole('textbox')).toHaveClass(
			'focus-within:ring-ring',
		)

		rerender(<TextArea variants='success' />)
		expect(screen.getByRole('textbox')).toHaveClass(
			'focus-within:ring-success',
		)

		rerender(<TextArea variants='error' />)
		expect(screen.getByRole('textbox')).toHaveClass(
			'focus-within:ring-danger',
		)
	})

	it('should support ref forwarding', () => {
		const ref = createRef<HTMLTextAreaElement>()
		render(<TextArea ref={ref} />)
		expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
	})
})
