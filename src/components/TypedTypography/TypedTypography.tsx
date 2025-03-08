import type { TypographyProps } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { Stack, Typography } from '@mui/material';

type ConditionalProps = {
  children?: never;
  content: string[];
  loop: true;
} | {
  children?: PropsWithChildren['children'];
  content?: never;
  loop?: false;
};
export type TypedTypographyProps = Omit<TypographyProps, 'children' | 'content'> & ConditionalProps;

export const TypedTypography = ({ children, content, loop, sx, ...rest }: TypedTypographyProps) => {
  const text = loop ? content[0] : typeof children === 'string' ? children : '';
  const steps = text.length;
  const durations = steps / 15;
  return (
    <Stack>
      <Typography
        {...rest}
        sx={{
          ' @keyframes blink': {
            from: { borderRight: '.15rem solid white' },
            to: { borderRight: '.15rem solid transparent' },
          },
          ' @keyframes typing': {
            from: { width: 0 },
            to: { width: 1 },
          },
          'animation': `typing ${durations}s steps(${steps}, end) forwards ${loop ? 'infinite alternate' : ''}, blink 1s infinite`,
          'overflow': 'hidden',
          'textWrap': 'nowrap',
          'width': 0,
          ...sx,
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};
