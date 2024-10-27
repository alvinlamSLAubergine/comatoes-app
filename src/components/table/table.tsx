import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { ColumnStack } from '../stack/stack';
import { Filters } from './filters';
import { StyledTable } from './styled-table';

interface TableProps<T extends GridValidRowModel> {
  data: T[];
  columns: GridColDef<T>[];
}

export function Table<T extends GridValidRowModel>({ data, columns }: TableProps<T>) {
  const _columns = columns.map((column) => ({
    disableColumnMenu: true,
    sortable: false,
    ...column,
  }));

  return (
    <ColumnStack>
      <Filters />
      <StyledTable<T>
        columns={_columns}
        rows={data}
        disableRowSelectionOnClick
        disableMultipleRowSelection
      />
    </ColumnStack>
  );
}
