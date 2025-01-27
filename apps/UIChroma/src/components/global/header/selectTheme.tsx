'use client'
import { useThemeStore } from '@/store/use-Theme-Store'
import { Button } from '@repo/ChromaUI/components'
import { useEffect } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

const SelectTheme = () => {
  const { theme, setTheme } = useThemeStore()

  const applyThemeToIframe = () => {
    const iframe = document.querySelector('iframe')
    if (iframe && iframe.contentDocument) {
      const iframehtml = iframe.contentDocument.documentElement
      if (iframehtml) {
        iframehtml.classList.toggle('dark', theme === 'dark')
      }
    }
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    applyThemeToIframe()
  }, [theme])

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
    <Button onClick={handleThemeToggle} sizes="icon">
      {theme === 'light' ? <MdSunny /> : <FaMoon />}
    </Button>
  )
}

export { SelectTheme }
