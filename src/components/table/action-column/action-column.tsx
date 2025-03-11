import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { GridRow } from '../../../types/table';
import { DeleteDialog } from '../delete-dialog';

interface ActionColumnProps<T extends GridRow> {
  row: T;
  handleEdit?: (row: T) => void;
  handleDelete?: (row: T) => void;
}

export function ActionColumn<T extends GridRow>({ row, handleEdit, handleDelete }: ActionColumnProps<T>) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const _handleDelete = () => {
    setDeleteOpen(false);
    if (handleDelete) {
      handleDelete(row);
    }
  };

  return (
    <Box>
      <DeleteDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={_handleDelete}
      />
      {handleEdit && (
        <Tooltip title='Edit'>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(row);
            }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}
      {handleDelete && (
        <Tooltip title='Delete'>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setDeleteOpen(true);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
