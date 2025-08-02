import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
  Grid,
  useMediaQuery
} from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import certifications from './certificationsData';
import { ParallaxElement } from './style';
import CertificationItem from './components/certificationItem';
import CertificationModal from './components/certificationModal';
import CertificationFilters from './components/certificationFilters';
import useCertificationModal from './hooks/useCertificationModal';

const CertificationsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedCert, setSelectedCert] = useState(null);
  const { handleOpen } = useCertificationModal({ certifications, selectedCert, setSelectedCert });

  const [filter, setFilter] = useState('all');

  const filteredCerts = filter === 'all'
    ? certifications
    : certifications.filter(c => c?.category === filter);

  return (
    <Box id="certifications" sx={{
      position: 'relative',
      py: 15,
      bgcolor: 'background.paper',
      overflow: 'hidden'
    }}>
      <ParallaxProvider>
        {/* Parallax Element */}
        <Parallax speed={-10}>
          <ParallaxElement />
        </Parallax>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant={!!isMobile ? 'h4' : 'h2'} component="h2" align="center" sx={{
            mb: 2,
            fontWeight: 800,
            color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark'
          }}>
            Certificações
          </Typography>

          <Typography variant="body1" align="center" sx={{
            mb: 8,
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem',
            color: 'text.secondary'
          }}>
            Investimento contínuo em aprendizado e desenvolvimento profissional
          </Typography>

          {/* Filters */}
          <CertificationFilters filter={filter} setFilter={setFilter} />

          {/* Certifications Grid */}
          <Grid container spacing={4}>
            {filteredCerts.map((cert, index) => (
              <CertificationItem key={index} cert={cert} index={index} handleOpen={handleOpen} />
            ))}
          </Grid>

          {/* Certification Modal */}
          <CertificationModal
            filteredCerts={filteredCerts}
            selectedCert={selectedCert}
            setSelectedCert={setSelectedCert}
          />
        </Container>
      </ParallaxProvider>
    </Box>
  );
};

export default CertificationsSection;