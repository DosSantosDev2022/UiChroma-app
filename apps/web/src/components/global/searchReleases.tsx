'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { InputRoot, ComponentInput, InputIcon } from './input'
import { BsSearch } from 'react-icons/bs'

export function SearchReleases() {
  const searchParams = useSearchParams()
  const { push } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query', term)
    }

    push(`/releases/search?${params.toString()}`)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
          search: { value: string }
        }
        const term = target.search.value
        handleSearch(term)
      }}
      className=" flex h-14 w-full items-center justify-end p-2"
    >
      <InputRoot className="h-11 w-[296px] rounded-lg ">
        <InputIcon>
          <BsSearch />
        </InputIcon>
        <ComponentInput
          type="text"
          id="search"
          className="text-secondary-50 placeholder:text-secondary-50"
          placeholder="Buscar por releases..."
        />
      </InputRoot>
    </form>
  )
}
