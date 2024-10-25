import TestPageTwoIcon from '@mui/icons-material/AssessmentTwoTone';
import TestPageOneIcon from '@mui/icons-material/PeopleTwoTone';
import { Navigation } from '@toolpad/core';

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Dashboard',
  },
  {
    title: 'Test Page 1',
    segment: 'test-page-1',
    icon: <TestPageOneIcon />,
  },
  {
    title: 'Test Page 2',
    segment: 'test-page-2',
    icon: <TestPageTwoIcon />,
  },
];
