import type Formats from 'common/types/ImageFormats';

type IProjectItem = {
  description: string;
  externalLink: string;
  imgAlt: string;
  imgPath: `${string}.${Formats}`;
  name: string;
};
export default IProjectItem;
