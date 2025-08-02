import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const ExpandableCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  borderRadius: theme.shape.borderRadius * 3,
  overflow: 'hidden',
  boxShadow: theme.shadows[4],
  '&:hover': {
    boxShadow: theme.shadows[12],
    transform: 'translateY(-5px)'
  }
}));

export const ParallaxElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '300px',
  height: '300px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.info.main})`,
  opacity: 0.1,
  borderRadius: '50%',
  filter: 'blur(50px)',
  transform: 'translate(30%, -30%)'
}));