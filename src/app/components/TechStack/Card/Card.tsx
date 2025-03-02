import type { IStack } from 'types/IStack';
import { Link, Stack as MUIStack, Typography, useMediaQuery } from '@mui/material';
import Image from 'components/Image';

export const Card = ({ externalLink, imgAlt, imgPath, name }: IStack) => {
  const smallScreen = useMediaQuery('(max-width:900px)'); // TODO FIX
  return (
    <MUIStack>
      <Link
        href={externalLink || '#'}
        target="_blank"
        rel="noreferrer"
        underline="none"
        sx={{ color: 'white' }}
      >
        <Image
          src={imgPath}
          alt={imgAlt}
          style={smallScreen ? { height: 80, width: 80 } : { height: 150, width: 150 }}
        />
        <Typography textAlign="center" mt="1rem" mb="0.5rem">{name}</Typography>
      </Link>
    </MUIStack>
  );
};
