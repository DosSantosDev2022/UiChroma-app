import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { RichText } from '@/components/global/cms/rich-text'
import {
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections,
  ContentSections,
} from '@/components/global/containers/pageContainers'
import { NavigateThroughSections } from '@/components/global/navigationScroll/NavigateThroughSections'
import { Title } from '@/components/global/title/title'
import { links } from '@/enums/documentation'
import { GET_STARTER_PAGE_DATA } from '@/utils/getStartPageData'

export default async function Starter() {
  const { documentationPage } = await GET_STARTER_PAGE_DATA()

  return (
    <MainContainer>
      <SectionPage>
        <Title>{documentationPage.title}</Title>
        <WrapperSections>
          <ContentSections id="Introdução">
            {documentationPage.section && (
              <RichText
                content={documentationPage.section?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Primeiros-Passos">
            {documentationPage.section02 && (
              <RichText
                content={documentationPage.section02?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Instalação">
            {documentationPage.section03 && (
              <RichText
                content={documentationPage.section03?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Usando">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Personalização">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Exemplos">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Exemplos2">
            {documentationPage.section04 && (
              <RichText
                content={documentationPage.section04?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>
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
