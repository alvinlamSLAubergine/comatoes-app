import { GridColDef, GridRowModes, GridRowModesModel, GridValidRowModel } from '@mui/x-data-grid';
import { useMemo, useState } from 'react';
import { ColumnStack } from '../stack/stack';
import { generateColumns } from './columns';
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
  const [rows, setRows] = useState<T[]>(data);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const _columns = useMemo(
    () =>
      generateColumns(columns, {
        onAddConfirm: (id: string) => {
          setRowModesModel((prev) => ({
            ...prev,
            [id]: { ...prev[id], mode: GridRowModes.View },
          }));
        },
        onAddCancel: (id: string) => {
          setRows((oldRows) => oldRows.filter((row) => row.id !== id));
        },
      }),
    [columns, setRowModesModel, setRows],
  );

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
        editMode='row'
        rowModesModel={rowModesModel}
        disableRowSelectionOnClick
        disableMultipleRowSelection
        slots={{ toolbar }}
        slotProps={{ toolbar: { onAdd, setRowModesModel, ...addToolbar } }}
      />
    </ColumnStack>
  );
}
