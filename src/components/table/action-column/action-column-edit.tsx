import ConfirmIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { GridRow } from '../../../types/table';

interface ActionColumnEditProps<T extends GridRow> {
  row: T;
  handleConfirm: (row: T) => void;
  handleCancel: (row: T) => void;
}

export function ActionColumnEdit<T extends GridRow>({ row, handleCancel, handleConfirm }: ActionColumnEditProps<T>) {
  return (
    <Box>
      <Tooltip title='Confirm'>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleConfirm(row);
          }}
        >
          <ConfirmIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Cancel'>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleCancel(row);
          }}
        >
          <CancelIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
