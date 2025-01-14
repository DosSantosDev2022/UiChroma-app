'use client'
import { useThemeStore } from '@/store/useThemeStore'
import { Button } from '@repo/ChromaUI/components'
import { useEffect } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

const SelectTheme = () => {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
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

