import type { StackItem } from 'types';
import css from 'assets/icons/css.svg';
import docker from 'assets/icons/docker.svg';
import expo from 'assets/icons/expo.svg';
import github from 'assets/icons/github.svg';
import html from 'assets/icons/html.svg';
import js from 'assets/icons/js.svg';
import kubernetes from 'assets/icons/kubernetes.svg';
import nextjs from 'assets/icons/nextjs.svg';
import postgresql from 'assets/icons/postgresql.svg';
import react from 'assets/icons/react.svg';
import spring from 'assets/icons/spring.svg';
import tailwindcss from 'assets/icons/tailwind.svg';
import ts from 'assets/icons/ts.svg';
import astro from 'assets/images/astro.png';

export const stacks: StackItem[] = [
  {
    externalLink: 'https://nextjs.org/',
    img: nextjs,
    imgAlt: 'Logo next.js',
    name: 'Next.js',
  },
  {
    externalLink: 'https://expo.dev/',
    img: expo,
    imgAlt: 'Logo expo',
    name: 'Expo',
  },
  {
    externalLink: 'https://react.dev/',
    img: react,
    imgAlt: 'Logo react',
    name: 'React / React Native',
  },
  {
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    img: js,
    imgAlt: 'Logo javascript',
    name: 'JavaScript',
  },
  {
    externalLink: 'https://www.typescriptlang.org/',
    img: ts,
    imgAlt: 'Logo typescript',
    name: 'TypeScript',
  },
  {
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    img: html,
    imgAlt: 'Logo html',
    name: 'HTML',
  },
  {
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    img: css,
    imgAlt: 'Logo css',
    name: 'CSS',
  },
  {
    externalLink: 'https://tailwindcss.com/',
    img: tailwindcss,
    imgAlt: 'Logo tailwind css',
    name: 'TailWind CSS',
  },
  {
    externalLink: 'https://www.docker.com/',
    img: docker,
    imgAlt: 'Logo docker',
    name: 'Docker',
  },
  {
    externalLink: 'https://kubernetes.io/',
    img: kubernetes,
    imgAlt: 'Logo kubernetes',
    name: 'Kubernetes',
  },
  {
    externalLink: 'https://spring.io/',
    img: spring,
    imgAlt: 'Logo spring',
    name: 'Spring',
  },
  {
    externalLink: 'https://www.postgresql.org/',
    img: postgresql,
    imgAlt: 'Logo postgresql',
    name: 'PostgreSQL',
  },
  {
    externalLink: 'https://github.com/',
    img: github,
    imgAlt: 'Logo github',
    name: 'GitHub',
  },
  {
    externalLink: 'https://astro.build/',
    img: astro,
    imgAlt: 'Logo astro',
    name: 'Astro',
  },
];
