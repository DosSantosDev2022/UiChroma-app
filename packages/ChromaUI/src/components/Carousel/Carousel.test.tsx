import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Carousel } from './Carousel'

const images = ['', '', '']

describe('Component Carousel', () => {
  const mockChildren = [
    <img src="https://placehold.co/600x400" alt="slide01" key="1" />,
    <img src="https://placehold.co/600x400" alt="slide02" key="2" />,
    <img src="https://placehold.co/600x400" alt="slide03" key="3" />
  ]

  it('should correctly render the carousel component', () => {
    render(<Carousel children={mockChildren} />)

    expect(screen.getByAltText('slide01')).toBeInTheDocument()
    expect(screen.getByAltText('slide02')).toBeInTheDocument()
    expect(screen.getByAltText('slide03')).toBeInTheDocument()
  })

  it('should not render carousel component when there is no image url', () => {
    render(<Carousel children={images} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('should navigate to the next slide when next button is clicked', async () => {
    render(<Carousel children={mockChildren} />)

    fireEvent.click(screen.getByLabelText('Next Slide'))

    await waitFor(() => {
      expect(screen.getByAltText('slide02')).toBeInTheDocument()
    })
  })

  it('should navigate to the prev slide when prev button is clicked', async () => {
    render(<Carousel children={mockChildren} />)

    fireEvent.click(screen.getByLabelText('Previous Slide'))

    await waitFor(() => {
      expect(screen.getByAltText('slide02')).toBeInTheDocument()
    })
  })
})
