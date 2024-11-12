import { PageContainer } from '@toolpad/core';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getClients } from '../../api';
import { List } from '../../components';
import { getCurrencyFormat } from '../../utils';

export const ClientsPage = () => {
  const navigate = useNavigate();
  const clients = useMemo(() => getClients(), []);

  return (
    <PageContainer
      breadcrumbs={[]}
      title=''
    >
      <List
        listItems={clients.map((client) => ({
          id: client.id.toString(),
          primaryText: client.firstName,
          secondaryText: `${client.plans} Plans | ${getCurrencyFormat(client.totalValue)} | ${client.lastUpdated.toDateString()}`,
          avatar: client.avatar,
          onClick: (id) => {
            navigate(`/clients/${id}`);
          },
        }))}
      />
    </PageContainer>
  );
};
