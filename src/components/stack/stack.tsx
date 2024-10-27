import { SxProps } from '@mui/material';
import MuiStack from '@mui/material/Stack';
import { ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  spacing?: Array<number | string> | number | string;
  sx?: SxProps;
}

export function RowStack(props: StackProps) {
  const { children, spacing = 2, sx = {}, justifyContent = 'flex-start', alignItems = 'center', ...rest } = props;

  return (
    <MuiStack
      direction='row'
      spacing={spacing}
      sx={{
        justifyContent,
        alignItems,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiStack>
  );
}

export function ColumnStack(props: StackProps) {
  const { children, spacing = 2, sx = {}, justifyContent, alignItems, ...rest } = props;

  return (
    <MuiStack
      direction='column'
      spacing={spacing}
      sx={{
        justifyContent,
        alignItems,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiStack>
  );
}
