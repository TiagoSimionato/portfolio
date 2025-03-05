import { Box, List, ListItem, Drawer as MUIDrawer, Typography } from '@mui/material';
import { tabs } from 'app/constants';
import { useDrawerStore, useTabStore } from 'stores';

export const Drawer = () => {
  const { open, setDrawerStore } = useDrawerStore();
  const { setTabStore } = useTabStore();

  return (
    <MUIDrawer open={open} onClose={() => setDrawerStore(false)} anchor="right">
      <Box width={250} py="2rem">
        <List>
          {tabs.map(({ label, icon }, index) => (
            <ListItem
              key={label}
              sx={{ py: '2rem', gap: '1rem' }}
              onClick={() => {
                setTabStore(index);
                setDrawerStore(false);
              }}
            >
              <Box className={icon} sx={{ fontSize: '1.5rem' }} aria-hidden />
              {label}
            </ListItem>
          ))}
        </List>
      </Box>
    </MUIDrawer>
  );
};
