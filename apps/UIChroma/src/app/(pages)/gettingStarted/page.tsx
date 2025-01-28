import { RichText } from '@/components/global/cms/rich-text'
import { defaultRenderers } from '@/components/global/cms/RichTextRenderers'
import {
  ContentSections,
  MainContainer,
  SectionNavigation,
  SectionPage,
  WrapperSections
} from '@/components/global/containers/pageContainers'
import { NavigateThroughSections } from '@/components/global/NavigateThroughSections'
import { Title } from '@/components/global/title'
import { links } from '@/enums/documentation'
import { GET_PAGE_DATA } from '@/services/get-page-data'

export default async function Starter() {
  const slug = 'getStarted'
  const { documentationPage } = await GET_PAGE_DATA(slug)

  return (
    <MainContainer>
      <SectionPage>
        <Title>{documentationPage.title}</Title>
        <WrapperSections>
          <ContentSections id="Introdução">
            {documentationPage.sectionOne && (
              <RichText
                content={documentationPage.sectionOne?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Primeiros-Passos">
            {documentationPage.sectionTwo && (
              <RichText
                content={documentationPage.sectionTwo?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Instalação">
            {documentationPage.sectionThree && (
              <RichText
                content={documentationPage.sectionThree?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Usando">
            {documentationPage.sectionFour && (
              <RichText
                content={documentationPage.sectionFour?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Personalização">
            {documentationPage.sectionFive && (
              <RichText
                content={documentationPage.sectionFive?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Exemplos">
            {documentationPage.sectionSix && (
              <RichText
                content={documentationPage.sectionSix?.content.raw}
                renderers={defaultRenderers}
              />
            )}
          </ContentSections>

          <ContentSections id="Exemplos2">
            {documentationPage.sectionSeven && (
              <RichText
                content={documentationPage.sectionSeven?.content.raw}
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
