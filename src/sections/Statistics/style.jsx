import { Box, styled } from "@mui/material";

export const StatCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 3,
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  textAlign: 'center',
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
    background: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.05)'
  }
}));

export const ParallaxElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  left: '-10%',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
  opacity: 0.1,
  filter: 'blur(40px)'
}));

export const ParallaxElement2 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '0',
  right: '0',
  width: '500px',
  height: '500px',
  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  opacity: 0.05,
  borderRadius: '50%',
  filter: 'blur(50px)'
}));