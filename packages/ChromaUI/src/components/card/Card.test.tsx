import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './Card'

describe('Component card', () => {
  it('should correctly render the card component', () => {
    render(<Card>Test card</Card>)

    expect(screen.getByLabelText('card-root')).toBeInTheDocument()
  })

  it('should render all subcomponents correctly inside Card', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )

    expect(screen.getByLabelText('card-header')).toBeInTheDocument()
    expect(screen.getByLabelText('card-title')).toBeInTheDocument()
    expect(screen.getByLabelText('card-description')).toBeInTheDocument()
    expect(screen.getByLabelText('card-content')).toBeInTheDocument()
    expect(screen.getByLabelText('card-footer')).toBeInTheDocument()
  })
})
