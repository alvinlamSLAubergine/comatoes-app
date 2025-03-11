import { GridColDef, renderEditDateCell, renderEditInputCell } from '@mui/x-data-grid';
import { Plan } from '../../../types';
import { getCurrencyFormat, getDateFormat, monthDiff, yearDiff } from '../../../utils';

export const getColumns = (): GridColDef<Plan>[] => [
  { field: 'name', headerName: 'Plan Name', width: 300, editable: true },
  {
    field: 'startDate',
    headerName: 'Start Date',
    width: 150,
    valueFormatter: (value) => getDateFormat(new Date(value)),
    editable: true,
    renderEditCell: (params) => renderEditDateCell(params),
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 120,
    editable: true,
    valueFormatter: (value) => getCurrencyFormat(value),
    renderEditCell: (params) => renderEditInputCell({ ...params, type: 'number' }),
  },
  {
    field: 'paymentMode',
    headerName: 'Payment Mode',
    width: 100,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['Cash', 'CPF', 'SRS'],
  },
  {
    field: 'paymentFrequency',
    headerName: 'Frequency',
    width: 100,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['single', 'monthly', 'yearly'],
  },
  {
    field: 'endDate',
    headerName: 'End Date',
    width: 150,
    valueFormatter: (value) => getDateFormat(new Date(value)),
    editable: true,
    renderEditCell: (params) => renderEditDateCell(params),
  },
  {
    field: 'lastUpdated',
    headerName: 'Last Updated',
    width: 150,
    valueGetter: (value) => getDateFormat(new Date(value)),
    editable: false,
  },
  {
    field: 'totalCapital',
    headerName: 'Total Capital',
    width: 120,
    valueFormatter: (_, row) => getCurrencyFormat(calculateTotalCapital(row)),
    editable: false,
  },
  {
    field: 'currentValue',
    headerName: 'Current Value',
    width: 120,
    editable: true,
    valueFormatter: (value) => getCurrencyFormat(value),
    renderEditCell: (params) => renderEditInputCell({ ...params, type: 'number' }),
  },
  {
    field: 'roi',
    headerName: 'ROI',
    width: 80,
    valueFormatter: (_, row) => `${calculateRoi(row)}%`,
    editable: false,
  },
];

const calculateRoi = (plan: Plan) => {
  const { currentValue } = plan;
  const totalCapital = calculateTotalCapital(plan);

  if (currentValue === 0 || totalCapital === 0) {
    return 0;
  }
  return ((currentValue - totalCapital) / totalCapital) * 100;
};

const calculateTotalCapital = (plan: Plan) => {
  const { paymentFrequency, startDate, endDate, lastUpdated } = plan;
  const lastPaymentDate = lastUpdated.getTime() < endDate.getTime() ? lastUpdated : endDate;

  if (paymentFrequency === 'single') {
    return plan.amount;
  } else if (paymentFrequency === 'monthly') {
    return plan.amount * monthDiff(startDate, lastPaymentDate);
  } else {
    return plan.amount * yearDiff(startDate, lastPaymentDate);
  }
};
