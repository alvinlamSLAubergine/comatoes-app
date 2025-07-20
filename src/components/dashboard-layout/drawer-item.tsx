import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface DrawerItemProps {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  drawerOpen?: boolean;
  onClick?: () => void;
}

export const DrawerItem = ({ label, icon, disabled, selected, drawerOpen, onClick }: DrawerItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        disabled={disabled}
        selected={selected}
        onClick={onClick}
      >
        {icon && <ListItemIcon sx={{ marginRight: 0, minWidth: 40 }}>{icon}</ListItemIcon>}
        {drawerOpen && <ListItemText primary={label} />}
      </ListItemButton>
    </ListItem>
  );
};
