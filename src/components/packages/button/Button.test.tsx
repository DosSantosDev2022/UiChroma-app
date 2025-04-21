import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button, type ButtonProps } from './Button'

describe('Component Button', () => {
	const renderButton = (props: ButtonProps) =>
		render(
			<Button variants={props.variants} sizes={props.sizes}>
				{props.children}
			</Button>,
		)

	it('Checks if the button component renders correctly', () => {
		renderButton({ children: 'Render button' })
		expect(screen.getByText('Render button')).toBeInTheDocument()
	})

	const variants: { name: ButtonProps['variants']; className: string }[] =
		[
			{ name: 'primary', className: 'bg-primary' },
			{ name: 'secondary', className: 'bg-secondary' },
			{ name: 'accent', className: 'bg-accent' },
			{ name: 'outline', className: 'bg-accent-foreground' },
			{ name: 'ghost', className: 'bg-background' },
			{ name: 'link', className: 'bg-transparent' },
			{ name: 'danger', className: 'bg-danger' },
			{ name: 'warning', className: 'bg-warning' },
			{ name: 'success', className: 'bg-success' },
			{ name: 'shine', className: 'bg-primary' },
			{ name: 'swipe', className: 'bg-accent' },
			{ name: 'disabled', className: 'bg-accent' },
		]

	for (const { name, className } of variants) {
		it(`should render with the correct ${name} variant`, () => {
			renderButton({ children: name, variants: name })
			expect(screen.getByText(name || '')).toHaveClass(className)
		})
	}

	const sizes: { name: ButtonProps['sizes']; className: string }[] = [
		{ name: 'xs', className: 'w-24' },
		{ name: 'sm', className: 'w-28' },
		{ name: 'lg', className: 'w-28' },
		{ name: 'icon', className: 'w-8 h-8' },
		{ name: 'full', className: 'w-full' },
	]

	for (const { name, className: expectedClass } of sizes) {
		it(`should render with the correct ${name} size`, () => {
			renderButton({ children: name, sizes: name })
			expect(screen.getByText(name || '')).toHaveClass(expectedClass)
		})
	}

	it('should call onClick when clicked', async () => {
		const user = userEvent.setup()
		const handleClick = vi.fn()

		render(<Button onClick={handleClick}>Click me</Button>)
		const button = screen.getByText('Click me')
		await user.click(button)

		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('should  render as a button by default', () => {
		renderButton({ children: 'Click me' })
		const button = screen.getByText('Click me')
		expect(button.tagName).toBe('BUTTON') // garante que é um <button/>
	})

	it('should render as a child element when asChild is true', () => {
		render(
			<Button asChild>
				<a href='/test'>Click me</a>
			</Button>,
		)
		const button = screen.getByText('Click me')
		expect(button.tagName).toBe('A') // Garante que é um <a/>
		expect(button).toHaveAttribute('href', '/test')
	})
})
