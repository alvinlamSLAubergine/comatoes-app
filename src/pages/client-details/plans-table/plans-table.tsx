import { GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { getPlansByClientId } from '../../../api/plans/get-plans-by-client-id';
import { Table } from '../../../components';
import { Plan } from '../../../types';
import { getDateFormat } from '../../../utils';

interface PlansTableProps {
  clientId: string;
}

export const PlansTable = ({ clientId }: PlansTableProps) => {
  const plans = useMemo(() => getPlansByClientId(clientId), [clientId]);

  const columns: GridColDef<Plan>[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1, editable: true },
    {
      field: 'createdOn',
      headerName: 'Created Date',
      width: 200,
      valueGetter: (value) => getDateFormat(new Date(value)),
      editable: true,
    },
    {
      field: 'lastUpdated',
      headerName: 'Last Updated',
      width: 200,
      valueGetter: (value) => getDateFormat(new Date(value)),
      editable: true,
    },
  ];

  return (
    <Table<Plan>
      data={plans}
      columns={columns}
      addToolbar={{
        addLabel: 'Add New Plan',
      }}
    />
  );
};
