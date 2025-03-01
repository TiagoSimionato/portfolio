import { Stack, Typography } from '@mui/material';
import Image from 'components/Image';

export const AboutMe = () => (
  <Stack
    id="aboutme"
    sx={{
      alignItems: 'center',
      flexDirection: { md: 'row', xs: 'column' },
      gap: '2rem',
      margin: 'auto',
      maxWidth: 1440,
    }}
  >
    <Image
      src="assets/images/tiago.jpg"
      alt="Autor da Página"
      style={{ borderRadius: '100%', boxShadow: '1px 1px 20px -5px rgba(0, 0, 0, 0.7)', height: 220, width: 220 }}
    />
    <Stack sx={{ gap: '1.5rem' }}>
      <Typography variant="h2">Sobre mim</Typography>
      <Typography>
        Sou desenvolvedor apaixonado por tecnologia, lógica e desafios! Por causa da minha vontade de dar mais vida aos códigos que desenvolvia durante a graduação decidi me especializar em Front End, assim poderia desenvolver aplicações com um grau de contato mais direto com o usuário final. Desde então aprendi a utilizar diversas tecnlogias usadas no Front, sendo meu framework principal o React.js
      </Typography>
      <Typography>
        Gosto de estar sempre aprendendo coisas novas e minha principal realização é ver as aplicações que desenvolvo sendo úteis para as pessoas em seu dia a dia.
      </Typography>
    </Stack>
  </Stack>
);
