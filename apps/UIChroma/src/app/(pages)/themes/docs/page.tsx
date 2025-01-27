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
import { links } from '@/enums/themes'
import { GET_PAGE_DATA } from '@/services/get-page-data'

export default async function ThemesPage() {
  const slug = 'themes'
  const { documentationPage } = await GET_PAGE_DATA(slug)
  return (
    <>
      <MainContainer>
        <SectionPage>
          <WrapperSections>
            <ContentSections id="Introdução">
              <Title>{documentationPage.title}</Title>
              {documentationPage.sectionOne && (
                <RichText
                  content={documentationPage.sectionOne.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Estrutura">
              <Title>{documentationPage.sectionTwo?.title}</Title>
              {documentationPage.sectionTwo && (
                <RichText
                  content={documentationPage.sectionTwo.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Dark">
              <Title>{documentationPage.sectionThree?.title}</Title>
              {documentationPage.sectionThree && (
                <RichText
                  content={documentationPage.sectionThree.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Personalização">
              <Title>{documentationPage.sectionFour?.title}</Title>
              {documentationPage.sectionFour && (
                <RichText
                  content={documentationPage.sectionFour.content.raw}
                  renderers={defaultRenderers}
                />
              )}
            </ContentSections>

            <ContentSections id="Integração">
              <Title>{documentationPage.sectionFive?.title}</Title>
              {documentationPage.sectionFive && (
                <RichText
                  content={documentationPage.sectionFive.content.raw}
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
    </>
  )
}
