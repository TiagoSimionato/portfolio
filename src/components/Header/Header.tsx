import { Button, Stack, Tab, Tabs, Typography } from '@mui/material';
import { tabs } from 'app/constants';
import { useDrawerStore, useTabStore } from 'stores';
import { tokens } from 'tokens';

export const Header = () => {
  const { setDrawerStore } = useDrawerStore();
  const { setTabStore, tab } = useTabStore();

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" minHeight={65} paddingX={{ md: '4rem', xs: '1rem' }} sx={{ backdropFilter: 'blur(5px)', backgroundColor: tokens.colors.primaryTransparent }}>
      <Typography variant="h1">
        Portfolio
      </Typography>
      <Button
        className="bx bx-menu"
        onClick={() => setDrawerStore(true)}
        sx={{ fontSize: '2.5rem', visibility: { md: 'hidden', xs: undefined } }}
      />
      <Tabs value={tab} onChange={(_, value) => setTabStore(value)} sx={{ display: { md: 'flex', xs: 'none' } }}>
        {tabs.map(({ label }, index) => (
          <Tab key={label} label={label} value={index} sx={{ paddingY: '1.5rem' }} />
        ))}
      </Tabs>
    </Stack>
  );
};
