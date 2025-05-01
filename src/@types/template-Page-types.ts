export type DocsLink = {
  id: string;
  title: string
  label: string;
  url: string;
};

export type Feature = {
  id: string;
  name: string;
};

export type TemplateCode = {
  id: string;
  name: string;
  identifier: string;
  description: string;
  blockCode: string;
};

interface navLinks {
	id: string
	label: string
	url: string
}

export type Template = {
  slug: string;
  name: string;
  description: string;
  version: string;
  docsLinks: DocsLink[];
  features: Feature[];
  templateCode: TemplateCode[];
  navigateThroughSections: navLinks[]
};

export type MyQueryResponse = {
  template: Template | null;
};

export type MyQueryVariables = {
  slug: string;
};
