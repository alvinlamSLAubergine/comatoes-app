import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { GridRow } from '../../../types/table';

interface ActionColumnProps<T extends GridRow> {
  row: T;
  handleEdit?: (row: T) => void;
  handleDelete?: (row: T) => void;
}

export function ActionColumn<T extends GridRow>({ row, handleEdit, handleDelete }: ActionColumnProps<T>) {
  return (
    <Box>
      {handleEdit && (
        <Tooltip title='Edit'>
          <IconButton onClick={() => handleEdit(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}
      {handleDelete && (
        <Tooltip title='Delete'>
          <IconButton onClick={() => handleDelete(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
