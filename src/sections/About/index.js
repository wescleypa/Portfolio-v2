import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Tooltip
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { AvatarContainer, HistoryButton, SkillChip, StyledPaper } from './style';
import skills from './skills';
import ParallaxBackground from '../../components/ParallaxBackground';
import useScrollToSection from '../../hooks/useScrollToSection';



const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { scrollTo } = useScrollToSection();

  return (
    <Box id="about" sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Parallax background */}
      <ParallaxBackground image={`${window.location.origin}/assets/images/eusorrindo.jpg`} />

      {/* Content */}
      <Container maxWidth="lg" sx={{
        py: 15,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <StyledPaper elevation={3}>
          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: 4,
            position: 'relative',
          }}>
            <Box sx={{ maxWidth: !!isMobile ? '100%' : '400px', textAlign: 'center' }}>
              {/* Profile Avatar */}
              <AvatarContainer>
                <img
                  src={`${window.location.origin}/assets/images/eusorrindo.jpg`}
                  alt="Sobre mim"
                  loading="lazy"
                />
              </AvatarContainer>

              <Box sx={{ my: 3 }}>
                {skills.map((skill, index) => (
                  <Tooltip title={skill.name} key={index}>
                    <SkillChip key={index}>
                      <Box component="img" src={`${window.location.origin}/assets/images/${skill.icon}.png`} sx={{
                        width: '20px',
                        height: '20px',
                        verticalAlign: 'middle',
                      }} />&nbsp;
                      {skill.name}
                    </SkillChip>
                  </Tooltip>
                ))}
              </Box>
            </Box>

            {/* Text content */}
            <Box sx={{ flex: 2 }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.mode === 'dark'
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main
                }}
              >
                Sobre mim
              </Typography>

              <Typography variant="body1">
                Uma pessoa apaixonada por desafios e movida pela curiosidade. Acredito que a tecnologia tem o poder de transformar o mundo, não apenas no campo científico, mas também impactando a vida das pessoas de maneiras profundas e significativas. Seja criando oportunidades, conectando pessoas ou até mesmo salvando vidas, a tecnologia é a ferramenta que nos permite transformar sonhos em realidade.
              </Typography>
              <blockquote>
                <Typography component="em" variant="body1">
                  "Posso não fazer aquilo que gosto, mas sempre vou gostar daquilo que faço."
                </Typography>
              </blockquote>
              <Typography variant="body1" component="div" sx={{ mb: 2 }}>
                <Box component="p">
                  Essa mentalidade me motiva a dar o meu melhor em tudo o que me proponho a realizar, enfrentando cada desafio com dedicação, resiliência e otimismo.
                </Box>
                <Box component="p">
                  Sou organizado, criativo e um eterno aprendiz, sempre em busca de novos conhecimentos e experiências para compartilhar. Acredito que a colaboração e a troca de ideias são essenciais para construir soluções que realmente façam a diferença.
                </Box>
                <Box component="p">
                  Vamos juntos criar algo incrível?
                </Box>
              </Typography>

              <HistoryButton
                variant="contained"
                color="primary"
                size="large"
                startIcon={<KeyboardArrowDown />}
                onClick={() => scrollTo('history')}
              >
                Minha história
              </HistoryButton>
            </Box>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
};

export default AboutSection;