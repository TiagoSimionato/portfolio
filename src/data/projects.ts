import type { ProjectItem } from 'types';
import aluraGeek from 'assets/images/alurageek.webp';
import glypho from 'assets/images/glypho-interface.webp';
import organo from 'assets/images/organo.webp';
import scrubin from 'assets/images/scrubin.webp';
import ladingPage from 'assets/images/sew.webp';
import sew from 'assets/images/sewlp.webp';

export const projects: ProjectItem[] = [
  {
    description:
      'Sou desenvolvedor das aplicações da Scrub-in, onde participei em diversas fontes de desenvolvimento. Atuei na parte web utilizando Next.js, na criação do app para dispositivos móveis com React Native e no Desenvolvimento da API utilizando o ecossistema Spring',
    externalLink: 'https://www.scrubin.com.br/',
    img: scrubin,
    imgAlt: 'Scrub-in',
    name: 'Scrub-in',
  },
  {
    description:
      'Glypho é um projeto de compilador para ser utilizado através da web. É um projeto FullStack que conta com uma interface FrontEnd que se conecta à API Rest do BackEnd para realizar a compilação do código escrito. Sua interface possui coloração automática de código utilizando expressões regulares e a compilação pode ser feita para 3 linguagens-algo a escolha: Java, JavaScript ou Python',
    externalLink: 'https://tiagosimionato.github.io/GlyphoFE/',
    img: glypho,
    imgAlt: 'Interface do Glypho',
    name: 'Glypho',
  },
  {
    description:
      'O projeto consiste em uma Landing Page moderna, responsiva e acessível. A página conta com um carrosel, diversas animações e foi desenvolvida utilizando React e Tailwind CSS',
    externalLink: 'https://frontend-test-tiago.vercel.app/',
    img: ladingPage,
    imgAlt: 'Interface do Soft everywhere',
    name: 'Modern Landing Page',
  },
  {
    description:
      'Página desenvolvida durante a quinta edição do desafio de front-end da Alura. Simula a vitrine de uma loja virtual que vende produtos da cultura pop.',
    externalLink: 'https://tiagoalurageek.vercel.app/',
    img: aluraGeek,
    imgAlt: 'Interface do Alura Geek',
    name: 'Alura Geek',
  },
  {
    description:
      'Organo é uma aplicação feita com React onde é possível realizar a organização e exibição de diversos times. O app tem por padrão times de desenvolvedores, mas o dinamismo da página permite a criação de novos times, bem como a criação de novos integrantes',
    externalLink: 'https://organo-tiago.vercel.app/',
    img: organo,
    imgAlt: 'Interface do Organo',
    name: 'Organo',
  },
  {
    description:
      'Landing Page feita com AstroJs, um framework focado na performance. Conta com responsividade e diversas animações que são acionada automaticamente ao descer a página',
    externalLink: 'https://landing-page-sew.vercel.app/',
    img: sew,
    imgAlt: 'Captura da Página Soft Everywhere',
    name: 'Soft Everywhere Landing Page',
  },
];
