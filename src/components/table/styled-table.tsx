import { colors } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGridPro, gridClasses } from '@mui/x-data-grid-pro';

export const StyledTable = styled(DataGridPro)(({ theme }) => ({
  // prevent cell border when clicking on header cells
  [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
    outline: 'none',
  },
  // prevent cell border when clicking on body cells
  [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
    outline: 'none',
  },
  // apply color to header cells
  [`& .${gridClasses.columnHeader}, & .${gridClasses.columnHeaders}, & .${gridClasses.filler}`]: {
    backgroundColor: theme.palette.primary.light,
    color: colors.common.white,
  },
  [`& .${gridClasses.toolbarContainer}`]: {
    backgroundColor: theme.palette.primary.light,
  },
})) as typeof DataGridPro;
