import { GridRenderEditCellParams, useGridApiContext } from '@mui/x-data-grid';
import { useLayoutEffect, useRef } from 'react';

export function EditableCellDateTimeSelector({ id, value, field, hasFocus }: GridRenderEditCellParams) {
  const apiRef = useGridApiContext();
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (hasFocus && ref.current) {
      ref.current.focus();
    }
  }, [hasFocus]);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    apiRef.current.setEditCellValue({ id, field, value: newValue });
  };

  return (
    <input
      ref={ref}
      type='text'
      value={value}
      onChange={handleValueChange}
    />
  );
}
