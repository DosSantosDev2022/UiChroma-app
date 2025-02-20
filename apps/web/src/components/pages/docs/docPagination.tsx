import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const pages = ['gettingstarted', 'cli', 'themes', 'dark', 'sass']

const getPagesIndex = (slug: string) => {
	return pages.indexOf(slug)
}

const getNextPage = (slug: string) => {
	const currentIndex = getPagesIndex(slug)
	if (currentIndex < pages.length - 1) {
		return pages[currentIndex + 1]
	}

	return null
}

const getPreviousPage = (slug: string) => {
	const currentIndex = getPagesIndex(slug)
	if (currentIndex > 0) {
		return pages[currentIndex - 1]
	}

	return null
}

const Pagination = ({ slug }: { slug: string }) => {
	const nextPage = getNextPage(slug)
	const previousPage = getPreviousPage(slug)

	return (
		<div className='flex justify-between items-center p-2'>
			{previousPage && (
				<Link
					className={twMerge(
						'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ',
						'font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1',
						' focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
						'hover:bg-primary hover:text-primary-foreground w-24 h-9 px-4 py-2',
					)}
					href={`/docs/${previousPage}`}
				>
					{previousPage}
				</Link>
			)}

			{nextPage && (
				<Link
					className={twMerge(
						'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ',
						'font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1',
						'focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
						'hover:bg-primary hover:text-primary-foreground w-24 h-9 px-4 py-2',
					)}
					href={`/docs/${nextPage}`}
				>
					{nextPage}
				</Link>
			)}
		</div>
	)
}

export { Pagination }
