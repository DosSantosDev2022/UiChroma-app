'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { InputRoot, ComponentInput, InputIcon } from '@repo/ChromaUI/components/input.tsx'
import { BsSearch } from 'react-icons/bs'
import { useEffect, useState } from 'react'

export function SearchReleases() {
  const searchParams = useSearchParams()
  const { push } = useRouter()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '')

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (searchTerm) {
      params.set('query', searchTerm)
    } else {
      params.delete('query')
    }

    push(`/releases?${params.toString()}`)
  }, [searchTerm, push, searchParams])

  return (
    <div className="flex h-14 w-full items-center justify-end p-2">
      <InputRoot className="h-11 w-[296px] rounded-lg bg-primary-900 focus-within:ring-primary-800">
        <InputIcon>
          <BsSearch className="text-secondary-50" />
        </InputIcon>
        <ComponentInput
          type="text"
          id="search"
          name="search"
          className="text-secondary-50 placeholder:text-secondary-50"
          placeholder="Buscar por releases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputRoot>
    </div>
  )
}
