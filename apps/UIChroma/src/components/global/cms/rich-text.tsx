import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CmsRichText>

const RichText = ({ ...props }: RichTextProps) => {
  return <CmsRichText {...props} />
}

export { RichText }
