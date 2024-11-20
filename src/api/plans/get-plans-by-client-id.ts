import { PLANS } from './plans';

export function getPlansByClientId(clientId: string) {
  return PLANS.filter((plan) => plan.clientId === clientId);
}
