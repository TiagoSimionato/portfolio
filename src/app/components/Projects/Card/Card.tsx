import type IProjectItem from 'types/IProjectItem';
import { Link, Stack, Typography } from '@mui/material';
import variables from 'common/variables.json';
import { PAGE_PADDING } from 'components';
import Image from 'components/Image';

type CardProps = {
  active?: boolean;
} & IProjectItem;

export const CARD_MAX_WIDTH = 500;

const CARD_MARGIN = '0.5rem';

export const Card = ({
  description,
  externalLink,
  imgAlt,
  imgPath,
  name,
}: CardProps) => (
  <Stack
    m={`0 ${CARD_MARGIN}`}
    sx={{
      backgroundColor: variables.colors.primaryTransparent,
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
      underline="none"
      sx={{ color: 'white', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
    >
      <Image
        src={imgPath}
        alt={imgAlt}
        style={{ borderRadius: '1%', width: '100%' }}
      />
      <Typography
        variant="h3"
        p={{ md: '1rem 1.5rem 0.5rem 1.5rem', xs: '0 0 0.5rem 0' }}
        m={{ md: 0, xs: '1rem 1rem 0.5rem 1rem' }}
        mb="0.5rem"
        sx={{
          textDecorationColor: variables.colors.contrast,
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
