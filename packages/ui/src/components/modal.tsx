'use client'

import { useState } from 'react'
import { Button } from './button'

export default function Modal() {
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

              {/*  Modal body */}

              <div className="space-4 p-4 md:p-5">
                <p className="text-base leading-relaxed text-zinc-700">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-zinc-700 ">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
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
