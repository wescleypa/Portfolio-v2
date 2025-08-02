import { Box, styled } from "@mui/material";

export const TestimonialCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[active ? 8 : 2],
  transition: 'all 0.5s ease',
  opacity: active ? 1 : 0.7,
  transform: active ? 'scale(1.05)' : 'scale(0.9)',
  zIndex: active ? 2 : 1,
  cursor: 'pointer',
  '&:hover': {
    transform: active ? 'scale(1.08)' : 'scale(0.95)',
    boxShadow: theme.shadows[12]
  }
}));

export const ParallaxElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  right: '-10%',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  opacity: 0.05,
  filter: 'blur(50px)'
}));