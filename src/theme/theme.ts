import { createTheme } from '@mui/material';
import { green, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: green,
    secondary: red,
    text: {
      primary: green[500],
      secondary: red[500],
    },
  },
});
