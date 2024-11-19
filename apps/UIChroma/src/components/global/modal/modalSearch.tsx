'use client'

import { Button } from '@repo/ChromaUI/components/button/Button.tsx'
import { ComponentInput, InputIcon, InputRoot } from '@repo/ChromaUI/components/input/Input.tsx'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Component {
  id: string;
  slug: string;
  name: string;
}

interface ModalProps {
  data: Component[];
}

export default function Modal({ data }: ModalProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState<Component[]>([]);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      const filteredComponents = data.filter((data) =>
        data.name.toLowerCase().includes(value)
      );

      setFiltered(filteredComponents);
    } else {
      setFiltered([]);
    }
  };

  return (
    <>
      <Button
        sizes='full'
        variant='secundary'
        className=" flex  items-center justify-start gap-4 border w-[360px] "
        onClick={handleOpenModal}
      >
        <BsSearch size={20} />
        Buscar...
      </Button>

      {isOpenModal ? (
        <div className="fixed left-0 right-0 top-0 z-50 flex   max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-900/50 backdrop-blur-sm md:inset-0 ">
          <div className="relative max-h-full  w-full max-w-2xl  rounded-lg bg-secondary p-2">
            {/* Modal content */}

            {/* Modal Header */}

            <div className="flex w-full flex-col items-center justify-between gap-4 rounded-t border-b p-4 md:p-5 ">
              <div className="flex w-full items-center  justify-between  ">
                <h3 className="text-xl font-semibold text-secondary-foreground">
                  Encontre o seu componente
                </h3>
                <Button
                  variant="primary"
                  sizes='icon'
                  onClick={handleOpenModal}
                  type="button"
                  className="ms-auto flex rounded-full"
                >
                  X
                  <span className="sr-only">Close modal</span>
                </Button>
              </div>
              <form className="w-full">
                <InputRoot>
                  <InputIcon>
                    <BsSearch />
                  </InputIcon>
                  <ComponentInput
                    placeholder="Buscar componentes..."
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </InputRoot>
              </form>
            </div>

            <div className="space-4  max-h-80 overflow-y-auto p-4 scrollbar-thin scrollbar-track-secondary-50 scrollbar-thumb-primary-800 md:p-5">
              {filtered.length > 0 ? (
                <ul>
                  {filtered.map((filter) => (
                    <li className="flex flex-col gap-1" key={filter.id}>
                      <Link
                        className="w-full rounded-md border p-2 text-primary-800 transition-all duration-200 hover:bg-primary-800 hover:text-secondary-50"
                        href={filter.slug}
                        onClick={handleOpenModal}
                      >
                        {filter.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="font-medium text-primary-800 ">
                  Nenhum componente encontrado !
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}