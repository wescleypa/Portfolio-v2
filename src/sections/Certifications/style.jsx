import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ParallaxElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10%',
  left: '-10%',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
  opacity: 0.1,
  filter: 'blur(40px)'
}));

export const CertificationCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[12],
    '& .overlay': {
      opacity: 1
    }
  }
}));

export const CardTitleEffect = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(to top, ${theme.palette.primary.dark} 0%, transparent 100%)`,
  opacity: 0,
  transition: 'opacity 0.3s ease',
  display: 'flex',
  alignItems: 'flex-end',
  p: 3
}));