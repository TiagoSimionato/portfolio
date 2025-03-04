import type { StackItem } from 'types/stacks';
import { Link, Stack, Typography, useMediaQuery } from '@mui/material';
import Image from 'components/Image';
import { tokens } from 'tokens';

export const Card = ({ externalLink, imgAlt, imgPath, name }: StackItem) => {
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
          src={imgPath}
          alt={imgAlt}
          style={smallScreen ? { height: 80, width: 80 } : { height: 150, width: 150 }}
        />
        <Typography textAlign="center" mt="1rem" mb="0.5rem">{name}</Typography>
      </Link>
    </Stack>
  );
};
