import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Bedge'

describe('Component Badge', () => {
  it('The Badge component must render correctly', () => {
    render(
      <Badge variant={'primary'} size={'lg'}>
        Testes
      </Badge>
    )
    expect(screen.getByText('Testes').parentElement)
  })

  it('should render with the correct primary variant', () => {
    render(<Badge variant="primary">primary</Badge>)
    expect(screen.getByText('primary')).toHaveClass('bg-primary')
  })

  it('should render with the correct secondary variant', () => {
    render(<Badge variant="secondary">secondary</Badge>)
    expect(screen.getByText('secondary')).toHaveClass('bg-secondary')
  })
  it('should render with the correct accent variant', () => {
    render(<Badge variant="accent">accent</Badge>)
    expect(screen.getByText('accent')).toHaveClass('bg-accent')
  })
  it('should render with correct muted variant', () => {
    render(<Badge variant="muted">muted</Badge>)
    expect(screen.getByText('muted')).toHaveClass('bg-muted')
  })
})
