import { Pagination } from '@/components/packages'

const PaginationPreview = () => {
	const currentPage = 1
	const totalItems = 500
	const itemsPerPage = 10

	return (
		<Pagination
			limit={itemsPerPage}
			page={currentPage}
			total={totalItems}
		/>
	)
}

export default PaginationPreview
