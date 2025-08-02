import { createTheme } from '@mui/material/styles';
import { baseTheme } from './base';

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#c96460ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgba(136, 17, 13, 1)',
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