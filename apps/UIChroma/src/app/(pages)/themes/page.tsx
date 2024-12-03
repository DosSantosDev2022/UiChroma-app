import { ContentSections, MainContainer, SectionNavigation, SectionPage, WrapperSections } from "@/components/global/containers/pageContainers"
import { Title } from "@/components/global/title/title"
import { GET_THEMES_PAGE_DATA } from "@/utils/getThemesPageData"

export default async function ThemesPage() {

  const { documentationPage } = await GET_THEMES_PAGE_DATA()
  return <>
    <MainContainer>
      <SectionPage>
        <WrapperSections>
          <ContentSections id="">
            <Title>{documentationPage.title}</Title>
          </ContentSections>

        </WrapperSections>

      </SectionPage>

      <SectionNavigation></SectionNavigation>
    </MainContainer>
  </>
}