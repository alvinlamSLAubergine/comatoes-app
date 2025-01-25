import TestPageTwoIcon from '@mui/icons-material/AssessmentTwoTone';
import ClientsIcon from '@mui/icons-material/PeopleTwoTone';
import { Navigation } from '@toolpad/core';

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Dashboard',
  },
  {
    title: 'Clients',
    segment: '/clients',
    icon: <ClientsIcon />,
    pattern: '/clients{/:clientId}*',
  },
  {
    title: 'Test Page 2',
    segment: 'test-page-2',
    icon: <TestPageTwoIcon />,
  },
];
