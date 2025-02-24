import { GridColDef, renderEditDateCell } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { getPlansByClientId } from '../../../api';
import { deletePlan, patchPlan, postPlan } from '../../../api/plans';
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
      valueFormatter: (value) => getDateFormat(new Date(value)),
      editable: true,
      renderEditCell: (params) => renderEditDateCell({ ...params, value: params.value }),
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
      handleDeleteConfirm={(row) => deletePlan(row.id)}
      handleEditConfirm={(row) => patchPlan({ ...row, lastUpdated: new Date() })}
      addToolbar={{
        addLabel: 'Add New Plan',
        handleAddConfirm: (newRow) => postPlan(newRow),
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
