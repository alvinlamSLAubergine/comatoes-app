import { Plan } from '../../types';
import { updatePlan } from '../database';

export function patchPlan(plan: Plan) {
  updatePlan(plan);
}
