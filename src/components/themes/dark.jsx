import { createTheme } from '@mui/material/styles';
import { baseTheme } from './base';

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#c96460ff',
      contrastText: '#121212',
    },
    secondary: {
      main: '#974c4aff',
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