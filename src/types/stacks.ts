import type Formats from 'types/ImageFormats';

export type StackItem = {
  externalLink?: string;
  imgAlt: string;
  imgPath: `${string}.${Formats}`;
  name: string;
};
