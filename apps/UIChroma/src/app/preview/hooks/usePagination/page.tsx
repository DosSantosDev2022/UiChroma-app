import { hooks } from '@/lib/hooks'
import { HeroComponents } from '@/components/global/heroComponents'
import {
  ClipBoardContainer,
  ClipBoardHeader,
  ClipBoardName,
  ClipBoardAction,
  ClipBoardArea,
} from '@/components/ui/clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function UsePaginationDetails() {
  const hook = hooks.find((hook) => hook.name === 'usePagination')

  const codeString = `
    interface UsePaginationProps {
      page: number
      limit: number
      total: number
    }
    
    export const ELLIPSIS_LEFT = '...'
    export const ELLIPSIS_RIGTH = '...'
    
    const generatePages = (page: number, totalPages: number) => {
      const current = Math.min(page, totalPages)
      const total = Math.max(1, totalPages)
    
      if (total <= 7) {
        return Array.from({ length: total }).map((_, i) => i + 1)
      }
    
      if (current < 3) {
        return [1, 2, 3, ELLIPSIS_LEFT, total - 1, total]
      }
    
      if (current === 3) {
        return [1, 2, 3, 4, ELLIPSIS_LEFT, total - 1, total]
      }
    
      if (current > total - 2) {
        return [1, 2, ELLIPSIS_RIGTH, total - 2, total - 1, total]
      }
    
      if (current > total - 2) {
        return [1, 2, ELLIPSIS_RIGTH, total - 3, total - 2, total]
      }
    
      return [
        1,
        ELLIPSIS_LEFT,
        current - 1,
        current,
        current + 1,
        ELLIPSIS_RIGTH,
        total,
      ]
    }
    
    export const usePagination = ({ page, limit, total }: UsePaginationProps) => {
      const totalPages = Math.ceil(total / limit)
      const pages = generatePages(page, totalPages)
      const isCurrentPage = (n: number) => n === page
    
      return { isCurrentPage, pages }
    }
  
  `
  return (
    <div className='"w-full " space-y-6 border p-2'>
      <HeroComponents
        content="Custom Hooks"
        name={hook?.name}
        description={hook?.description}
      />

      <div className="flex flex-col gap-32"></div>

      <ClipBoardContainer>
        <ClipBoardHeader>
          <ClipBoardName name={hook?.name || ''} />
          <ClipBoardAction copyText={codeString} />
        </ClipBoardHeader>
        <ClipBoardArea className="h-full">
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            customStyle={{
              width: '100%',
              padding: '22px',
              borderRadius: '12px',
              background: 'none',
            }}
            showLineNumbers
          >
            {codeString}
          </SyntaxHighlighter>
        </ClipBoardArea>
      </ClipBoardContainer>
    </div>
  )
}
