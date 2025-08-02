import styled from "@emotion/styled";
import { Box, Button, Paper, useMediaQuery } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(useMediaQuery(theme.breakpoints.down('sm')) ? 1 : 4),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[10],
  backgroundColor: 'transparent',
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: theme.palette.mode === 'dark' ? 'blur(4px)' : 'blur(20px)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23${theme.palette.mode === 'dark' ? 'ffffff' : '000000'}' fill-opacity='0.1'/%3E%3C/svg%3E")`,
    backgroundSize: '20px 20px',
    opacity: 0.5,
    zIndex: -1
  }
}));

export const SkillChip = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.text.primary,
  fontSize: '0.875rem',
  margin: theme.spacing(0.5),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: theme.palette.primary.dark,
  }
}));

export const AvatarContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: useMediaQuery(theme.breakpoints.down('md')) ? 200 : 300,
  height: useMediaQuery(theme.breakpoints.down('md')) ? 200 : 300,
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: theme.shadows[10],
  margin: '0 auto',
  border: `4px solid ${theme.palette.primary.main}`,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
}));

export const HistoryButton = styled(Button)(({ theme }) => ({
  mt: 2,
  position: !!useMediaQuery(theme.breakpoints.down('sm')) ? 'relative' : 'absolute',
  bottom: !!useMediaQuery(theme.breakpoints.down('sm')) ? 0 : 20,
  left: !!useMediaQuery(theme.breakpoints.down('sm')) ? '0' : '50%',
  transform: !!useMediaQuery(theme.breakpoints.down('sm')) ? 'translateX(35%)' : 'translate(50%)',
  borderRadius: 50,
  padding: theme.spacing(1, 4),
  fontWeight: 600,
  boxShadow: theme.shadows[2],
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  transition: 'all 0.3s ease'
}));