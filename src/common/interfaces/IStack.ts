import type Formats from 'common/types/ImageFormats';

export interface IStack {
  name: string;
  imgPath: `${string}.${Formats}`;
  imgAlt: string;
  externalLink?: string;
}
