import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import {
  DropDownRoot,
  DropDownTrigger,
  DropDownContent,
  DropDownItem,
  DropDownLink
} from './Dropdown'

describe('Dropdown component', () => {
  it('should render DropdownTrigger correctly', () => {
    render(
      <DropDownRoot>
        <DropDownTrigger>Toggle</DropDownTrigger>
      </DropDownRoot>
    )

    expect(screen.getByText('Toggle')).toBeInTheDocument()
  })

  it('should toggle DropDownContent visibility  when clicking on DropDownTrigger', () => {
    render(
      <DropDownRoot>
        <DropDownTrigger>Toggle</DropDownTrigger>
        <DropDownContent>Content</DropDownContent>
      </DropDownRoot>
    )

    const trigger = screen.getByText('Toggle')
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    fireEvent.click(trigger)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should render DropDownItem inside DropDownContent', () => {
    render(
      <DropDownRoot>
        <DropDownTrigger>Toggle</DropDownTrigger>
        <DropDownContent>
          <DropDownItem>Item 1</DropDownItem>
          <DropDownItem>Item 2</DropDownItem>
        </DropDownContent>
      </DropDownRoot>
    )

    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})
