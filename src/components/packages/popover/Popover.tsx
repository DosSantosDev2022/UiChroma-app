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
				'flex  w-full items-center justify-center gap-1 rounded border px-2 py-1.5',
				'transition-all duration-300',
				'bg-background text-primary hover:bg-muted-hover',
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
						`${position} ${alignmentClasses[alignment]} mt-1 w-full rounded-md border bg-background p-4`,
						'data-[state=open]:animate-smooth-fadein',
						'data-[state=closed]:animate-smooth-fadeout',
						className,
					)}
					ref={ref}
				/>
			)
		)
	},
)

PopoverContent.displayName = 'PopoverContent'

const PopoverList = React.forwardRef<
	HTMLUListElement,
	React.ComponentPropsWithRef<'ul'>
>(({ className, ...props }, ref) => (
	<ul
		{...props}
		className={twMerge('flex flex-col space-y-1', className)}
		ref={ref}
	/>
))

PopoverList.displayName = 'PopoverList'

const PopoverItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentPropsWithRef<'li'>
>(({ className, ...props }, ref) => (
	<li
		{...props}
		className={twMerge(
			'cursor-pointer px-2 py-1.5 hover:bg-muted-hover focus:ring-2 focus:ring-primary focus:ring-offset-2',
			className,
		)}
		ref={ref}
	/>
))

PopoverItem.displayName = 'PopoverItem'

const PopoverLabel = React.forwardRef<
	HTMLLabelElement,
	React.ComponentPropsWithRef<'span'>
>(({ className, ...props }, ref) => {
	return (
		<div className='w-full p-2'>
			<span
				className={twMerge(
					'border-b-2 pb-1 pt-1 text-start text-sm font-semibold text-muted-foreground ',
					className,
				)}
				ref={ref}
				{...props}
			/>
		</div>
	)
})

PopoverLabel.displayName = 'PopoverLabel'

const PopoverIcon = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithRef<'i'>
>(({ className, ...props }, ref) => {
	return (
		<i
			className={twMerge('text-primary', className)}
			{...props}
			ref={ref}
		/>
	)
})

PopoverIcon.displayName = 'PopoverIcon'

export {
	PopoverContent,
	PopoverIcon,
	PopoverItem,
	PopoverLabel,
	PopoverList,
	PopoverProvider,
	PopoverRoot,
	PopoverTrigger,
}
