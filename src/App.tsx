import { AppProvider } from '@toolpad/core';
import { DashboardLayout } from './dashboard/layout';
import { theme } from './theme';

const DashboardLogo = () => (
  <img
    src='/comatoes.svg'
    alt='logo'
  />
);

function App() {
  return (
    <AppProvider
      theme={theme}
      branding={{
        logo: <DashboardLogo />,
        title: 'Comatoes',
      }}
    >
      <DashboardLayout />
    </AppProvider>
  );
}

export default App;
