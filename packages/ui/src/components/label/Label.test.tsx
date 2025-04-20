import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Label } from './Label'

describe('Component Label', () => {
	beforeEach(() => {
		render(<Label>Label</Label>)
	})
	it('should render the component correctly', () => {
		expect(screen.getByText('Label'))
	})
})
