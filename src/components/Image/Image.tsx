import type Formats from 'types/ImageFormats';

type Props = {
  alt: string;
  src: `${string}.${Formats}`;
  style?: React.CSSProperties;
};

export const Image = ({ alt, src, style }: Props) => {
  const lastdotIndex = src.lastIndexOf('.');
  const format = src.substring(lastdotIndex + 1);
  const path = src.substring(0, lastdotIndex);

  return (
    <picture>
      <source srcSet={`${path}.webp`} type="image/webp" />
      <source srcSet={src} type={`image/${format}`} />
      <img src={`${src}.asdasd`} alt={alt} style={style} />
    </picture>
  );
};
