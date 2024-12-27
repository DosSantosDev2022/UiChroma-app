'use client'
import {
  ELLIPSIS_LEFT,
  ELLIPSIS_RIGTH,
  usePagination
} from '@/hooks/usePagination/index'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@repo/ChromaUI/components'

const PaginationPreview = () => {
  const { isCurrentPage, pages } = usePagination({
    page: 1,
    limit: 10,
    total: 100
  })
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious />
        {pages.map((page, index) => {
          if (page === ELLIPSIS_LEFT || page === ELLIPSIS_RIGTH) {
            return <PaginationEllipsis key={index}>{page}</PaginationEllipsis>
          }

          return (
            <PaginationItem key={index}>
              <PaginationLink
                href={`?page=${page}`}
                aria-current={isCurrentPage(Number(page)) ? 'page' : 'false'}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}
        <PaginationNext />
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationPreview
