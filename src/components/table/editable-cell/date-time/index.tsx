import { GridRenderEditCellParams } from '@mui/x-data-grid';
import { EditableCellDateTimeSelector } from './editable-cell-date-time-selector';

export const renderEditableCellDateTimeSelector = (params: GridRenderEditCellParams) => (
  <EditableCellDateTimeSelector {...params} />
);
