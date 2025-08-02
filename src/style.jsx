import styled from "@emotion/styled";
import { Fab } from "@mui/material";

export const ThemeSelector = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  width: '50px',
  height: '50px',
  top: '20px',
  right: '20px',
  zIndex: 1000,
  backgroundColor: theme.palette.mode === 'dark'
    ? theme.palette.primary.main
    : theme.palette.secondary.main,
  color: theme.palette.mode === 'dark'
    ? theme.palette.primary.contrastText
    : theme.palette.secondary.contrastText,
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? theme.palette.primary.dark
      : theme.palette.secondary.dark,
    transform: 'scale(1.1)',
  }
}));