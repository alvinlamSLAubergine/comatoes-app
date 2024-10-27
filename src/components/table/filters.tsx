import Button from '@mui/material/Button';
import { RowStack } from '../stack/stack';

export function Filters() {
  return (
    <RowStack justifyContent='space-between'>
      <RowStack>Filters</RowStack>
      <Button
        variant='contained'
        color='primary'
      >
        Apply Filters
      </Button>
    </RowStack>
  );
}
