type Format = 'png' | 'jpg' | 'jpeg' | 'webp';

interface Props {
  src        : `${string}.${Format}`,
  alt        : string,
  className? : string,
}

export function Image({src, alt, className} : Props) {
  const lastdotIndex = src.lastIndexOf('.');
  const format = src.substring(lastdotIndex + 1);
  const path = src.substring(0, lastdotIndex);

  return (
    <picture className={className}>
      <source srcSet={`${path}.webp`} type="image/webp"/>
      <source srcSet={src} type={`image/${format}`} />
      <img src={src} alt={alt} />
    </picture>
  );
}
