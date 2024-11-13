'use client'
import React, { useState, useEffect } from 'react'
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  add,
  sub,
  isSameDay,
  isWithinInterval,
  isBefore,
} from 'date-fns'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface DatePickerProps {
  value: Date | null
  onChange: (date: Date | { startDate: Date; endDate: Date }) => void
  range?: boolean // Flag para ativar o modo de seleção de intervalo
}

export function Calendar({ value, onChange, range }: DatePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  useEffect(() => {
    if (!range) {
      setSelectedDate(value as Date)
    }
  }, [value, range])

  // Avançar para o próximo mês
  const nextMonth = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  // Voltar para o mês anterior
  const prevMonth = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setCurrentDate(sub(currentDate, { months: 1 }))
  }

  // Calculando o primeiro e último dia do mês atual
  const startOfCurrentMonth = startOfMonth(currentDate)
  const endOfCurrentMonth = endOfMonth(currentDate)

  // Calculando o início e fim da semana para preencher a tabela
  const startDateOfMonth = startOfWeek(startOfCurrentMonth, { weekStartsOn: 1 })
  const endDateOfMonth = endOfWeek(endOfCurrentMonth, { weekStartsOn: 1 })

  // Gerar todos os dias que vão aparecer no calendário
  const dates: Date[] = []
  let day = startDateOfMonth
  while (day <= endDateOfMonth) {
    dates.push(day)
    day = add(day, { days: 1 })
  }

  // Função para selecionar uma data
  const handleSelectDate = (date: Date) => {
    if (range) {
      if (!startDate || (startDate && endDate)) {
        // Inicia a seleção ou redefine o intervalo
        setStartDate(date)
        setEndDate(null)
      } else if (startDate && !endDate) {
        // Define a data final
        if (isBefore(date, startDate)) {
          // Se a data final for antes da data inicial, inverte o intervalo
          setStartDate(date)
          setEndDate(startDate)
        } else {
          setEndDate(date)
        }
        onChange({ startDate, endDate: date }) // Passa o intervalo para o formulário
      }
    } else {
      setSelectedDate(date)
      onChange(date) // Passa a data selecionada para o formulário
    }
  }

  // Função para verificar se a data está dentro do intervalo
  const isWithinSelectedRange = (date: Date) => {
    if (startDate && endDate) {
      return isWithinInterval(date, { start: startDate, end: endDate })
    }
    return false
  }

  return (
    <div className="w-full max-w-[300px] flex flex-col items-center justify-center p-4 border border-zinc-300 rounded-2xl">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-8 border text-zinc-900 border-zinc-300 w-full justify-between rounded-xl py-0.5 px-0.5 text-sm font-medium ">
          <button
            className="p-2 rounded-lg transition-all duration-500 hover:bg-violet-100 hover:text-violet-800"
            onClick={prevMonth}
          >
            <LuChevronLeft />
          </button>
          {format(currentDate, 'MMMM yyyy')}
          <button
            className=" p-2 rounded-lg transition-all duration-500 hover:bg-violet-100 hover:text-violet-800"
            onClick={nextMonth}
          >
            <LuChevronRight />
          </button>
        </div>
      </div>

      <table className="pb-3 w-full">
        <thead className="mb-2">
          <tr className="flex">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(
              (dayName) => (
                <td
                  key={dayName}
                  className="flex items-center justify-center w-10 h-10"
                >
                  <p className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full">
                    {dayName}
                  </p>
                </td>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil(dates.length / 7) }).map(
            (_, weekIndex) => (
              <tr key={weekIndex} className="flex">
                {dates
                  .slice(weekIndex * 7, weekIndex * 7 + 7)
                  .map((date, dateIndex) => {
                    const isCurrentMonth =
                      date.getMonth() === currentDate.getMonth()
                    const isSelected =
                      !range && selectedDate && isSameDay(date, selectedDate)
                    const isToday = isSameDay(date, new Date())
                    const isInRange =
                      range && startDate && endDate
                        ? isWithinSelectedRange(date)
                        : false
                    const isStart = startDate && isSameDay(date, startDate)
                    const isEnd = endDate && isSameDay(date, endDate)

                    return (
                      <td
                        key={dateIndex}
                        className="flex items-center justify-center w-10 h-10"
                      >
                        <p
                          onClick={() => handleSelectDate(date)}
                          className={`text-sm font-medium cursor-pointer ${
                            isCurrentMonth ? 'text-zinc-900' : 'text-zinc-300'
                          } rounded-full flex items-center justify-center w-full h-full transition-all duration-300 ${
                            isSelected || isStart || isEnd
                              ? 'bg-violet-600 text-zinc-50'
                              : isInRange
                                ? 'bg-violet-200 text-violet-800'
                                : isToday
                                  ? 'bg-violet-400 text-zinc-50'
                                  : 'hover:bg-violet-100'
                          }`}
                        >
                          {date.getDate()}
                        </p>
                      </td>
                    )
                  })}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}
