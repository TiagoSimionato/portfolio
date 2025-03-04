import { Button, Link, Stack, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import { tabs } from 'app/constants';
import { useEffect } from 'react';
import { useTabStore } from 'stores/tab';
import { tokens } from 'tokens';
import { useToggle } from 'usehooks-ts';

export const Header = () => {
  const smallScreen = useMediaQuery('(max-width:900px)'); // TODO FIX
  const [_, toggleDrawer, setDrawer] = useToggle(false);
  const { setTabStore, tab } = useTabStore();

  useEffect(() => {
    smallScreen && setDrawer(false);
  }, [setDrawer, smallScreen]);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" minHeight={65} paddingX={{ md: '4rem', xs: '1rem' }} sx={{ backdropFilter: 'blur(5px)', backgroundColor: tokens.colors.primaryTransparent }}>
      <Typography component="h1" sx={{ fontSize: { md: '1.75rem', xs: '1rem' } }}>
        <Link
          href="https://github.com/tiagosimionato"
          target="_blank"
          rel="noreferrer"
        >
          Tiago Henrique
        </Link>
      </Typography>
      <Button
        className="bx bxs-grid"
        onClick={toggleDrawer}
        style={{ display: smallScreen ? undefined : 'none' }}
        sx={{ fontSize: '2.5rem' }}
      />
      <Tabs value={tab} onChange={(_, value) => setTabStore(value)} sx={{ display: smallScreen ? 'none' : undefined }}>
        {tabs.map(({ label }, index) => (
          <Tab key={label} label={label} value={index} sx={{ paddingY: '1.5rem' }} />
        ))}
      </Tabs>
    </Stack>
  );
};
