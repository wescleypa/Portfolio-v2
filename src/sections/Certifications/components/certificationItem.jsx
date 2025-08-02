import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { CertificationCard } from '../style';

const CertificationItem = ({ cert, index, handleOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert.id}>
      <Parallax speed={isMobile ? 0 : index % 2 === 0 ? -5 : 5}>
        <CertificationCard onClick={() => handleOpen(index)}>
          <Box sx={{
            height: '200px',
            backgroundImage: `url(${cert.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
            <Box className="overlay" sx={{
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
            }}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                {cert.title}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {cert.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cert.issuer}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {cert.date}
            </Typography>
          </Box>
        </CertificationCard>
      </Parallax>
    </Grid>
  )
};

export default CertificationItem;