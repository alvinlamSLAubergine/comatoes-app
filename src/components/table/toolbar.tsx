import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import MuiToolbar from '@mui/material/Toolbar';
import { GridRowModes, GridRowModesModel, GridSlotProps, GridValidRowModel } from '@mui/x-data-grid';

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    onAdd: (newRow: GridValidRowModel) => void;
    setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
    addLabel?: string;
    newObject?: GridValidRowModel;
    generateId?: () => string;
  }
}

export function Toolbar({ onAdd, setRowModesModel, addLabel, newObject, generateId }: GridSlotProps['toolbar']) {
  const handleClick = () => {
    const id = generateId ? generateId() : crypto.randomUUID();
    onAdd({ ...newObject, id });
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit },
    }));
  };

  return (
    <MuiToolbar>
      <Button
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        {addLabel || 'Add New Row'}
      </Button>
    </MuiToolbar>
  );
}
