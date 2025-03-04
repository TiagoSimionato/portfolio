import author from 'assets/images/tiago.webp';
import Image from 'next/image';

export const Avatar = () => (
  <Image
    src={author}
    width={250}
    height={250}
    alt="Autor do portfolio"
    style={{ borderRadius: '100%', boxShadow: '1px 1px 20px -5px rgba(0, 0, 0, 0.7)' }}
  />
);
