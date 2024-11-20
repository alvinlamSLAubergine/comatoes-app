export type Plan = {
  id: string;
  clientId: string;
  createdOn: Date;
  lastUpdated: Date;
  name: string;
  description: string;
  currentValue: number;
  recurringCashFlow: PlanRecurringCashFlow[];
  cashFlow: PlanCashFlow[];
};

export type PlanCashFlow = {
  id: number;
  value: number;
  type: 'deposit' | 'withdrawal' | 'returns';
  createdOn: Date;
  description: string;
};

export type PlanRecurringCashFlow = PlanCashFlow & {
  occurance: 'weekly' | 'monthly' | 'yearly';
  startDate?: Date;
  endDate?: Date;
};
