import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getClients } from '../../../api';
import { patchClient } from '../../../api/clients/patch-client';
import { addClient, deleteClient } from '../../../api/database';
import { Table } from '../../../components';
import { Client } from '../../../types';
import { getColumns } from './clients-columns';

export const ClientsTable = () => {
  const navigate = useNavigate();
  const clients = useMemo(() => getClients(), []);

  return (
    <Table<Client>
      data={clients}
      columns={getColumns()}
      handleDeleteConfirm={(row) => deleteClient(row.id)}
      handleEditConfirm={(row) => patchClient(row)}
      onRowClick={(row) => navigate(`/clients/${row.id}`)}
      addToolbar={{
        addLabel: 'Add New Client',
        handleAddConfirm: (newRow) => addClient(newRow),
        newObject: {
          id: '',
          firstName: '',
          lastName: '',
          totalValue: 0,
          plans: 0,
          lastUpdated: new Date(),
          createdOn: new Date(),
        },
      }}
    />
  );
};
