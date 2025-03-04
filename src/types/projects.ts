import type Formats from 'types/ImageFormats';

export type ProjectItem = {
  description: string;
  externalLink: string;
  imgAlt: string;
  imgPath: `${string}.${Formats}`;
  name: string;
};
