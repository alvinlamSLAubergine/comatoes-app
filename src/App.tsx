import { DashboardLayout } from '@toolpad/core';
import { AppProvider } from '@toolpad/core/AppProvider';
import { Outlet } from 'react-router-dom';
import { initApi } from './api';
import logo from './assets/comatoes.svg';
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
