import { FilterReleasesByDate } from './filter-DateReleases'
import { SearchReleases } from './search-Releases'

const FiltersReleases = () => {
	return (
		<div className='flex items-center justify-end p-2'>
			<SearchReleases />
			<FilterReleasesByDate />
		</div>
	)
}

export { FiltersReleases }
