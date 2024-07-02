import { GetStarterData } from "@/types/pages"
import { fetchHygraphQuery } from "../api/cms/hygraph"
import { RichText } from "@/components/global/rich-text"
import { inter } from "../fonts"

const GET_STARTER_PAGE_DATA = async (): Promise<GetStarterData> => {
  const query =`
    query MyQuery {
      getstarted(where: {slug: "getstarter"}) {
        content {
          raw
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}
export default async function Starter() {
  const {getstarted} = await GET_STARTER_PAGE_DATA()
  return <div className="space-y-2">
    <RichText content={getstarted.content.raw}
    renderers={{
      h1:({children}) => <h1 className={` ${inter.className} font-bold text-primary-900 text-4xl`} >{children}</h1>,
      h3:({children}) =>(
        <h3
      className={`text-start text-2xl
       font-extrabold tracking-tight text-primary-900 `}
    >
      {children}
    </h3>
      ),
      h4:({children}) =>(
        <h4
      className={`text-start text-2xl
       font-extrabold tracking-tight text-primary-900 `}
    >
      {children}
    </h4>),
    p:({children}) => (
      <p className='w-[768px] text-base font-normal text-primary-900'>{children}</p>
    ),

    code_block: ({ children }) => (
      <pre className="bg-zinc-950 w-[768px]  p-4 rounded-md overflow-x-auto
      scrollbar-thin scrollbar-track-blumine-900 scrollbar-thumb-blumine-50">
        <code className="text-zinc-50">{children}</code>
      </pre>
    ),
    li: ({ children }) => (
      <ul className="text-primary-800">{children}</ul>
    ),
    ul: ({ children }) => (
      <ul className="space-y-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ul className="space-y-4">{children}</ul>
    ),
    }}
    />
  </div>
}
