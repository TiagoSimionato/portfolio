import type { StackItem } from 'types';
import astro from 'assets/images/astro.png';
import css from 'assets/images/css.webp';
import github from 'assets/images/github.webp';
import html from 'assets/images/html.webp';
import js from 'assets/images/js.webp';
import postgresql from 'assets/images/postgresql.webp';
import react from 'assets/images/react.webp';
import tailwindcss from 'assets/images/tailwindcss.webp';
import ts from 'assets/images/ts.webp';

const stacks: StackItem[] = [
  {
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    img: js,
    imgAlt: 'logo javasript',
    name: 'JavaSript',
  },
  {
    externalLink: 'https://www.typescriptlang.org/',
    img: ts,
    imgAlt: 'logo typescript',
    name: 'TypeScript',
  },
  {
    externalLink: 'https://react.dev/',
    img: react,
    imgAlt: 'logo react',
    name: 'React.JS',
  },
  {
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    img: html,
    imgAlt: 'logo html',
    name: 'HTML',
  },
  {
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    img: css,
    imgAlt: 'logo css',
    name: 'CSS',
  },
  {
    externalLink: 'https://astro.build/',
    img: astro,
    imgAlt: 'logo astro',
    name: 'Astro',
  },
  {
    externalLink: 'https://www.postgresql.org/',
    img: postgresql,
    imgAlt: 'logo postgresql',
    name: 'PostgreSQL',
  },
  {
    externalLink: 'https://github.com/',
    img: github,
    imgAlt: 'logo github',
    name: 'GitHub',
  },
  {
    externalLink: 'https://tailwindcss.com/',
    img: tailwindcss,
    imgAlt: 'logo tailwind css',
    name: 'TailWind CSS',
  },
];

export default stacks;
