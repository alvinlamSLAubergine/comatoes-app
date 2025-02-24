import { deletePlan as dbDeletePlan } from '../database';

export function deletePlan(planId: string) {
  dbDeletePlan(planId);
}
