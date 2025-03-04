import type { StaticImageData } from 'next/image';

export type ProjectItem = {
  description: string;
  externalLink: string;
  img: StaticImageData;
  imgAlt: string;
  name: string;
};
