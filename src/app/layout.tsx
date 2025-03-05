import { Poppins } from 'next/font/google';
import { Providers } from 'providers';
import '@splidejs/react-splide/css';

const _Poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <html lang="pt-br">
    <head>
      <link rel="icon" href="synthsun.ico" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#451952" />
      <meta
        name="description"
        content="Website showcasing the portfolio of Tiago Simionato"
      />
      <meta property="og:title" content="Portfolio | Tiago Simionato" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Website showcasing the portfolio of Tiago Simionato"
      />
      <meta property="og:image" content="https://github.com/tiagosimionato.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://tiagodev.vercel.app/" />
      <meta property="og:site_name" content="Portfolio de Tiago Simionato" />

      <link rel="manifest" href=" manifest.json" />
      <title>Portfolio Tiago Simionato</title>
    </head>
    <body>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
