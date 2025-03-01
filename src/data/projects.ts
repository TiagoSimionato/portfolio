import type IProjectItem from 'types/IProjectItem';

const projects: IProjectItem[] = [
  {
    description:
      'Landing Page feita com AstroJs. Uma página com excelente performance, conta com responsividade e diversas animações que são acionada automaticamente ao descer a página',
    externalLink: 'https://landing-page-sew.vercel.app/',
    imgAlt: 'Captura da Página Soft Everywhere',
    imgPath: 'assets/images/sewlp.webp',
    name: 'Soft Everywhere Landing Page',
  },
  {
    description:
      'Glypho Compiler é um projeto de compilador para ser utilizado através da web. É um projeto FullStack que conta com uma interface FrontEnd que se conecta à API Rest do BackEnd para realizar a compilação do código escrito. Sua interface simples e intuitiva possui coloração automática de código utilizando diversas expressões regulares e a compilação pode ser feita para 3 linguagens-algo a escolha: Java, JavaScript ou Python',
    externalLink: 'https://tiago-simionato.github.io/GlyphoFE/',
    imgAlt: 'Interface do Glypho',
    imgPath: 'assets/images/glypho-interface.webp',
    name: 'Glypho',
  },
  {
    description:
      'O projeto consiste em uma Landing Page moderna, responsiva e acessível criada a partir de um Figma. A página conta com um carrosel, diversas animações e foi desenvolvida utilizando React e Tailwind CSS',
    externalLink: 'https://frontend-test-tiago.vercel.app/',
    imgAlt: 'Interface do Soft everywhere',
    imgPath: 'assets/images/sew.webp',
    name: 'Soft Everywhere Test',
  },
  {
    description:
      'Página desenvolvida durante a quinta edição do desafio de front-end da Alura. Simula a vitrine de uma loja virtual que vende produtos da cultura pop. Desenvolvido apenas com HTML, CSS e JavaScript',
    externalLink: 'https://tiagoalurageek.vercel.app/',
    imgAlt: 'Interface do Alura Geek',
    imgPath: 'assets/images/alurageek.webp',
    name: 'Alura Geek',
  },
  {
    description:
      'Organo é uma aplicação feita com React onde é possível realizar a organização e exibição de diversos times. Por base são times de desenvolvedores, mas o dinamismo da página permite a criação de novos times, bem como a criação de novos integrantes',
    externalLink: 'https://organo-tiago.vercel.app/',
    imgAlt: 'Interface do Organo',
    imgPath: 'assets/images/organo.webp',
    name: 'Organo',
  },
];

export default projects;
