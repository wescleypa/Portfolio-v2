import { Box, Button, Chip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { ProjectCard } from '../style';
import { KeyboardArrowRight } from '@mui/icons-material';

const ProjectItem = ({ index, project }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Parallax
      speed={!!isMobile ? 0 : index % 2 === 0 ? -index * 2 : index * 2}
      rotate={!!isMobile ? [0, 0] : index % 2 === 0 ? [-5, 5] : [5, -5]}
      scale={!!isMobile ? [1, 1] : [1, 1.1]}
      style={{
        transformStyle: 'preserve-3d',
        width: isMobile ? '100%' : '30%'
      }}
    >
      <ProjectCard elevation={3}>
        {/* Imagem com parallax interno */}
        <Parallax speed={10}>
          <Box sx={{
            height: '200px',
            overflow: 'hidden'
          }}>
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.8s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            />
          </Box>
        </Parallax>

        <Box sx={{ p: 3 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            {project.description}
          </Typography>

          <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  bgcolor: theme.palette.mode === 'dark'
                    ? theme.palette.primary.dark
                    : theme.palette.primary.light,
                  color: theme.palette.primary.contrastText
                }}
              />
            ))}
          </Box>

          <Button
            endIcon={<KeyboardArrowRight />}
            sx={{
              mt: 1,
              borderRadius: 50,
              fontWeight: 600
            }}
            onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
          >
            Ver Detalhes
          </Button>
        </Box>
      </ProjectCard>
    </Parallax>
  )
};

export default ProjectItem;