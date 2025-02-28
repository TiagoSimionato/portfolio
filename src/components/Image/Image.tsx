import type Formats from 'common/types/ImageFormats';

interface Props {
  src: `${string}.${Formats}`;
  alt: string;
}

export function Image({ alt, src }: Props) {
  const lastdotIndex = src.lastIndexOf('.');
  const format = src.substring(lastdotIndex + 1);
  const path = src.substring(0, lastdotIndex);

  return (
    <picture>
      <source srcSet={`${path}.webp`} type="image/webp" />
      <source srcSet={src} type={`image/${format}`} />
      <img src={`${src}.asdasd`} alt={alt} />
    </picture>
  );
}
