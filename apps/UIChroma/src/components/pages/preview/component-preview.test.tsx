import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ComponentPreview from './component-Preview'

vi.mock('@/components/@examples/test-component', () => ({
  default: () => <div>Mocked Component</div>
}))

describe('Component preview', () => {
  it('should render loading state initially', () => {
    render(<ComponentPreview componentData={{ name: 'test-component' }} />)
    expect(screen.getByText(/Carregando preview/i)).toBeInTheDocument()
  })

  it('should render the loaded component', async () => {
    render(<ComponentPreview componentData={{ name: 'test-component' }} />)
    expect(await screen.findByText('Mocked Component')).toBeInTheDocument()
  })
})
