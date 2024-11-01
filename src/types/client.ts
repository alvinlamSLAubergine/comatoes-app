export type Client = {
  id: number;
  name: string;
  totalValue: number;
  plans: number; // number of plans
  lastUpdated: Date;
  avatar?: string;
};
