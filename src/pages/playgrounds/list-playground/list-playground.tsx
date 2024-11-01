import Container from '@mui/material/Container';
import { List } from '../../../components';

export const ListPlaygroundPage = () => {
  return (
    <Container>
      <List
        listItems={[
          { primaryText: 'Client 1', avatar: 'default' },
          { primaryText: 'Client 2', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
        ]}
      />
    </Container>
  );
};
