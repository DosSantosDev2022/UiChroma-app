'use client'

import {
  Field,
  InputIcon,
  InputRoot,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalRoot,
  ModalTitle,
  ModalTrigger
} from '@repo/ChromaUI/components'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Component {
  id: string
  slug: string
  name: string
}

interface ModalProps {
  data: Component[]
}

const ModalSearch = ({ data }: ModalProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState<Component[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase()
    setSearchTerm(value)

    if (value) {
      const filteredComponents = data.filter((data) =>
        data.name.toLowerCase().includes(value)
      )

      setFiltered(filteredComponents)
    } else {
      setFiltered([])
    }
  }

  const handleOpenChange = (newState: boolean) => {
    setIsOpen(newState)
  }

  return (
    <ModalRoot open={isOpen} onOpenChange={handleOpenChange}>
      <ModalTrigger className="w-[320px] justify-start ">
        <BsSearch size={18} />
        Buscar...
      </ModalTrigger>
      <ModalOverlay variant="blur" />
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Encontre o seu componente</ModalTitle>
          <ModalClose>
            X<span className="sr-only">Close modal</span>
          </ModalClose>
        </ModalHeader>
        <form className="w-full">
          <InputRoot>
            <InputIcon>
              <BsSearch />
            </InputIcon>
            <Field
              placeholder="Buscar por componentes..."
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </InputRoot>
        </form>
        <div className="space-4  custom-scrollbar max-h-80 overflow-y-auto">
          {filtered.length > 0 ? (
            <ul>
              {filtered.map((filter) => (
                <li className="flex flex-col space-y-2" key={filter.id}>
                  <Link
                    className="w-full rounded-md border p-2 text-foreground transition-all duration-200 hover:bg-muted-hover hover:text-muted-foreground"
                    href={`/preview/components/${filter.slug}`}
                    onClick={() => handleOpenChange(false)}
                  >
                    {filter.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <span className="font-normal text-muted-foreground">
              Nenhum componente encontrado !
            </span>
          )}
        </div>
      </ModalContent>
    </ModalRoot>
  )
}

export { ModalSearch }
