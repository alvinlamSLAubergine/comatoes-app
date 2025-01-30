import { Plan } from '../../types';
import { addPlan } from '../database';

export function postPlan(plan: Plan) {
  addPlan(plan);
}
