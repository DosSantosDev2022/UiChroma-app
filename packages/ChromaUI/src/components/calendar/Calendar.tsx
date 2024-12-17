'use client'
import {
  add,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isSameDay,
  isWithinInterval,
  startOfMonth,
  startOfWeek,
  sub
} from 'date-fns'
import React, { useEffect, useState } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface DatePickerProps {
  value: Date | null
  // eslint-disable-next-line no-unused-vars
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
    <div className="border-border/20 flex w-full max-w-[300px] flex-col items-center justify-center rounded-2xl border p-4">
      <div className="mb-2 flex items-center gap-2">
        <div className="border-border/20 flex w-full items-center justify-between gap-8 rounded-xl border px-0.5 py-0.5 text-sm font-medium text-muted-foreground">
          <button
            className="rounded-lg p-2 transition-all duration-500 hover:bg-accent hover:text-accent-foreground"
            onClick={prevMonth}
          >
            <LuChevronLeft />
          </button>
          {format(currentDate, 'MMMM yyyy')}
          <button
            className="rounded-lg p-2 transition-all duration-500 hover:bg-accent hover:text-accent-foreground"
            onClick={nextMonth}
          >
            <LuChevronRight />
          </button>
        </div>
      </div>

      <table className="w-full pb-3">
        <thead className="mb-2">
          <tr className="flex">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(
              (dayName) => (
                <td
                  key={dayName}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <p className="flex h-full w-full items-center justify-center rounded-full text-sm font-medium text-muted-foreground">
                    {dayName}
                  </p>
                </td>
              )
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
                        className="flex h-10 w-10 items-center justify-center"
                      >
                        <p
                          onClick={() => handleSelectDate(date)}
                          className={`cursor-pointer text-sm font-medium 
                            ${isCurrentMonth
                              ? 'text-foreground'
                              : 'text-muted-foreground'
                            } flex h-full w-full items-center justify-center rounded-full transition-all duration-300 
                             ${isSelected || isStart || isEnd
                              ? 'bg-primary text-primary-foreground'
                              : isInRange
                                ? 'bg-accent text-accent-foreground'
                                : isToday
                                  ? 'bg-accent text-accent-foreground'
                                  : 'hover:bg-accent-hover'
                            }`}
                        >
                          {date.getDate()}
                        </p>
                      </td>
                    )
                  })}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}
