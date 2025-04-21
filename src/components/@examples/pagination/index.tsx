'use client'
import {
	ELLIPSIS_LEFT,
	ELLIPSIS_RIGTH,
	usePagination,
} from '@/hooks/usePagination/usePagination'
import {
	PageButton,
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from '@/components/packages'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const PaginationPreview = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const { isCurrentPage, pages } = usePagination({
		page: currentPage,
		limit: 10,
		total: 100,
	})

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationPrevious
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
				/>
				{pages.map((page, index) => {
					if (page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGTH) {
						return (
							<PaginationEllipsis key={uuidv4()}>
								{page}
							</PaginationEllipsis>
						)
					}

					return (
						<PaginationItem key={page}>
							<PageButton
								onClick={() => handlePageChange(Number(page))}
								aria-current={
									isCurrentPage(Number(page)) ? 'page' : 'false'
								}
								isActive={page === currentPage}
							>
								{page}
							</PageButton>
						</PaginationItem>
					)
				})}
				<PaginationNext
					disabled={currentPage === pages[pages.length - 1]}
					onClick={() => handlePageChange(currentPage + 1)}
				/>
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationPreview
