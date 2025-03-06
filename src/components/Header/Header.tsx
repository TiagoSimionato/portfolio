import { Menu as MenuIcon } from '@mui/icons-material';
import { Button, Stack, Tab, Tabs, Typography } from '@mui/material';
import { tabs } from 'app/constants';
import { useDrawerStore, useTabStore } from 'stores';
import { tokens } from 'tokens';

export const Header = () => {
  const { setDrawerStore } = useDrawerStore();
  const { setTabStore, tab } = useTabStore();

  return (
    <Stack
      component="header"
      direction="row"
      sx={{
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        backgroundColor: tokens.colors.primaryTransparent,
        justifyContent: 'space-between',
        minHeight: 65,
        paddingX: { md: '4rem', xs: '1rem' },
        position: 'sticky',
        top: 0,
        zIndex: 2,
      }}
    >
      <Typography variant="h1">
        Portfolio
      </Typography>
      <Button
        onClick={() => setDrawerStore(true)}
        sx={{ visibility: { md: 'hidden', xs: undefined } }}
        aria-label="Menu"
      >
        <MenuIcon sx={{ fontSize: '2rem' }} aria-hidden />
      </Button>
      <Tabs value={tab} onChange={(_, value) => setTabStore(value)} sx={{ display: { md: 'flex', xs: 'none' } }}>
        {tabs.map(({ label }, index) => (
          <Tab key={label} label={label} value={index} sx={{ paddingY: '1.5rem' }} />
        ))}
      </Tabs>
    </Stack>
  );
};
