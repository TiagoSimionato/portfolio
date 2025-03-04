import type { StaticImageData } from 'next/image';

export type StackItem = {
  externalLink?: string;
  img: StaticImageData;
  imgAlt: string;
  name: string;
};
