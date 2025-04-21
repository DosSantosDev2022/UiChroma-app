'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { DatePicker, Button } from '@/components/packages'
import { format } from 'date-fns'
import { FaFilterCircleXmark } from 'react-icons/fa6'

const FilterReleasesByDate = () => {
	const searchParams = useSearchParams()
	const { push } = useRouter()

	// Captura as datas atuais da URL (ou null se não existirem)
	const currentStartDate = searchParams.get('startDate')
	const currentEndDate = searchParams.get('endDate')

	const [dateRange, setDateRange] = useState<{
		startDate: Date | null
		endDate: Date | null
	}>({
		startDate: currentStartDate ? new Date(currentStartDate) : null,
		endDate: currentEndDate ? new Date(currentEndDate) : null,
	})

	// Função para atualizar a URL com as novas datas
	const updateDateQuery = useCallback(() => {
		const params = new URLSearchParams(searchParams.toString())

		if (dateRange.startDate) {
			params.set('startDate', format(dateRange.startDate, 'yyyy-MM-dd'))
		} else {
			params.delete('startDate')
		}

		if (dateRange.endDate) {
			params.set('endDate', format(dateRange.endDate, 'yyyy-MM-dd'))
		} else {
			params.delete('endDate')
		}

		push(`/releases?${params.toString()}`)
	}, [dateRange, searchParams, push])

	// Atualiza a URL sempre que as datas mudam
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const timeout = setTimeout(updateDateQuery, 500)
		return () => clearTimeout(timeout)
	}, [dateRange, updateDateQuery])

	// Função para limpar os filtros
	const handleClearFilters = () => {
		// Limpa as datas e a URL
		setDateRange({ startDate: null, endDate: null })
		const params = new URLSearchParams(searchParams.toString())

		// Remove startDate e endDate
		params.delete('startDate')
		params.delete('endDate')

		// Atualiza a URL sem parâmetros de data
		push(`/releases?${params.toString()}`)
	}

	return (
		<div className='space-x-1 flex items-center justify-end p-2'>
			<DatePicker date={dateRange} onChange={setDateRange} />
			{/* Botão para limpar os filtros */}
			<Button sizes='icon' variants='ghost' onClick={handleClearFilters}>
				<FaFilterCircleXmark />
			</Button>
		</div>
	)
}

export { FilterReleasesByDate }
