import { beforeEach, it, expect, describe, vi } from 'vitest'
import { Label } from './Label'
import { render, screen } from '@testing-library/react'

describe('Component Label', () => {
  beforeEach(() => {
    render(<Label>Label</Label>)
  })
  it('should render the component correctly', () => {
    expect(screen.getByText('Label'))
  })
})
