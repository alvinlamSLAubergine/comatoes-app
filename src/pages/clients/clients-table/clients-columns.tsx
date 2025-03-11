import { GridColDef } from '@mui/x-data-grid';
import { Client } from '../../../types';
import { getDateFormat } from '../../../utils';

export const getColumns = (): GridColDef<Client>[] => [
  { field: 'firstName', headerName: 'First Name', width: 180, editable: true },
  { field: 'lastName', headerName: 'Last Name', width: 180, editable: true },
  { field: 'totalValue', headerName: 'Total Value', width: 150, editable: false },
  { field: 'plans', headerName: 'Plans', width: 100, editable: false },
  {
    field: 'lastUpdated',
    headerName: 'Last Updated',
    width: 200,
    valueFormatter: (value) => getDateFormat(new Date(value)),
    editable: false,
  },
  {
    field: 'createdOn',
    headerName: 'Created On',
    width: 200,
    valueFormatter: (value) => getDateFormat(new Date(value)),
    editable: false,
  },
];
