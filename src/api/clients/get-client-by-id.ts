import { CLIENTS } from './clients';

export function getClientById(id: string) {
  return CLIENTS.find((client) => client.id === id);
}
