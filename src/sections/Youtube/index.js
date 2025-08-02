import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import youtubeData from './youtubeData';
import { renderSocialLink } from '../../utils';
import { YouTube } from '@mui/icons-material';
import YoutubeItem from './components/youtubeItem';
import { ParallaxEffect } from './style';

const Youtube = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ParallaxProvider>
      <Box id="youtube" sx={{
        position: 'relative',
        py: 15,
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        minHeight: '100dvh'
      }}>
        {/* Film effect */}
        <Parallax speed={-10}>
          <ParallaxEffect />
        </Parallax>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

          {/* Title */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 6,
            gap: 2
          }}>
            <YouTube sx={{ 
              fontSize: '3rem', 
              color: theme.palette.primary.main 
            }} />
            <Typography variant="h2" component="h2" sx={{
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Tech Videos
            </Typography>
          </Box>

          <Typography variant="body1" align="center" sx={{ 
            mb: 8,
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem'
          }}>
            Tutoriais, dicas e insights sobre Tecnologia.
            Todo conteúdo gratuito para ajudar a comunidade dev!
          </Typography>

          {/* Videos list */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 4,
            perspective: '1000px'
          }}>
            {youtubeData.map((video, index) => (
              <YoutubeItem key={index} index={index} video={video} />
            ))}
          </Box>

          {/* Botão para canal */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              color="error"
              size="large"
              startIcon={<YouTube />}
              href={renderSocialLink('youtube')}
              target="_blank"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 50,
                fontWeight: 600,
                '&:hover': {
                  bgcolor: theme.palette.error.main,
                  color: theme.palette.common.white
                }
              }}
            >
              Ver Canal Completo
            </Button>
          </Box>
        </Container>
      </Box>
    </ParallaxProvider>
  );
};

export default Youtube;