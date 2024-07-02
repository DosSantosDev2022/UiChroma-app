'use client'

import React from 'react'
import { useState } from 'react'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'

interface Accordion {
  question: string // recebe as questões
  answer: string // recebe as respostas
}

export function Accordion({ answer, question }: Accordion) {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className="flex flex-col rounded-t-lg bg-cyan-700 p-6">
      <button
        aria-expanded={accordionOpen}
        aria-controls="accordionContent"
        role="button"
        tabIndex={0}
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="mb-4 flex w-full items-center justify-between gap-2"
      >
        <span className="w-full text-start text-xl font-semibold text-zinc-50">
          {question}
        </span>
        {accordionOpen ? (
          <span className=" flex h-[40px] w-[40px] items-center justify-center rounded-md p-2 text-2xl text-zinc-50">
            <LuChevronUp />
          </span>
        ) : (
          <span className=" flex h-[40px] w-[40px] items-center justify-center rounded-md p-2 text-2xl text-zinc-50">
            <LuChevronDown />
          </span>
        )}
      </button>
      {accordionOpen ? (
        <div
          className=" grid grid-rows-[1fr] overflow-hidden  font-medium opacity-100 transition-all
        duration-300 ease-in-out"
        >
          <span className=" overflow-hidden text-start text-sm font-normal  text-zinc-50">
            {answer}
          </span>
        </div>
      ) : (
        <div
          className=" grid  grid-rows-[0fr] overflow-hidden  opacity-0  transition-all
        duration-300 ease-in-out"
        >
          <span className=" overflow-hidden text-start text-sm font-normal  text-zinc-50">
            {answer}
          </span>
        </div>
      )}
    </div>
  )
}
