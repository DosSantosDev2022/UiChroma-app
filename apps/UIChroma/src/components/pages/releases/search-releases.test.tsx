import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { SearchReleases } from './search-Releases'
import userEvent from '@testing-library/user-event'

// Mockando o useRouter e useSearchParams do Next.js
const mockPush = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn()
  }),
  useSearchParams: () => ({
    get: vi.fn(() => ''),
    toString: vi.fn(() => 'query=')
  })
}))

describe('Component Search releases', () => {
  beforeEach(() => {
    vi.clearAllMocks() // Garante que os mocks são resetados a cada teste
  })

  it('should render the fetch component correctly', () => {
    render(<SearchReleases />)
    const input = screen.getByPlaceholderText(/buscar por releases.../i)
    expect(input).toBeInTheDocument()
  })

  it('should update state when typing in input', async () => {
    render(<SearchReleases />)
    const input = screen.getByPlaceholderText(/buscar por releases.../i)
    await userEvent.type(input, 'Nova Release')

    expect(input).toHaveValue('Nova Release')
  })

  it('should call push with the correct URL after debounce', async () => {
    render(<SearchReleases />)
    const input = screen.getByPlaceholderText(/buscar por releases.../i)
    await userEvent.type(input, 'Teste')

    await waitFor(
      () => {
        console.log('Chamadas mockPush:', mockPush.mock.calls)
        expect(mockPush).toHaveBeenCalledWith('/releases?query=Teste')
      },
      { timeout: 10000 }
    )
  })
})
