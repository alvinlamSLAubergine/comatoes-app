import ExpandDrawer from '@mui/icons-material/MenuOpen';
import { IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { PropsWithChildren } from 'react';
import logo from '../../assets/comatoes.svg';
import { NAV_SECTION_LABELS } from '../../constants';
import { NavSection } from '../../types';
import { DrawerItem } from './drawer-item';

interface DashboardLayoutProps extends PropsWithChildren {
  activeSection: NavSection;
  onNavSectionClick?: (section: NavSection) => void;
  drawerWidth?: number;
  appBarHeight?: number;
}

const DashboardLogo = () => (
  <img
    src={logo}
    alt='logo'
    style={{ height: '40px', marginRight: '16px' }}
  />
);

export const DashboardLayout = ({
  children,
  activeSection,
  onNavSectionClick,
  drawerWidth = 200,
  appBarHeight = 64,
}: DashboardLayoutProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        color='transparent'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 'none',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          height: `${appBarHeight}px`,
        }}
      >
        <Toolbar>
          <IconButton sx={{ marginRight: 2 }}>
            <ExpandDrawer />
          </IconButton>
          <DashboardLogo />
          <Typography
            variant='h5'
            fontWeight={600}
            color='primary'
          >
            Comatoes
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            marginTop: `${appBarHeight}px`,
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {Object.values(NavSection).map((section) => (
            <DrawerItem
              key={section}
              label={NAV_SECTION_LABELS[section]}
              selected={activeSection === section}
              onClick={() => onNavSectionClick?.(section)}
            />
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
