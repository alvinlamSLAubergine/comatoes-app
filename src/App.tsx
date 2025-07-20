import { AppProvider } from '@toolpad/core/AppProvider';
import { Outlet } from 'react-router-dom';
import { initApi } from './api';
import logo from './assets/comatoes.svg';
import { DashboardLayout } from './components';
import { NAVIGATION } from './navigation';
import { theme } from './theme';
import { NavSection } from './types';

const DashboardLogo = () => (
  <img
    src={logo}
    alt='logo'
  />
);

function App() {
  // init API
  initApi();

  // TODO: Decomission Toolpad and AppProvider
  return (
    <AppProvider
      theme={theme}
      navigation={NAVIGATION}
      branding={{
        logo: <DashboardLogo />,
        title: 'Comatoes',
      }}
    >
      <DashboardLayout activeSection={NavSection.clients}>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}

export default App;
