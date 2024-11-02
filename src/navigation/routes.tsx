import { Navigate, RouteObject } from 'react-router-dom';
import App from '../App';
import { DashboardLayout } from '../layouts';
import { ClientDetailsPage, ClientsPage, TestPage2 } from '../pages';
import { PLAYGROUND_ROUTES } from './playground-routes';

export const ROUTES: RouteObject = {
  Component: App,
  children: [
    {
      path: '/',
      Component: DashboardLayout,
      children: [
        {
          path: '/',
          element: <Navigate to='/clients' />,
        },
        {
          path: '/clients',
          Component: ClientsPage,
        },
        {
          path: '/clients/:clientId',
          Component: ClientDetailsPage,
        },
        {
          path: '/test-page-2',
          Component: TestPage2,
        },
        {
          path: '/playgrounds',
          children: PLAYGROUND_ROUTES,
        },
      ],
    },
  ],
};
