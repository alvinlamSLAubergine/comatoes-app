import { PaymentMode, Plan } from '../../types';

export const DEFAULT_PLANS: Plan[] = [
  {
    id: 'johndoe-1',
    clientId: '1',
    createdOn: new Date('2024-10-24T00:00:00Z'),
    lastUpdated: new Date('2024-10-24T00:00:00Z'),
    name: 'Fordsworth Legacy Endowment XXI',
    currentValue: 12000,
    startDate: new Date('2024-10-24T00:00:00Z'),
    amount: 0,
    paymentMode: PaymentMode.CASH,
    paymentFrequency: 'single',
    endDate: new Date('2025-10-24T00:00:00Z'),
  },
];
