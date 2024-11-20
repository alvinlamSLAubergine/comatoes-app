import { Plan } from '../../types';

export const PLANS: Plan[] = [
  {
    id: 'johndoe-1',
    clientId: '1',
    createdOn: new Date('2024-10-24T00:00:00Z'),
    lastUpdated: new Date('2024-10-24T00:00:00Z'),
    name: 'Fordsworth Legacy Endowment XXI',
    description: 'Endowment plan from Fordsworth Legacy',
    currentValue: 12000,
    recurringCashFlow: [
      {
        id: 1,
        value: 1000,
        type: 'deposit',
        createdOn: new Date('2024-10-24T00:00:00Z'),
        description: 'Monthly deposit',
        occurance: 'monthly',
        startDate: new Date('2024-10-24T00:00:00Z'),
        endDate: new Date('2025-10-24T00:00:00Z'),
      },
    ],
    cashFlow: [
      {
        id: 0,
        value: 10000,
        type: 'deposit',
        createdOn: new Date('2024-10-24T00:00:00Z'),
        description: 'Initial deposit',
      },
    ],
  },
];
