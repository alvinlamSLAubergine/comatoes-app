import ConfirmIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { GridColDef, GridRowModes, GridRowModesModel, GridValidRowModel } from '@mui/x-data-grid';
import { Dispatch, SetStateAction } from 'react';

export function generateColumns<T extends GridValidRowModel>(
  columns: GridColDef<T>[],
  setRows: Dispatch<SetStateAction<T[]>>,
  setRowModesModel: Dispatch<SetStateAction<GridRowModesModel>>,
  onAddConfirm?: (row: T) => void,
) {
  const _columns: GridColDef<T>[] = columns.map((column) => ({
    disableColumnMenu: true,
    sortable: false,
    ...column,
  }));

  // If add row features are enabled:
  if (onAddConfirm) {
    const handleAddConfirm = (row: T) => {
      // Set the specified row to view mode
      setRowModesModel((prev) => ({
        ...prev,
        [row.id]: { ...prev[row.id], mode: GridRowModes.View },
      }));

      // Trigger the onAdd callback if it exists
      onAddConfirm(row);
    };

    const handleAddCancel = (id: string) => {
      setRows((oldRows) => oldRows.filter((row) => row.id !== id));
    };

    _columns.push({
      field: 'actions',
      headerName: '',
      width: 100,
      editable: true,
      sortable: false,
      disableColumnMenu: true,
      renderEditCell: (params) => (
        <Box>
          <Tooltip title='Confirm'>
            <IconButton onClick={() => handleAddConfirm(params.row)}>
              <ConfirmIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Cancel'>
            <IconButton onClick={() => handleAddCancel(params.row.id)}>
              <CancelIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    });
  }

  return _columns;
}
