import { DashboardLayout as MUIDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <MUIDashboardLayout>
      <PageContainer
        breadcrumbs={[]}
        title=''
      >
        <Outlet />
      </PageContainer>
    </MUIDashboardLayout>
  );
};
