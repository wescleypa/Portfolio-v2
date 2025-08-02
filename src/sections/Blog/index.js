import {
  Box,
  Typography,
  Container,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { LinkedIn } from '@mui/icons-material';
import blogData from './blogData';
import BlogItem from './components/blogItem';
import { renderSocialLink } from '../../utils';
import { ParallaxElement } from './style';

const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ParallaxProvider>
      <Box id="blog" sx={{
        position: 'relative',
        py: 15,
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}>
        {/* Parallax element */}
        <Parallax speed={-10}>
          <ParallaxElement />
        </Parallax>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 6,
            gap: 2
          }}>
            <LinkedIn sx={{
              fontSize: '2rem',
              color: theme.palette.info.main
            }} />
            <Typography variant={!!isMobile ? 'h4' : 'h2'} component="h2" sx={{
              fontWeight: 800,
              color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark'
            }}>
              Artigos & Posts
            </Typography>
          </Box>

          <Typography variant="body1" align="center" sx={{
            mb: 8,
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem'
          }}>
            Compartilhamentos técnicos, reflexões sobre carreira e insights da indústria.
          </Typography>

          {/* Posts */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 4,
            mb: 6
          }}>
            {blogData.map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
          </Box>

          {/* Profile button */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              color="info"
              size="large"
              startIcon={<LinkedIn />}
              href={renderSocialLink('linkedin')}
              target="_blank"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 50,
                fontWeight: 600,
                '&:hover': {
                  bgcolor: theme.palette.info.main,
                  color: theme.palette.common.white
                }
              }}
            >
              Ver Perfil Completo
            </Button>
          </Box>
        </Container>
      </Box>
    </ParallaxProvider>
  );
};

export default Blog;