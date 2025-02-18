import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardImage } from './card-Image'

const mockProps = {
	image: 'https://via.placeholder.com/300',
	title: 'Sample Title',
	description: 'Sample Description',
}

describe('CardImage Component', () => {
	it('should render CardImage component correctly', () => {
		render(<CardImage {...mockProps} />)

		expect(screen.getByLabelText('card-root')).toBeInTheDocument()
		expect(screen.getByLabelText('card-image')).toBeInTheDocument()
		expect(screen.getByLabelText('card-gradient')).toBeInTheDocument()
		expect(screen.getByLabelText('card-content')).toBeInTheDocument()
	})

	it('should render CardTitle and CardDescription with correct labels', () => {
		render(<CardImage {...mockProps} />)

		expect(screen.getByLabelText('card-title')).toHaveTextContent(
			mockProps.title,
		)
		expect(screen.getByLabelText('card-description')).toHaveTextContent(
			mockProps.description,
		)
	})

	it('should not render the card if image prop has no url', () => {
		render(
			<CardImage
				title='Sample Title'
				image=''
				description='Sample Description'
			/>,
		)
		expect(screen.queryByRole('img')).not.toBeInTheDocument()
	})
})
