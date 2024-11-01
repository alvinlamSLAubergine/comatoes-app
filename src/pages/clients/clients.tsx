import Container from '@mui/material/Container';
import { List } from '../../components';
import { Client } from '../../types';
import { getCurrencyFormat } from '../../utils';

export const ClientsPage = () => {
  const clients: Client[] = [
    {
      id: 1,
      name: 'Client 1',
      avatar: 'default',
      totalValue: 133000,
      plans: 2,
      lastUpdated: new Date('2024-10-24T00:00:00Z'),
    },
    {
      id: 2,
      name: 'Client 2',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      totalValue: 1000,
      plans: 1,
      lastUpdated: new Date('2024-10-24T00:00:00Z'),
    },
  ];

  return (
    <Container>
      <List
        listItems={clients.map((client) => ({
          primaryText: client.name,
          secondaryText: `${client.plans} | ${getCurrencyFormat(client.totalValue)} | ${client.lastUpdated.toDateString()}`,
          avatar: client.avatar,
        }))}
      />
    </Container>
  );
};
