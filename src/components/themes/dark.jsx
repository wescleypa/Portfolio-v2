import { createTheme } from '@mui/material/styles';
import { baseTheme } from './base';

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#6BA4FE',
      contrastText: '#121212',
    },
    secondary: {
      main: '#E1ECFE',
      contrastText: '#121212',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
});