import { Navigate, RouteObject } from 'react-router-dom';
import App from '../App';
import { ClientDetailsPage, ClientsPage, TestPage2 } from '../pages';
import { PLAYGROUND_ROUTES } from './playground-routes';

const HOME_URL = '/comatoes-app';

export const ROUTES: RouteObject = {
  Component: App,
  path: `${HOME_URL}`,
  children: [
    {
      path: HOME_URL,
      element: <Navigate to={`${HOME_URL}/clients`} />,
    },
    {
      path: `${HOME_URL}/clients`,
      Component: ClientsPage,
    },
    {
      path: `${HOME_URL}/clients/:clientId`,
      Component: ClientDetailsPage,
    },
    {
      path: `${HOME_URL}/test-page-2`,
      Component: TestPage2,
    },
    {
      path: `${HOME_URL}/playgrounds`,
      children: PLAYGROUND_ROUTES,
    },
  ],
};
