import { initApi } from './api';
import { DashboardLayout } from './components';
import { NavigationProvider, useNavigation } from './navigation';
import { ClientsPage, TestPage2 } from './pages';
import { NavSection } from './types';

function App() {
  // init API
  initApi();

  // TODO: Decomission Toolpad and AppProvider
  return (
    <NavigationProvider>
      <AppDashboard />
    </NavigationProvider>
  );
}

const AppDashboard = () => {
  const { activeSection, updateActiveSection } = useNavigation();

  const activeSectionPage = {
    [NavSection.clients]: <ClientsPage />,
    [NavSection.calculator]: <TestPage2 />,
  }[activeSection];

  return (
    <DashboardLayout
      activeSection={activeSection}
      onNavSectionClick={updateActiveSection}
    >
      {activeSectionPage}
    </DashboardLayout>
  );
};

export default App;
