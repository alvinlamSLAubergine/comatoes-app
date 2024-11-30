import { getClients } from '../database';

export function getClientById(id: string) {
  const clients = getClients();
  return clients.find((client) => client.id === id);
}
