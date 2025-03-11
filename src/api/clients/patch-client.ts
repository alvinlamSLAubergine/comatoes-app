import { Client } from '../../types';
import { updateClient } from '../database';

export function patchClient(client: Client) {
  updateClient(client);
}
