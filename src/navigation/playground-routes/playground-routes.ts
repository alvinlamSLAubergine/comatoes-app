import { RouteObject } from 'react-router-dom';
import { TablePlaygroundPage } from '../../pages/playgrounds';

export const PLAYGROUND_ROUTES: RouteObject[] = [
  {
    path: 'table',
    Component: TablePlaygroundPage,
  },
];
