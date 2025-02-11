import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CmsRichText> & { id?: string }

const RichText = ({ id, ...props }: RichTextProps) => {
  return (
    <div className="space-y-4" id={id}>
      <CmsRichText {...props} />
    </div>
  )
}

export { RichText }
