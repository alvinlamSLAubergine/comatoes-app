import { DashboardLayout } from '@toolpad/core';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from '../public/comatoes.svg';
import { initApi } from './api';
import { NAVIGATION } from './navigation';
import { theme } from './theme';

const DashboardLogo = () => (
  <img
    src={logo}
    alt='logo'
  />
);

function App() {
  // init API
  initApi();

  return (
    <AppProvider
      theme={theme}
      navigation={NAVIGATION}
      branding={{
        logo: <DashboardLogo />,
        title: 'Comatoes',
      }}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}

export default App;
