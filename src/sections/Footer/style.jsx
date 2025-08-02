import { Box, styled } from "@mui/material";

export const ContactCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 3,
  background: theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(0, 0, 0, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
    borderColor: theme.palette.primary.main
  }
}));