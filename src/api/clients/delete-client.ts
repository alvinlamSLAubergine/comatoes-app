import { deleteClient as dbDeleteClient } from '../database';

export function deleteClient(id: string) {
  dbDeleteClient(id);
}
