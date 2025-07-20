import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { PropsWithChildren, useEffect, useState } from 'react';
import { NAV_SECTION_ICONS, NAV_SECTION_LABELS } from '../../constants';
import { NavSection } from '../../types';
import { AppBar } from './app-bar';
import { DrawerItem } from './drawer-item';

interface DashboardLayoutProps extends PropsWithChildren {
  activeSection: NavSection;
  onNavSectionClick?: (section: NavSection) => void;
  drawerOpenWidth?: number;
  drawerCloseWidth?: number;
  appBarHeight?: number;
}

export const DashboardLayout = ({
  children,
  activeSection,
  onNavSectionClick,
  drawerOpenWidth = 240,
  drawerCloseWidth = 64,
  appBarHeight = 64,
}: DashboardLayoutProps) => {
  const theme = useTheme();
  const isSizeSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isSizeMd = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(isSizeMd ? false : true);

  // Update drawer state based on screen size
  useEffect(() => {
    setDrawerOpen(!isSizeMd);
  }, [isSizeMd]);

  const drawerWidth = drawerOpen ? drawerOpenWidth : drawerCloseWidth;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        appBarHeight={appBarHeight}
        isDrawerOpen={drawerOpen}
        onDrawerToggle={() => setDrawerOpen((prev) => !prev)}
      />
      <Drawer
        variant={isSizeSm ? 'temporary' : 'permanent'}
        open={drawerOpen}
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
              icon={NAV_SECTION_ICONS[section]}
              label={NAV_SECTION_LABELS[section]}
              selected={activeSection === section}
              drawerOpen={drawerOpen}
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
