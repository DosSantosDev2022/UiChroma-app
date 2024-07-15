'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '@repo/ui/components/button.tsx'
import { BsSearch } from 'react-icons/bs'
import { InputRoot, ComponentInput, InputIcon } from '@repo/ui/components/input.tsx'
import Link from 'next/link'

interface Component {
  id: string;
  slug: string;
  componentName: string;
}

interface ModalProps {
  data: Component[];
}

export default function Modal({data}:ModalProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filtered, setFiltered] = useState<Component[]>([]);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if(value) {
      const filteredComponents = data.filter((data) =>
        data.componentName.toLowerCase().includes(value)
      );
  
      setFiltered(filteredComponents);
    }else {
      setFiltered([]);
    }
  };

  return (
    <>
      <Button
        className="flex w-[360px] items-center justify-start gap-4 px-6 py-3"
        onClick={handleOpenModal}
      >
        <BsSearch size={20} />
        Buscar ...
      </Button>

      {isOpenModal ? (
        <div className="fixed left-0 right-0 top-0 z-50 flex   max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-900/50 backdrop-blur-sm md:inset-0 ">
          <div className="relative max-h-full  w-full max-w-2xl  rounded-lg bg-secondary-50 p-2">
            {/* Modal content */}

            {/* Modal Header */}

            <div className="flex w-full flex-col items-center justify-between gap-4 rounded-t border-b p-4 md:p-5 ">
              <div className="flex w-full items-center  justify-between  ">
                <h3 className="text-xl font-semibold text-primary-900">
                  Encontre o seu componente
                </h3>
                <Button
                  variant="primary"
                  onClick={handleOpenModal}
                  type="button"
                  className="ms-auto flex h-8 w-8 items-center justify-center rounded-lg "
                >
                  X
                  <span className="sr-only">Close modal</span>
                </Button>
              </div>
              <form className="w-full">
                <InputRoot className="w-full bg-primary-900 focus-within:ring-primary-800">
                  <InputIcon>
                    <BsSearch />
                  </InputIcon>
                  <ComponentInput
                    placeholder="Buscar ..."
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
                        {filter.componentName}
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
