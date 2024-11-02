import AvatarIcon from '@mui/icons-material/AccountCircleTwoTone';
import Avatar from '@mui/material/Avatar';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import MuiListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { isValidElement, ReactNode } from 'react';

interface ListItemProps {
  index: number;
  id?: string;
  avatar?: 'default' | string | ReactNode;
  primaryText?: string;
  secondaryText?: string;
  clickable?: boolean;
  onClick?: (id: string, index: number) => void;
}

interface ListProps {
  listItems: Omit<ListItemProps, 'index'>[];
}

export function List({ listItems }: ListProps) {
  return (
    <MuiList>
      {listItems.map((item, index) => (
        <ListItem
          key={item.id || index}
          index={index}
          {...item}
        />
      ))}
    </MuiList>
  );
}

export function ListItem({
  id,
  index,
  avatar,
  primaryText,
  secondaryText,
  clickable = true,
  onClick = () => {},
}: ListItemProps) {
  let MAvatar = (
    <Avatar>
      <AvatarIcon
        sx={{
          width: 'auto',
          height: 'auto',
        }}
      />
    </Avatar>
  );

  if (avatar !== 'default' && typeof avatar === 'string') {
    MAvatar = <Avatar src={avatar} />;
  }

  if (isValidElement(avatar) && typeof avatar !== 'string') {
    MAvatar = avatar;
  }

  return (
    <MuiListItem>
      {avatar && <MuiListItemAvatar>{MAvatar}</MuiListItemAvatar>}
      {clickable && (
        <MuiListItemButton onClick={() => onClick(id || '', index)}>
          <ListItemText
            primary={primaryText}
            secondary={secondaryText}
          />
        </MuiListItemButton>
      )}
      {!clickable && (
        <ListItemText
          primary={primaryText}
          secondary={secondaryText}
        />
      )}
    </MuiListItem>
  );
}
