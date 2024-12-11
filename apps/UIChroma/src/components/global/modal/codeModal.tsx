'use client'

import React, { ReactNode, useState } from 'react'
import { Button } from '@repo/ChromaUI/components/button/Button.tsx'

export default function Modal({ children }: { children: ReactNode }) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  return (
    <>
      <Button onClick={handleOpenModal} variant="primary">
        Abrir
      </Button>

      {isOpenModal ? (
        <div className="fixed left-0 right-0 top-0 z-50 flex   max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-900/50 md:inset-0 ">
          <div className="relative max-h-full w-full max-w-2xl p-4">
            {/* Modal content */}

            <div className="relative rounded-lg bg-zinc-50 shadow ">
              {/* Modal Header */}

              <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 ">
                <h3 className="text-xl font-semibold text-zinc-800">
                  Modal Header
                </h3>
                <Button
                  variant="primary"
                  onClick={handleOpenModal}
                  type="button"
                  className="ms-auto flex h-8 w-8 items-center justify-center rounded-lg "
                >
                  x<span className="sr-only">Close modal</span>
                </Button>
              </div>

              {/*  Modal body */}

              <div className="space-4 p-4 md:p-5">{children}</div>
              {/* Modal footer  */}
              <div className="flex items-center gap-2 rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
                <Button variant="primary" type="button">
                  I accept
                </Button>
                <Button variant="danger" type="button">
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
