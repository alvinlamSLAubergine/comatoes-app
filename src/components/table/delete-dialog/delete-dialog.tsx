import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  open: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteDialog({ open, title, description, onClose, onDelete }: Props) {
  const _title = title || 'Confirm delete';
  const _description = description || 'Are you sure you want to delete this item?';

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{_title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{_description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={onDelete}
          color='error'
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
