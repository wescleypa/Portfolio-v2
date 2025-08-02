import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const SlideLeftButton = ({ handlePrev }) => (
  <IconButton
    onClick={handlePrev}
    sx={{
      position: 'absolute',
      left: 10,
      zIndex: 3,
      bgcolor: 'background.paper',
      '&:hover': {
        bgcolor: 'primary.main',
        color: 'primary.contrastText'
      }
    }}
  >
    <ChevronLeft fontSize="large" />
  </IconButton>
);

export const SlideRightButton = ({ handleNext }) => (
  <IconButton
    onClick={handleNext}
    sx={{
      position: 'absolute',
      right: 10,
      zIndex: 3,
      bgcolor: 'background.paper',
      '&:hover': {
        bgcolor: 'primary.main',
        color: 'primary.contrastText'
      }
    }}
  >
    <ChevronRight fontSize="large" />
  </IconButton>
);