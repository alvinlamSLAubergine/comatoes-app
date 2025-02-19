import { GridValidRowModel } from '@mui/x-data-grid';

export interface GridRow extends GridValidRowModel {
  mode?: 'edit' | 'add';
}
