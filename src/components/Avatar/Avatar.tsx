import author from 'assets/images/tiago.webp';
import Image from 'next/image';

export const Avatar = () => (
  <Image
    alt="Autor do portfolio"
    height={250}
    src={author}
    style={{ borderRadius: '100%', boxShadow: '1px 1px 20px -5px rgba(0, 0, 0, 0.7)' }}
    width={250}
  />
);
