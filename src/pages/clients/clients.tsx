import { Container } from '@mui/material';
import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { Table } from '../../components';

interface Client extends GridValidRowModel {
  id: number;
  name: string;
  totalValue: number;
}

export const ClientsPage = () => {
  const clientData: Client[] = [{ id: 1, name: 'Client 1', totalValue: 100 }];
  const columns: GridColDef<Client>[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'totalValue', headerName: 'Total Value', width: 200 },
  ];

  return (
    <Container>
      <Table<Client>
        data={clientData}
        columns={columns}
      />
    </Container>
  );
};
