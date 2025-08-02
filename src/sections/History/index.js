import {
  Box,
  Typography,
  Container,
  useTheme,
} from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import timelineData from './timelidata';
import { CircleShape, TriangleShape } from './style';
import TimelineItem from './components/TimelineItem';

const History = () => {
  const theme = useTheme();
  
  return (
    <ParallaxProvider>
      <Box id="history" sx={{
        position: 'relative',
        py: 15,
        overflow: 'hidden',
        bgcolor: 'background.default'
      }}>
        {/* Parallax elements */}
        <Parallax speed={-10}>
          <CircleShape sx={{
            width: 300,
            height: 300,
            top: 100,
            left: -100
          }} />
        </Parallax>
        
        <Parallax speed={5}>
          <TriangleShape sx={{
            top: 300,
            right: -100,
            borderBottom: `300px solid ${theme.palette.secondary.light}`
          }} />
        </Parallax>
        
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" align="center" sx={{
            mb: 10,
            fontWeight: 800,
            color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark',
            position: 'relative'
          }}>
            <Box component="span" sx={{
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2
            }} />
            Minha Jornada
          </Typography>

          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </Container>
      </Box>
    </ParallaxProvider>
  );
};

export default History;