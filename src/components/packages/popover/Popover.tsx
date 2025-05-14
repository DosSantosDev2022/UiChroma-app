'use client'
import React, {
	createContext,
	type ReactNode,
	useContext,
	useState,
} from 'react'
import { twMerge } from 'tailwind-merge'

interface PopoverContextProps {
	isOpen: boolean
	toggleOpen: () => void
	error?: string
}

const PopoverContext = createContext<PopoverContextProps | undefined>(
	undefined,
)

const usePopoverContext = () => {
	const context = useContext(PopoverContext)
	if (!context) {
		throw new Error(
			'DropDown components must be used within a DropDown provider',
		)
	}
	return context
}

const PopoverProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleOpen = () => setIsOpen((prev) => !prev)

	return (
		<PopoverContext.Provider value={{ isOpen, toggleOpen }}>
			{children}
		</PopoverContext.Provider>
	)
}

const PopoverRoot = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => (
	<PopoverProvider>
		<div
			{...props}
			className={twMerge('relative h-full', className)}
			ref={ref}
		/>
	</PopoverProvider>
))

PopoverRoot.displayName = 'PopoverRoot'

/* const DropDownGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={twMerge('', className)} />
))

DropDownGroup.displayName = 'DropDownGroup' */

const PopoverTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithRef<'button'>
>(({ className, ...props }, ref) => {
	const { toggleOpen, isOpen } = usePopoverContext()
	return (
		<button
			onClick={toggleOpen}
			aria-expanded={isOpen}
			{...props}
			className={twMerge(
				'flex w-full items-center justify-center gap-1 rounded border border-border px-2 py-1.5',
				'transition-all duration-300 cursor-pointer',
				'bg-background text-primary hover:bg-muted-hover active:scale-95',
				'select-none outline-none focus:bg-muted-hover focus:ring-1 focus:ring-muted focus:ring-offset-1',
				className,
			)}
			ref={ref}
		/>
	)
})

PopoverTrigger.displayName = 'PopoverTrigger'

interface PopoverContentProps extends React.ComponentPropsWithRef<'div'> {
	position?: 'absolute' | 'sticky'
	alignment?:
		| 'top'
		| 'bottom'
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
}

const PopoverContent = React.forwardRef<
	HTMLDivElement,
	PopoverContentProps
>(
	(
		{ className, position = 'sticky', alignment = 'bottom', ...props },
		ref,
	) => {
		const { isOpen } = usePopoverContext()

		const alignmentClasses = {
			top: 'bottom-full',
			bottom: 'top-full',
			'top-left': 'bottom-0 right-full mr-1',
			'top-right': 'bottom-0 left-full ml-1',
			'bottom-left': 'top-0 right-full mr-1',
			'bottom-right': 'top-0 left-full ml-1',
		}
		return (
			isOpen && (
				<div
					data-state={isOpen ? 'open' : 'closed'}
					{...props}
					className={twMerge(
						`${position} ${alignmentClasses[alignment]}`,
						' z-50 w-72 mb-2 mt-2 rounded-md shadow-md outline-none border border-border bg-background p-4',
						'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
						'',
						className,
					)}
					ref={ref}
				/>
			)
		)
	},
)

PopoverContent.displayName = 'PopoverContent'

export {
	PopoverContent,
	PopoverProvider,
	PopoverRoot,
	PopoverTrigger,
	usePopoverContext,
}
