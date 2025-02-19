import { GridColDef, GridRowModes, GridRowModesModel } from '@mui/x-data-grid';
import { Dispatch, SetStateAction } from 'react';
import { GridRow } from '../../types/table';
import { ActionColumn, ActionColumnEdit } from './action-column';

export function generateColumns<T extends GridRow>(
  columns: GridColDef<T>[],
  setRows: Dispatch<SetStateAction<T[]>>,
  setRowModesModel: Dispatch<SetStateAction<GridRowModesModel>>,
  onAddConfirm?: (row: T) => void,
  onEditConfirm?: (row: T) => void,
  onDeleteConfirm?: (row: T) => void,
) {
  const _columns: GridColDef<T>[] = columns.map((column) => ({
    disableColumnMenu: true,
    sortable: false,
    ...column,
  }));

  const handleAddConfirm = (row: T) => {
    // Set the specified row to view mode
    setRowModesModel((prev) => ({
      ...prev,
      [row.id]: { ...prev[row.id], mode: GridRowModes.View },
    }));

    // Trigger the onAdd callback if it exists
    if (onAddConfirm) {
      onAddConfirm(row);
    }
  };

  const handleAddCancel = (id: string) => {
    // Remove the row from list of rows
    setRows((oldRows) => oldRows.filter((row) => row.id !== id));
  };

  const handleEditConfirm = (row: T) => {
    // Set the specified row to view mode
    setRowModesModel((prev) => ({
      ...prev,
      [row.id]: { ...prev[row.id], mode: GridRowModes.View },
    }));

    // Trigger the onAdd callback if it exists
    if (onEditConfirm) {
      onEditConfirm(row);
    }
  };

  const handleEditCancel = (id: string) => {
    // Set the specified row to view mode
    setRowModesModel((prev) => ({
      ...prev,
      [id]: { ...prev[id], mode: GridRowModes.View },
    }));
  };

  const handleConfirm = (row: T) => {
    if (row.mode === 'add') {
      handleAddConfirm(row);
    } else if (row.mode === 'edit') {
      handleEditConfirm(row);
    }
  };

  const handleCancel = (row: T) => {
    if (row.mode === 'add') {
      handleAddCancel(row.id);
    } else if (row.mode === 'edit') {
      handleEditCancel(row.id);
    }
  };

  const handleEdit = (row: T) => {
    setRows((oldRows) => {
      const editedRow = oldRows.find((item) => item.id === row.id);
      if (editedRow) {
        editedRow.mode = 'edit';
      }
      return oldRows;
    });
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [row.id]: { mode: GridRowModes.Edit },
    }));
  };

  const actionColumn: GridColDef<T> = {
    field: 'actions',
    headerName: '',
    width: 100,
    sortable: false,
    editable: true,
    disableColumnMenu: true,
    renderCell: (params) => (
      <ActionColumn
        row={params.row}
        handleEdit={handleEdit}
        handleDelete={() => {}}
      />
    ),
    renderEditCell: (params) => (
      <ActionColumnEdit<T>
        row={params.row}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    ),
  };

  // If any actions are available, add the action column
  if (onAddConfirm || onEditConfirm || onDeleteConfirm) {
    _columns.push(actionColumn);
  }
  return _columns;
}
