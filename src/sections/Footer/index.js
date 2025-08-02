import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
} from '@mui/material';
import {
  Email,
} from '@mui/icons-material';
import { ContactCard } from './style';
import ContactForm from './components/contactForm';
import FooterComponent from './components/footerComponent';
import { components } from './footerData';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" id="footer" sx={{
      bgcolor: 'background.default',
      pt: 12,
      pb: 4,
      borderTop: '1px solid',
      borderColor: 'divider'
    }}>
      {/* Contact */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Typography variant="h2" component="h2" align="center" sx={{
          mb: 2,
          fontWeight: 800,
          color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark'
        }}>
          Vamos trabalhar juntos ?
        </Typography>

        <Typography variant="body1" align="center" sx={{
          mb: 8,
          maxWidth: 700,
          mx: 'auto',
          fontSize: '1.1rem',
          color: 'text.secondary'
        }}>
          Entre em contato para discutir seu projeto ou oportunidades de colaboração
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactCard>
              <Typography variant="h5" component="h3" sx={{
                mb: 3,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
                <Email color="primary" /> Envie uma Mensagem
              </Typography>

              <ContactForm />
            </ContactCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={4} sx={{ height: '100%' }}>
              {components.map((comp, index) => (
                <Grid key={index} size={comp.size}>
                  <ContactCard>
                    <Typography variant="h5" component="h3" sx={{
                      mb: 3,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}>
                      {comp.icon} {comp.title}
                    </Typography>

                    {comp.component}
                  </ContactCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Social Footer */}
      <FooterComponent />
    </Box>
  );
};

export default Footer;