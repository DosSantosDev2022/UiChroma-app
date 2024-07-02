'use client'
import Link from 'next/link'

import { FaGithub } from 'react-icons/fa'

import Modal from './modalSearch'
import { IoLogoFigma } from 'react-icons/io5'

export function Header() {
  return (
    <header className="bg-primary-950 flex h-20 w-full max-w-[1440px] items-center justify-end px-8 py-6 ">
      <div className="flex w-full items-center justify-between gap-8">
        <Modal />

        <div className="flex items-center gap-4">
          <Link className="duration-300 hover:scale-105" href={''}>
            <IoLogoFigma size={24} />
          </Link>
          <Link
            className="duration-300 hover:scale-105"
            href={'https://github.com/DosSantosDev2022/UiChroma'}
            target="_blank"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </header>
  )
}
