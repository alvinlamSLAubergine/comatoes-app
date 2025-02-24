export enum PaymentMode {
  CASH = 'Cash',
  CPF = 'CPF',
  SRS = 'SRS',
}

export type Plan = {
  id: string;
  clientId: string;
  name: string;
  createdOn: Date;
  startDate: Date;
  amount: number; // The amount of money paid per payment cycle
  paymentMode: PaymentMode;
  paymentFrequency: 'single' | 'monthly' | 'yearly';
  endDate: Date;
  lastUpdated: Date;
  currentValue: number;
};
