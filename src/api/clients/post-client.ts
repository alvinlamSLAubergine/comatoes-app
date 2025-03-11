import { Client } from '../../types';
import { addClient } from '../database';

export function postClient(client: Client) {
  addClient(client);
}
