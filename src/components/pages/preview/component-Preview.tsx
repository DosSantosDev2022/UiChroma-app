'use client'
import type React from 'react'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ComponentPreviewProps {
	componentData: {
		name: string
	}
	path?: string
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
	componentData,
	path = '@examples',
}) => {
	const [Component, setComponent] = useState<React.FC | null>(null)

	useEffect(() => {
		const loadComponent = async () => {
			try {
				const importedComponent = await import(
					`@/components/${path}/${componentData.name.toLowerCase()}`
				)
				setComponent(() => importedComponent.default)
			} catch (error) {
				console.error('Error loading component:', error)
			}
		}

		loadComponent()
	}, [componentData.name, path])

	if (!Component) {
		return (
			<div className='flex items-center justify-center gap-2'>
				<span>Carregando preview</span>
				<AiOutlineLoading3Quarters className='animate-spin' />
			</div>
		)
	}

	return (
		<div className='flex flex-col items-center justify-center border border-border/50 p-2 shadow-sm'>
			<Component />
		</div>
	)
}

export default ComponentPreview
