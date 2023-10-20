import Formats from "common/types/ImageFormats";

export default interface IProjectItem {
  name         : string,
  description  : string,
  imgPath      : `${string}.${Formats}`,
  imgAlt       : string,
  externalLink : string
}
