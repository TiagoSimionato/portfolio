import type { StackItem } from 'types';
import { Link, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { tokens } from 'tokens';

type StackProps = StackItem & {
  tabIndex?: number;
};

export const Card = ({ externalLink, img, imgAlt, name, tabIndex }: StackProps) => {
  const smallScreen = !useMediaQuery(`(min-width:${tokens.breakpoints.md}px)`);

  return (
    <Stack>
      <Link
        href={externalLink || '#'}
        rel="noreferrer"
        sx={{ ':hover *': { color: tokens.colors.contrast } }}
        tabIndex={tabIndex}
        target="_blank"
      >
        <Image
          alt={imgAlt}
          height={smallScreen ? 80 : 150}
          src={img}
          width={smallScreen ? 80 : 150}
        />
        <Typography mb="0.5rem" mt="1rem" textAlign="center">{name}</Typography>
      </Link>
    </Stack>
  );
};
