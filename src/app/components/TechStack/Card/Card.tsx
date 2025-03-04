import type { StackItem } from 'types';
import { Link, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { tokens } from 'tokens';

export const Card = ({ externalLink, img, imgAlt, name }: StackItem) => {
  const smallScreen = useMediaQuery(`(max-width:${tokens.breakpoints.md}px)`);
  return (
    <Stack>
      <Link
        href={externalLink || '#'}
        target="_blank"
        rel="noreferrer"
        sx={{ ':hover *': { color: tokens.colors.contrast } }}
      >
        <Image
          src={img}
          alt={imgAlt}
          height={smallScreen ? 80 : 150}
          width={smallScreen ? 80 : 150}
        />
        <Typography textAlign="center" mt="1rem" mb="0.5rem">{name}</Typography>
      </Link>
    </Stack>
  );
};
