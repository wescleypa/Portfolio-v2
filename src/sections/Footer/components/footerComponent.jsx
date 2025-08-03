import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { TermsModal, PrivacyModal, CookiesModal } from '../../../components/LegalModals';
import { socialLinks } from '../footerData';
import useScrollToSection from '../../../hooks/useScrollToSection';
import { useState } from 'react';
import { ChangeCircle } from '@mui/icons-material';

const FooterComponent = () => {
  const { scrollTo } = useScrollToSection();
  const [legal, setLegal] = useState({
    terms: false,
    privacy: false,
    cookies: false
  });

  const handleLegalAction = (item) => {
    setLegal(prev => ({
      ...prev,
      [item]: !prev[item]
    }))
  };

  return (
    <Container maxWidth="lg">
      <Divider sx={{ my: 6 }} />

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontFamily: '"Dancing Script", cursive',
              fontSize: '1.8rem' // Ajuste conforme necessário
            }}
          >
            Wescley Andrade
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Desenvolvedor Full Stack especializado em criar soluções digitais inovadoras e de alta performance.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((item, index) => (
              <IconButton
                key={index}
                href={item.url}
                target="_blank"
                sx={{
                  bgcolor: 'background.default',
                  transition: 'all ease 0.3s',
                  '&:hover': { bgcolor: 'primary.main', color: 'white' }
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="subtitle1" component="div" sx={{
            fontWeight: 600,
            mb: 2
          }}>
            Links Rápidos
          </Typography>

          <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link color="text.secondary" underline="hover" sx={{ cursor: 'pointer' }} onClick={() => scrollTo('header')}>
              Início
            </Link>
            <Link color="text.secondary" underline="hover" sx={{ cursor: 'pointer' }} onClick={() => scrollTo('about')}>
              Sobre
            </Link>
            <Link color="text.secondary" underline="hover" sx={{ cursor: 'pointer' }} onClick={() => scrollTo('projects')}>
              Projetos
            </Link>
            <Link color="text.secondary" underline="hover" sx={{ cursor: 'pointer' }} onClick={() => scrollTo('blog')}>
              Artigos
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="subtitle1" component="div" sx={{
            fontWeight: 600,
            mb: 2
          }}>
            Legal
          </Typography>

          <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link sx={{ cursor: 'pointer' }} color="text.secondary" underline="hover" onClick={() => handleLegalAction('privacy')}>
              Política de Privacidade
            </Link>
            <Link sx={{ cursor: 'pointer' }} color="text.secondary" underline="hover" onClick={() => handleLegalAction('terms')}>
              Termos de Uso
            </Link>
            <Link sx={{ cursor: 'pointer' }} color="text.secondary" underline="hover" onClick={() => handleLegalAction('cookies')}>
              Cookies
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6 }} />

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2
      }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} SouWescley.com - Todos os direitos reservados.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Desenvolvido com ❤️ utilizando React e Material UI
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <ChangeCircle sx={{ width: 20 }} /> 2.0.0
        </Typography>
      </Box>

      {/* Legal Modals */}
      <TermsModal open={!!legal.terms} onClose={() => handleLegalAction('terms')} />
      <CookiesModal open={!!legal.cookies} onClose={() => handleLegalAction('cookies')} />
      <PrivacyModal open={!!legal.privacy} onClose={() => handleLegalAction('privacy')} />

    </Container>
  );
};

export default FooterComponent;