import { Navigate, RouteObject } from 'react-router-dom';
import App from '../App';
import { DashboardLayout } from '../layouts';
import { TestPage1, TestPage2 } from '../pages';

export const ROUTES: RouteObject = {
  Component: App,
  children: [
    {
      path: '/',
      Component: DashboardLayout,
      children: [
        {
          path: '/',
          element: <Navigate to='/test-page-1' />,
        },
        {
          path: '/test-page-1',
          Component: TestPage1,
        },
        {
          path: '/test-page-2',
          Component: TestPage2,
        },
      ],
    },
  ],
};
