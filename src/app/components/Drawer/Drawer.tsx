import { Box, List, ListItem, Drawer as MUIDrawer } from '@mui/material';
import { tabs } from 'app/constants';
import { useDrawerStore, useTabStore } from 'stores';

export const Drawer = () => {
  const { open, setDrawerStore } = useDrawerStore();
  const { setTabStore } = useTabStore();

  return (
    <MUIDrawer open={open} onClose={() => setDrawerStore(false)} anchor="right">
      <Box width={250} py="2rem">
        <List>
          {tabs.map(({ icon, label }, index) => (
            <ListItem
              key={label}
              sx={{ gap: '1rem', py: '2rem' }}
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
