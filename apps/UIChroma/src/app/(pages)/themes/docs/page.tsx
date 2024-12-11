import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import {
  ContentSections,
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections
} from '@/components/global/containers/pageContainers'
import { NavigateThroughSections } from '@/components/global/navigationScroll/NavigateThroughSections'
import { Title } from '@/components/global/title/title'
import { links } from '@/enums/themes'
import { GET_THEMES_PAGE_DATA } from '@/utils/getThemesPageData'

export default async function ThemesPage() {
  const { documentationPage } = await GET_THEMES_PAGE_DATA()
  return (
    <>
      <MainContainer>
        <SectionPage>
          <WrapperSections>
            <ContentSections id="Introdução">
              <Title>{documentationPage.title}</Title>
              {documentationPage.section && (
                <RichText
                  content={documentationPage.section.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Estrutura">
              <Title>{documentationPage.section02?.title}</Title>
              {documentationPage.section02 && (
                <RichText
                  content={documentationPage.section02.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Dark">
              <Title>{documentationPage.section03?.title}</Title>
              {documentationPage.section03 && (
                <RichText
                  content={documentationPage.section03.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Personalização">
              <Title>{documentationPage.section04?.title}</Title>
              {documentationPage.section04 && (
                <RichText
                  content={documentationPage.section04.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Integração">
              <Title>{documentationPage.section05?.title}</Title>
              {documentationPage.section05 && (
                <RichText
                  content={documentationPage.section05.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>
          </WrapperSections>
        </SectionPage>

        <SectionNavigation>
          <Title className="text-lg">Navegue por essa página</Title>
          <NavigateThroughSections links={links} />
        </SectionNavigation>
      </MainContainer>
    </>
  )
}
