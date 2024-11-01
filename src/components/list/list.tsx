import AvatarIcon from '@mui/icons-material/AccountCircleTwoTone';
import Avatar from '@mui/material/Avatar';
import MuiList from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import MuiListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { isValidElement, ReactNode } from 'react';

interface ListItemProps {
  avatar?: 'default' | string | ReactNode;
  primaryText?: string;
  secondaryText?: string;
}

interface ListProps {
  listItems: ListItemProps[];
}

export function List({ listItems }: ListProps) {
  return (
    <MuiList>
      {listItems.map((item, index) => (
        <ListItem
          key={index}
          {...item}
        />
      ))}
    </MuiList>
  );
}

export function ListItem({ avatar, primaryText, secondaryText }: ListItemProps) {
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
      <MuiListItemButton>
        <ListItemText
          primary={primaryText}
          secondary={secondaryText}
        />
      </MuiListItemButton>
    </MuiListItem>
  );
}
