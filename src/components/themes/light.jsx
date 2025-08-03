import { createTheme } from '@mui/material/styles';
import { baseTheme } from './base';

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#6BA4FE',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E1ECFE',
      contrastText: '#ffffff',
    },
    background: {
      default: '#EBEBEB',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#757575',
    },
  },
});