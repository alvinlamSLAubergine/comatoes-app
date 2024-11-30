import { getPlans } from '../database';

export function getPlansByClientId(clientId: string) {
  const plans = getPlans();
  return plans.filter((plan) => plan.clientId === clientId);
}
