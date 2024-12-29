import { PageContainer, useActivePage } from '@toolpad/core';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getClientById } from '../../api';
import { PlansTable } from './plans-table';

export const ClientDetailsPage = () => {
  const id = useParams().clientId ?? '';
  const client = useMemo(() => getClientById(id), [id]);
  const clientName = `${client?.firstName} ${client?.lastName}`;

  const activePage = useActivePage();

  const breadcrumbs = activePage?.breadcrumbs || [];
  breadcrumbs.push({ title: clientName, path: `/clients/${id}` });

  return (
    <PageContainer
      breadcrumbs={breadcrumbs}
      title=''
    >
      <PlansTable clientId={id} />
    </PageContainer>
  );
};
