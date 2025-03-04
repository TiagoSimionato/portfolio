import type { ProjectItem } from 'types/projects';

const projects: ProjectItem[] = [
  {
    description:
      'Glypho é um projeto de compilador para ser utilizado através da web. É um projeto FullStack que conta com uma interface FrontEnd que se conecta à API Rest do BackEnd para realizar a compilação do código escrito. Sua interface possui coloração automática de código utilizando expressões regulares e a compilação pode ser feita para 3 linguagens-algo a escolha: Java, JavaScript ou Python',
    externalLink: 'https://tiago-simionato.github.io/GlyphoFE/',
    imgAlt: 'Interface do Glypho',
    imgPath: 'assets/images/glypho-interface.webp',
    name: 'Glypho',
  },
  {
    description:
      'O projeto consiste em uma Landing Page moderna, responsiva e acessível. A página conta com um carrosel, diversas animações e foi desenvolvida utilizando React e Tailwind CSS',
    externalLink: 'https://frontend-test-tiago.vercel.app/',
    imgAlt: 'Interface do Soft everywhere',
    imgPath: 'assets/images/sew.webp',
    name: 'Landing Page',
  },
  {
    description:
      'Página desenvolvida durante a quinta edição do desafio de front-end da Alura. Simula a vitrine de uma loja virtual que vende produtos da cultura pop.',
    externalLink: 'https://tiagoalurageek.vercel.app/',
    imgAlt: 'Interface do Alura Geek',
    imgPath: 'assets/images/alurageek.webp',
    name: 'Alura Geek',
  },
  {
    description:
      'Organo é uma aplicação feita com React onde é possível realizar a organização e exibição de diversos times. O app tem por padrão times de desenvolvedores, mas o dinamismo da página permite a criação de novos times, bem como a criação de novos integrantes',
    externalLink: 'https://organo-tiago.vercel.app/',
    imgAlt: 'Interface do Organo',
    imgPath: 'assets/images/organo.webp',
    name: 'Organo',
  },
  {
    description:
      'Landing Page feita com AstroJs, um framework focado na performance. Conta com responsividade e diversas animações que são acionada automaticamente ao descer a página',
    externalLink: 'https://landing-page-sew.vercel.app/',
    imgAlt: 'Captura da Página Soft Everywhere',
    imgPath: 'assets/images/sewlp.webp',
    name: 'Soft Everywhere Landing Page',
  },
];

export default projects;
