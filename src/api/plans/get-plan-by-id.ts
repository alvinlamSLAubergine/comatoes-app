import { PLANS } from './plans';

export function getPlanById(id: string) {
  return PLANS.find((plan) => plan.id === id);
}
