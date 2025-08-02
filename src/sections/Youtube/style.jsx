import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const VideoCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  boxShadow: theme.shadows[6],
  transition: 'all 0.5s ease',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.03)',
    boxShadow: theme.shadows[12],
    '& .play-icon': {
      opacity: 1,
      transform: 'scale(1.2)'
    }
  }
}));

export const ParallaxEffect = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: 0,
  width: '100%',
  height: '60px',
  background: `repeating-linear-gradient(
                to right,
                ${theme.palette.background.default},
                ${theme.palette.background.default} 20px,
                ${theme.palette.error.main} 20px,
                ${theme.palette.error.main} 40px
              )`,
  transform: 'translateY(-50%) rotate(-2deg)',
  opacity: 0.1,
  zIndex: 0
}));