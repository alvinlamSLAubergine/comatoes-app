import { getPlans } from '../database';

export function getPlanById(id: string) {
  const plans = getPlans();
  return plans.find((plan) => plan.id === id);
}
