import { GridColDef, renderEditDateCell } from '@mui/x-data-grid';
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
      renderEditCell: renderEditDateCell,
    },
    {
      field: 'lastUpdated',
      headerName: 'Last Updated',
      width: 200,
      valueGetter: (value) => getDateFormat(new Date(value)),
      editable: false,
    },
  ];

  return (
    <Table<Plan>
      data={plans}
      columns={columns}
      addToolbar={{
        addLabel: 'Add New Plan',
        newObject: {
          id: '',
          clientId: clientId,
          name: '',
          createdOn: new Date(),
          lastUpdated: new Date(),
          description: '',
          currentValue: 0,
          recurringCashFlow: [],
          cashFlow: [],
        },
      }}
    />
  );
};
