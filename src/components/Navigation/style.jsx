import styled from "@emotion/styled";
import { Collapse, useMediaQuery } from "@mui/material";

export const FloatingMenu = styled(Collapse)(({ theme }) => ({
  position: 'fixed',
  zIndex: 99,
  left: 20,
  top: !!useMediaQuery(theme.breakpoints.down('md')) ? '28dvh' : '50%',
  transform: 'translateY(-50%)',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(30, 30, 30, 0.9)'
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  boxShadow: theme.shadows[10],
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  border: '1px solid',
  borderColor: theme.palette.divider
}));