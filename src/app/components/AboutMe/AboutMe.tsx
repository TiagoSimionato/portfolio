import { Stack, Typography } from '@mui/material';
import { Avatar } from 'components';
import { tokens } from 'tokens';

export const AboutMe = () => (
  <Stack py="2rem" sx={{
    alignItems: 'center',
    flexDirection: { md: 'row', xs: 'column' },
    gap: '2rem',
    margin: 'auto',
    maxWidth: tokens.breakpoints.xl,
  }}
  >
    <Avatar />
    <Stack sx={{ gap: '1.5rem' }}>
      <Typography variant="h2">Sobre mim</Typography>
      <Typography>
        Sou desenvolvedor apaixonado por tecnologia, lógica e desafios! Por causa da minha vontade de dar mais vida aos códigos que desenvolvia durante a graduação decidi me especializar em Front End, tendo como meu framework principal o React.
      </Typography>
      <Typography>
        Também utilizo tecnologias voltadas para o Backend, tendo como meu foco principal o Java e todo o ecossistema Spring, tal como Spring Boot, Spring Data e Spring Security.
      </Typography>
      <Typography>
        Gosto de estar sempre aprendendo coisas novas e minha maior realização é ver o resultado de meu trabalho tendo um impacto positivo na vida das pessoas.
      </Typography>
    </Stack>
  </Stack>
);
