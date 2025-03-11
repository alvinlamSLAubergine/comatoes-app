import { PageContainer } from '@toolpad/core';
import { ClientsTable } from './clients-table/clients-table';

export const ClientsPage = () => {
  return (
    <PageContainer
      breadcrumbs={[]}
      title=''
    >
      <ClientsTable />
    </PageContainer>
  );
};
