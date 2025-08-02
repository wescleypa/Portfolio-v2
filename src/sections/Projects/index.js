import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import projectsData from './projectsData';
import ProjectItem from './components/projectItem';
import { ParallaxElement, ParallaxWave } from './style';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ParallaxProvider>
      <Box id="projects" sx={{
        position: 'relative',
        py: 15,
        bgcolor: 'background.default',
        overflow: 'hidden',
        minHeight: '100dvh'
      }}>
        {/* Parallax elements */}
        <Parallax speed={-15}>
          <ParallaxElement />
        </Parallax>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h2" align="center" sx={{
            fontWeight: 800,
            color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark'
          }}>
            Projetos em destaque
          </Typography>

          {/* Wave effect */}
          <Parallax speed={-20}>
            <ParallaxWave />
          </Parallax>

          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? 8 : 4,
            perspective: '1000px',
            mt: 20
          }}>
            {projectsData.map((project, index) => (
              <ProjectItem key={project.id} index={index} project={project} />
            ))}
          </Box>
        </Container>
      </Box>

      <style jsx="true" global="true">{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </ParallaxProvider>
  );
};

export default Projects;