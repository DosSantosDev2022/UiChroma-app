import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import { RichText } from '@/components/global/cms/rich-text'
import {
  ContentSections,
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections
} from '@/components/global/containers/pageContainers'
import { NavigateThroughSections } from '@/components/global/navigationScroll/NavigateThroughSections'
import { links } from '@/enums/documentation'
import { GET_STARTER_PAGE_DATA } from '@/utils/getStartPageData'

export default async function Starter() {
  const { documentationPage } = await GET_STARTER_PAGE_DATA()

  return (
    <MainContainer>
      <SectionPage>
        <h1 className="text-4xl font-extrabold tracking-wide text-foreground">
          {documentationPage.title}
        </h1>
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
        <NavigateThroughSections links={links} />
      </SectionNavigation>
    </MainContainer>
  )
}
