import { Client } from '../../types';

export const CLIENTS: Client[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'default',
    totalValue: 133000,
    plans: 2,
    lastUpdated: new Date('2024-10-24T00:00:00Z'),
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Dylan',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    totalValue: 1000,
    plans: 1,
    lastUpdated: new Date('2024-10-24T00:00:00Z'),
  },
];
