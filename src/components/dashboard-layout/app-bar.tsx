import ExpandDrawer from '@mui/icons-material/Menu';
import ShrinkDrawer from '@mui/icons-material/MenuOpen';
import { IconButton, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/comatoes.svg';

interface DashboardLayoutProps {
  appBarHeight: number;
  isDrawerOpen?: boolean;
  onDrawerToggle?: () => void;
}

const DashboardLogo = () => (
  <img
    src={logo}
    alt='logo'
    style={{ height: '40px', marginRight: '16px' }}
  />
);

export const AppBar = ({ appBarHeight, isDrawerOpen, onDrawerToggle }: DashboardLayoutProps) => {
  return (
    <MuiAppBar
      position='fixed'
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        height: `${appBarHeight}px`,
      }}
    >
      <Toolbar>
        <IconButton
          sx={{ marginRight: 2 }}
          onClick={onDrawerToggle}
        >
          {isDrawerOpen ? <ShrinkDrawer /> : <ExpandDrawer />}
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
    </MuiAppBar>
  );
};
