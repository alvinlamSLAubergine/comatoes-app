import { GridColDef, GridRowModesModel, GridValidRowModel } from '@mui/x-data-grid';
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
  handleAddConfirm?: (newRow: T) => void;
}

interface TableProps<T extends GridValidRowModel> {
  data: T[];
  columns: GridColDef<T>[];
  filters?: boolean;
  addToolbar?: AddToolbarProps<T>;
  handleEditConfirm?: (row: T) => void;
  handleDeleteConfirm?: (row: T) => void;
}

export function Table<T extends GridValidRowModel>({
  data,
  columns,
  filters,
  addToolbar,
  handleEditConfirm,
  handleDeleteConfirm,
}: TableProps<T>) {
  const [rows, setRows] = useState<T[]>(data);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const _columns = useMemo(
    () =>
      generateColumns(
        columns,
        setRows,
        setRowModesModel,
        addToolbar?.handleAddConfirm,
        handleEditConfirm,
        handleDeleteConfirm,
      ),
    [addToolbar?.handleAddConfirm, columns, handleDeleteConfirm, handleEditConfirm],
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
        rows={rows as T[]}
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
