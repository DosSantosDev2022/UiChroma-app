import {
  ContentSections,
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections
} from '@/components/global/containers/pageContainers'
import { NavigateThroughSections } from '@/components/global/NavigateThroughSections'
import { links } from '@/enums/documentation'

export default async function DocumentationPage() {
  return (
    <MainContainer>
      <SectionPage>
        <WrapperSections>
          <ContentSections></ContentSections>
        </WrapperSections>
      </SectionPage>
      <SectionNavigation>
        <NavigateThroughSections links={links} />
      </SectionNavigation>
    </MainContainer>
  )
}
