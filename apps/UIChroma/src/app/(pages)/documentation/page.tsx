import {
  ContentSections,
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections,
} from '@/components/global/containers/pageContainers'
import { NavigateThroughSections } from '@/components/global/navigationScroll/NavigateThroughSections'
import { Title } from '@/components/global/title/title'
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
        <Title as="h3" className="text-lg">
          Navegue nessa página
        </Title>
        <NavigateThroughSections links={links} />
      </SectionNavigation>
    </MainContainer>
  )
}
