import { RichTextContent } from '@graphcms/rich-text-types'

export  interface HomePageData {
  documentationPage: {
    id: string;
    slug: string;
    title: string;
    section: {
      title: string;
      description: string;
      content: {
        raw: RichTextContent;
      };
    };
    section02: {
      title: string;
      description: string;
      content: {
        raw: RichTextContent;
      };
    };
    section03: {
      title: string;
      description: string;
      content: {
        raw: RichTextContent;
      };
    };
    section04: {
      title: string;
      description: string;
      content: {
        raw: RichTextContent;
      };
    };
    section05: {
      title: string;
      id: string;
      content: {
        raw: RichTextContent;
      };
    };
  };
}
