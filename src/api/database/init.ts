// Mock API data initializer
// This is used while we're mocking API data locally
// It will check whether the browser has the API data in local storage
// If local storage does not contain "version" field or if "version" field is different,

import { Client, Plan } from '../../types';

import { DEFAULT_CLIENTS } from './clients';
import { DEFAULT_PLANS } from './plans';

const VERSION = '0.0.4';

function clientReviver(key: string, value: unknown) {
  if (key === 'lastUpdated' || key === 'createdOn') {
    return new Date(String(value));
  }
  return value;
}

function planReviver(key: string, value: unknown) {
  if (key === 'createdOn' || key === 'startDate' || key === 'endDate' || key === 'lastUpdated') {
    return new Date(String(value));
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

export function addPlan(newPlan: Omit<Plan, 'lastUpdated'>) {
  plans = [...plans, { ...newPlan, lastUpdated: new Date() }];
  console.log('add plan', newPlan);
  localStorage.setItem('plans', JSON.stringify(plans));
}

export function updatePlan(updatedPlan: Omit<Plan, 'lastUpdated'>) {
  plans = plans.map((plan) => (plan.id === updatedPlan.id ? { ...updatedPlan, lastUpdated: new Date() } : plan));
  console.log(plans);
  localStorage.setItem('plans', JSON.stringify(plans));
}

export function deletePlan(id: string) {
  plans = plans.filter((plan) => plan.id !== id);
  localStorage.setItem('plans', JSON.stringify(plans));
}

export function addClient(newClient: Omit<Client, 'lastUpdated' | 'createdOn'>) {
  clients = [...clients, { ...newClient, lastUpdated: new Date(), createdOn: new Date() }];
  localStorage.setItem('clients', JSON.stringify(clients));
}

export function updateClient(updatedClient: Omit<Client, 'lastUpdated'>) {
  const index = clients.findIndex((client) => client.id === updatedClient.id);
  clients = clients.map((client) =>
    client.id === updatedClient.id ? { ...updatedClient, lastUpdated: new Date() } : client,
  );
  clients[index] = { ...updatedClient, lastUpdated: new Date() };
  localStorage.setItem('clients', JSON.stringify(clients));
}

export function deleteClient(id: string) {
  clients = clients.filter((client) => client.id !== id);
  localStorage.setItem('clients', JSON.stringify(clients));
}
