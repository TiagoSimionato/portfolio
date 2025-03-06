import { Apps, Code, Home, Person } from '@mui/icons-material';

export const tabs = [
  {
    Icon: Home,
    label: 'Home',
  },
  {
    Icon: Person,
    label: 'Sobre mim',
  },
  {
    Icon: Apps,
    label: 'Projetos',
  },
  {
    Icon: Code,
    label: 'Tecnologias',
  },
] as const;
