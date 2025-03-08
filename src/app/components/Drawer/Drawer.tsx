import { Box, List, ListItem, Drawer as MUIDrawer } from '@mui/material';
import { tabs } from 'app/constants';
import { useDrawerStore, useTabStore } from 'stores';

export const Drawer = () => {
  const { open, setDrawerStore } = useDrawerStore();
  const { setTabStore } = useTabStore();

  return (
    <MUIDrawer anchor="right" onClose={() => setDrawerStore(false)} open={open}>
      <Box py="2rem" width={250}>
        <List>
          {tabs.map(({ Icon, label }, index) => (
            <ListItem
              key={label}
              onClick={() => {
                setTabStore(index);
                setDrawerStore(false);
              }}
              sx={{ gap: '1rem', py: '2rem' }}
            >
              <Icon aria-hidden sx={{ fontSize: '1.5rem' }} />
              {label}
            </ListItem>
          ))}
        </List>
      </Box>
    </MUIDrawer>
  );
};
