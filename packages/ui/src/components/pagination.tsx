'use client'

import { usePagination } from '../../../hooks/src/usePagination'
import { Button } from '../components/button'
import { LuChevronsLeft, LuChevronsRight } from 'react-icons/lu'

interface PaginationProps {
  page: number
  limit: number
  total: number
}

export function Pagination({ page, limit, total }: PaginationProps) {
  const { pages } = usePagination({
    page,
    limit,
    total,
  })

  const isFarstPage = page === 1
  const isLastPage = page === Math.ceil(total / limit)

  return (
    <div className="flex w-full items-center justify-between gap-2">
      <span className="text-light flex w-full font-light">
        Mostrando {Math.min(limit, total - (page - 1) * limit)} de {total}
      </span>

      <div className="flex items-center gap-2">
        <Button
          className="flex h-12 w-12 items-center justify-center"
          variant="primary"
          asChild
        >
          {!isFarstPage ? (
            <a href={`/?page=1`}>
              <LuChevronsLeft />
            </a>
          ) : (
            <Button
              variant="disabled"
              className="flex h-12 w-12 items-center justify-center"
            >
              <LuChevronsLeft />
            </Button>
          )}
        </Button>
        {pages.map((pageNumber) => (
          <Button
            asChild
            key={pageNumber}
            className={
              page === pageNumber
                ? 'text-primary " flex h-12 w-12 items-center justify-center  bg-zinc-600 hover:bg-zinc-800'
                : 'flex h-12 w-12 items-center justify-center'
            }
          >
            <a href={`/?page=${pageNumber}`}>{pageNumber}</a>
          </Button>
        ))}

        <Button className="flex h-12 w-12 items-center justify-center" asChild>
          {!isLastPage ? (
            <a href={`/AllPosts?page=${Math.ceil(total / limit)}`}>
              <LuChevronsRight />
            </a>
          ) : (
            <Button
              variant="disabled"
              className="flex h-12 w-12 items-center justify-center"
            >
              <LuChevronsRight />
            </Button>
          )}
        </Button>
      </div>
    </div>
  )
}
