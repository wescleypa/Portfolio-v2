import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CircleShape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  opacity: 0.1,
  filter: 'blur(20px)'
}));

export const TriangleShape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 0,
  height: 0,
  borderLeft: '150px solid transparent',
  borderRight: '150px solid transparent',
  borderBottom: `300px solid ${theme.palette.primary.light}`,
  opacity: 0.05,
  transform: 'rotate(45deg)'
}));
