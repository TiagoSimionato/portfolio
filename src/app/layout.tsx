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
      <link href="synthsun.ico" rel="icon" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="#451952" name="theme-color" />
      <meta
        content="Website showcasing the portfolio of Tiago Simionato"
        name="description"
      />
      <meta content="Portfolio | Tiago Simionato" property="og:title" />
      <meta content="website" property="og:type" />
      <meta
        content="Website showcasing the portfolio of Tiago Simionato"
        property="og:description"
      />
      <meta content="https://github.com/tiagosimionato.png" property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="https://tiagodev.vercel.app/" property="og:url" />
      <meta content="Portfolio de Tiago Simionato" property="og:site_name" />

      <link href="manifest.json" rel="manifest" />
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
