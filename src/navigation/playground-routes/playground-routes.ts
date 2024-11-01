import { RouteObject } from 'react-router-dom';
import { ListPlaygroundPage, TablePlaygroundPage } from '../../pages/playgrounds';

export const PLAYGROUND_ROUTES: RouteObject[] = [
  {
    path: 'table',
    Component: TablePlaygroundPage,
  },
  {
    path: 'list',
    Component: ListPlaygroundPage,
  },
];
