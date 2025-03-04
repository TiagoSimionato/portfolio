import type { ProjectItem } from 'types';
import { Link, Stack, Typography } from '@mui/material';
import { PAGE_PADDING } from 'components';
import Image from 'next/image';
import { tokens } from 'tokens';

type CardProps = {
  active?: boolean;
} & ProjectItem;

export const CARD_MAX_WIDTH = 500;

const CARD_MARGIN = '0.5rem';

export const Card = ({
  description,
  externalLink,
  img,
  imgAlt,
  name,
}: CardProps) => (
  <Stack
    m={`0 ${CARD_MARGIN}`}
    sx={{
      backgroundColor: tokens.colors.primaryTransparent,
      borderRadius: 0.1,
      boxShadow: '1px 1px 20px -5px rgba(0, 0, 0, 0.7)',
      display: 'flex',
      height: 1,
      maxWidth: { md: CARD_MAX_WIDTH, xs: `calc(100vw - ${PAGE_PADDING.xs} - ${PAGE_PADDING.xs} - ${CARD_MARGIN} - ${CARD_MARGIN})` },
      width: CARD_MAX_WIDTH,
    }}
  >
    <Link
      href={externalLink}
      target="_blank"
      rel="noreferrer"
      sx={{
        ':hover *': {
          color: tokens.colors.contrast,
        },
        'display': 'flex',
        'flexDirection': 'column',
        'flexGrow': 1,
      }}
    >
      <Image
        src={img}
        alt={imgAlt}
        style={{ borderRadius: '1%', height: 'fit-content', width: '100%' }}
      />
      <Typography
        variant="h3"
        p={{ md: '1rem 1.5rem', xs: 0 }}
        m={{ md: 0, xs: '1rem' }}
        sx={{
          textDecorationColor: tokens.colors.contrast,
          textDecorationLine: 'underline',
          textDecorationThickness: 1,
          textUnderlineOffset: 13,
        }}
      >
        {name}
      </Typography>
      <Typography
        p={{ md: '0 1.5rem 1.5rem 1.5rem', xs: '0 1rem 1rem 1rem' }}
        m="auto"
      >
        {description}
      </Typography>
    </Link>
  </Stack>
);
