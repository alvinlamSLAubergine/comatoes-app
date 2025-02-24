import { useMemo } from 'react';
import { getPlansByClientId } from '../../../api';
import { deletePlan, patchPlan, postPlan } from '../../../api/plans';
import { Table } from '../../../components';
import { PaymentMode, Plan } from '../../../types';
import { getColumns } from './plans-columns';

interface PlansTableProps {
  clientId: string;
}

export const PlansTable = ({ clientId }: PlansTableProps) => {
  const plans = useMemo(() => getPlansByClientId(clientId), [clientId]);

  return (
    <Table<Plan>
      data={plans}
      columns={getColumns()}
      handleDeleteConfirm={(row) => deletePlan(row.id)}
      handleEditConfirm={(row) => patchPlan({ ...row, lastUpdated: new Date() })}
      addToolbar={{
        addLabel: 'Add New Plan',
        handleAddConfirm: (newRow) => postPlan(newRow),
        newObject: {
          id: '',
          clientId,
          name: '',
          createdOn: new Date(),
          startDate: new Date(),
          lastUpdated: new Date(),
          currentValue: 0,
          amount: 0,
          paymentMode: PaymentMode.CASH,
          paymentFrequency: 'single',
          endDate: new Date(),
        },
      }}
    />
  );
};
