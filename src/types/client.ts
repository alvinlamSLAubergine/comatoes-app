export type Client = {
  id: number;
  firstName: string;
  lastName: string;
  totalValue: number;
  plans: number; // number of plans
  lastUpdated: Date;
  avatar?: string;
};
