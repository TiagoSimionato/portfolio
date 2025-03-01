import type Formats from 'types/ImageFormats';

export type IStack = {
  externalLink?: string;
  imgAlt: string;
  imgPath: `${string}.${Formats}`;
  name: string;
};
