// Mock API data initializer
// This is used while we're mocking API data locally
// It will check whether the browser has the API data in local storage
// If local storage does not contain "version" field or if "version" field is different,

import { Client, Plan, PlanCashFlow, PlanRecurringCashFlow } from '../../types';

import { DEFAULT_CLIENTS } from './clients';
import { DEFAULT_PLANS } from './plans';

const VERSION = '0.0.2';

function clientReviver(key: string, value: unknown) {
  if (key === 'lastUpdated') {
    return new Date(String(value));
  }
  return value;
}

function planReviver(key: string, value: unknown) {
  if (key === 'recurringCashFlow') {
    const _value = value as PlanRecurringCashFlow[];
    return _value.map((item) => ({
      ...item,
      createdOn: new Date(item.createdOn),
      startDate: item.startDate ? new Date(item.startDate) : undefined,
      endDate: item.endDate ? new Date(item.endDate) : undefined,
    }));
  }
  if (key === 'cashFlow') {
    const _value = value as PlanCashFlow[];
    return _value.map((item) => ({
      ...item,
      createdOn: new Date(item.createdOn),
    }));
  }
  return value;
}

let clients: Client[] = [];
let plans: Plan[] = [];

// This function will wipe the existing data and reinitialize the API data
export function initApi() {
  const curVersion = localStorage.getItem('version');
  if (!curVersion || curVersion !== VERSION) {
    console.log(`Old version: ${curVersion}, new version: ${VERSION}`);
    console.log('Initializing API data');
    localStorage.clear();
    localStorage.setItem('version', VERSION);
    localStorage.setItem('clients', JSON.stringify(DEFAULT_CLIENTS));
    localStorage.setItem('plans', JSON.stringify(DEFAULT_PLANS));
  }

  clients = JSON.parse(localStorage.getItem('clients') || '[]', clientReviver) as Client[];
  plans = JSON.parse(localStorage.getItem('plans') || '[]', planReviver) as Plan[];
}

export function getClients() {
  return clients;
}

export function getPlans() {
  return plans;
}

export function addPlan(newPlan: Plan) {
  plans.push(newPlan);
  localStorage.setItem('plans', JSON.stringify(plans));
}
