'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '../../../../../packages/ui/src/components/button'
import { BsSearch } from 'react-icons/bs'
import { InputRoot, ComponentInput, InputIcon } from './input'

/* import Link from 'next/link'
import { v4 as uuid } from 'uuid' */

export default function Modal() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  /* const [filtered, setFiltered] = useState(routes) */

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  /* useEffect(() => {
    if (searchTerm) {
      setFiltered(
        routes.filter((routes) =>
          routes.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      )
    } else {
      setFiltered([
        { name: 'Documentação', path: '/', id: uuid() },
        { name: 'Templates', path: '/templates', id: uuid() },
        { name: 'Releases', path: '/releases', id: uuid() },
      ])
    }
  }, [searchTerm]) */
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
        <div className="fixed left-0 right-0 top-0 z-50 flex   max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-900/50 md:inset-0 ">
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
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </Button>
              </div>
              <form className="w-full">
                <InputRoot className="w-full ">
                  <InputIcon>
                    <BsSearch />
                  </InputIcon>
                  <ComponentInput
                    placeholder="Buscar ..."
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setSearchTerm(e.target.value)
                    }
                  />
                </InputRoot>
              </form>
            </div>

            {/* <div className="space-4  max-h-80 overflow-y-auto p-4 scrollbar-thin scrollbar-track-secondary-50 scrollbar-thumb-primary-800 md:p-5">
              {filtered.length > 0 ? (
                <ul>
                  {filtered.map((filter) => (
                    <li className="flex flex-col gap-1" key={filter.name}>
                      <Link
                        className="w-full rounded-md border p-2 text-primary-800 transition-all duration-200 hover:bg-primary-800 hover:text-secondary-50"
                        href={filter.path}
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
            </div> */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
