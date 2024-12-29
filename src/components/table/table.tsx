import { GridColDef, GridRowModesModel, GridValidRowModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { ColumnStack } from '../stack/stack';
import { Filters } from './filters';
import { StyledTable } from './styled-table';
import { Toolbar } from './toolbar';

interface AddToolbarProps<T extends GridValidRowModel> {
  generateId?: () => string;
  addLabel?: string;
  newObject?: T;
}

interface TableProps<T extends GridValidRowModel> {
  data: T[];
  columns: GridColDef<T>[];
  filters?: boolean;
  addToolbar?: AddToolbarProps<T>;
}

export function Table<T extends GridValidRowModel>({ data, columns, filters, addToolbar }: TableProps<T>) {
  const [rows, setRows] = useState(data);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const _columns = columns.map((column) => ({
    disableColumnMenu: true,
    sortable: false,
    ...column,
  }));

  const onAdd = (newRow: GridValidRowModel) => {
    setRows((oldRows) => [...oldRows, newRow as T]);
  };

  const toolbar = addToolbar ? Toolbar : undefined;

  return (
    <ColumnStack>
      {filters && <Filters />}
      <StyledTable<T>
        columns={_columns}
        rows={rows}
        rowModesModel={rowModesModel}
        disableRowSelectionOnClick
        disableMultipleRowSelection
        slots={{ toolbar }}
        slotProps={{ toolbar: { onAdd, setRowModesModel, ...addToolbar } }}
      />
    </ColumnStack>
  );
}
