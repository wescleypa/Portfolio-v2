import React from 'react';
import { Typography, Box } from '@mui/material';

const TitleSection = ({ title1, title2 }) => {
  return (
    <Typography
      variant="h1"
      fontWeight={600}
      fontSize={{
        xs: '2rem',
        sm: '3rem'
      }}
      lineHeight="110%"
      gutterBottom
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {title1}&nbsp;
      <Box component="span" sx={{ color: 'error.main' }}>
        {title2}
      </Box>
    </Typography>
  );
};

export default TitleSection;