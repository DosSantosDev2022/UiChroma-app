import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { Badge, type BadgeProps } from './Badge'

const renderBadge = (props: BadgeProps) =>
	render(<Badge {...props}>{props.children}</Badge>)

describe('Component Badge', () => {
	it('The Badge component must render correctly', () => {
		renderBadge({ variant: 'primary', size: 'lg', children: 'Testes' })
		expect(screen.getByText('Testes').parentElement).toBeInTheDocument()
	})

	it('should render with the correct primary variant', () => {
		renderBadge({ variant: 'primary', children: 'primary' })
		expect(screen.getByText('primary')).toHaveClass('bg-primary')
	})

	it('should render with the correct secondary variant', () => {
		renderBadge({ variant: 'secondary', children: 'secondary' })
		expect(screen.getByText('secondary')).toHaveClass('bg-secondary')
	})

	it('should render with the correct accent variant', () => {
		renderBadge({ variant: 'accent', children: 'accent' })
		expect(screen.getByText('accent')).toHaveClass('bg-accent')
	})

	it('should render with correct muted variant', () => {
		renderBadge({ variant: 'muted', children: 'muted' })
		expect(screen.getByText('muted')).toHaveClass('bg-muted')
	})
})
