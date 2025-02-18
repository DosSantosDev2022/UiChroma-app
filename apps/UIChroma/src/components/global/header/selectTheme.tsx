'use client'
import { useThemeStore } from '@/store/use-Theme-Store'
import { Button } from '@repo/ChromaUI/components'
import { useCallback, useEffect } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

const SelectTheme = () => {
	const { theme, setTheme } = useThemeStore()

	const applyThemeToIframe = useCallback(() => {
		const iframe = document.querySelector('iframe')
		if (iframe?.contentDocument) {
			const iframehtml = iframe.contentDocument.documentElement
			if (iframehtml) {
				iframehtml.classList.toggle('dark', theme === 'dark')
			}
		}
	}, [theme])

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark')
		applyThemeToIframe()
	}, [theme, applyThemeToIframe])

	const handleThemeToggle = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	useEffect(() => {
		const savedTheme =
			(localStorage.getItem('theme') as 'light' | 'dark') || 'light'
		setTheme(savedTheme)
	}, [setTheme])

	return (
		<Button variants='accent' onClick={handleThemeToggle} sizes='icon'>
			{theme === 'light' ? <MdSunny /> : <FaMoon />}
		</Button>
	)
}

export { SelectTheme }
