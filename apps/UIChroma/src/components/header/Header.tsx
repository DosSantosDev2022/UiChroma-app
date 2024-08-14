import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import Modal from '@/components/modal/modalSearch'
import { IoLogoFigma } from 'react-icons/io5'
import { fetchHygraphQuery } from '@/app/api/cms/hygraph'

interface GetSearch {
  components: {
    id: string
    slug:string
    componentName:string
  }[]
}

const GET_SEARCH = (): Promise<GetSearch> => {
  const query=`
      query MyQuery {
      components {
        id
        slug
        componentName
      }
    }
  `
  return fetchHygraphQuery(query)
}

export async function Header() {
  const { components } = await GET_SEARCH()
  return (
    <header className="flex h-16 w-full items-center justify-between bg-primary-950 border-b px-6 shadow-xl">
      <Modal data={components} />

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
