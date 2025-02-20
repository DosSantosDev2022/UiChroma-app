import { FilterReleasesByDate } from './filter-DateReleases'
import { SearchReleases } from './search-Releases'

const FiltersReleases = () => {
	return (
		<div className='w-full flex items-center justify-end p-2'>
			<div className='flex flex-col lg:flex-row gap-2'>
				<SearchReleases />
				<FilterReleasesByDate />
			</div>
		</div>
	)
}

export { FiltersReleases }
