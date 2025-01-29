import ConfirmIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { GridColDef } from '@mui/x-data-grid';

interface AddRowFuncs {
  onAddConfirm: (id: string) => void;
  onAddCancel: (id: string) => void;
}

export const generateColumns = (columns: GridColDef[], addRowFuncs?: AddRowFuncs): GridColDef[] => {
  const _columns: GridColDef[] = columns.map((column) => ({
    disableColumnMenu: true,
    sortable: false,
    ...column,
  }));

  if (addRowFuncs) {
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
            <IconButton onClick={() => addRowFuncs.onAddConfirm(params.row.id)}>
              <ConfirmIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Cancel'>
            <IconButton onClick={() => addRowFuncs.onAddCancel(params.row.id)}>
              <CancelIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    });
  }

  return _columns;
};
