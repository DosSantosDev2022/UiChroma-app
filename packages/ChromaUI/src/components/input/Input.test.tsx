import '@testing-library/jest-dom'
import { it, expect, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'
import userEvent from '@testing-library/user-event'

describe('Component Input', () => {
  beforeEach(() => {
    render(<Input placeholder="search..." />)
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
    render(<Input icon={<span data-testid="icon">🔍</span>} />)
    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })

  it('should correctly apply the variant class', () => {
    const { container } = render(<Input variants="success" />)

    expect(container.firstChild).toHaveClass('focus-within:ring-success')
  })
})
