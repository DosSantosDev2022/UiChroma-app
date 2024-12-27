import { fetchHygraphQuery } from '@/app/api/cms/hygraph'
import { ModalSearch } from '@/components/global/modal/modalSearch'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'

interface GetSearch {
  pageComponents: {
    id: string
    slug: string
    name: string
  }[]
}

const GET_SEARCH = (): Promise<GetSearch> => {
  const query = `
      query MyQuery {
      pageComponents {
        id
        slug
        name
      }
    }
  `
  return fetchHygraphQuery(query)
}

const Header = async () => {
  const { pageComponents } = await GET_SEARCH()
  return (
    <header className="col-start-2 row-start-1  flex h-16 w-full items-center justify-between border-b border-border px-6 ">
      <ModalSearch data={pageComponents} />

      <div className="flex items-center gap-4">
        <Link className="duration-300 hover:scale-105" href={''}>
          <IoLogoFigma size={24} />
        </Link>
        <Link
          className="duration-300 hover:scale-105"
          href={'https://github.com/DosSantosDev2022/UiChroma'}
          target="_blank"
        >
          <FaGithub size={24} />
        </Link>
      </div>
    </header>
  )
}

export { Header }
