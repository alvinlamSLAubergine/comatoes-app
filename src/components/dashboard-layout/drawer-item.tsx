import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface DrawerItemProps {
  label: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export const DrawerItem = ({ label, disabled, selected, onClick }: DrawerItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        disabled={disabled}
        selected={selected}
        onClick={onClick}
      >
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
