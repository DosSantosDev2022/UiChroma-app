'use client'

import {
  Field,
  InputIcon,
  InputRoot,
} from '@repo/ChromaUI/components/input/Input.tsx'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

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
      <InputRoot className="h-11 w-[296px] ">
        <InputIcon>
          <BsSearch className="text-secondary-50" />
        </InputIcon>
        <Field
          type="text"
          id="search"
          name="search"
          placeholder="Buscar por releases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputRoot>
    </div>
  )
}
