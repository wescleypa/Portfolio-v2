import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxElement, ParallaxElement2, StatCard } from './style';
import stats from './statisticsData';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <Typography variant="h2" component="div" sx={{
      fontWeight: 800,
      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      mb: 1
    }}>
      {count}+
    </Typography>
  );
};

const StatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="stats" sx={{
      position: 'relative',
      py: 15,
      bgcolor: 'background.paper',
      overflow: 'hidden'
    }}>
      {/* Elementos decorativos com parallax */}
      <ParallaxProvider>
        <Parallax speed={-15}>
          <ParallaxElement />
        </Parallax>

        <Parallax speed={10}>
          <ParallaxElement2 />
        </Parallax>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h2" align="center" sx={{
            mb: 2,
            fontWeight: 800,
            color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark'
          }}>
            Em números
          </Typography>

          <Typography variant="body1" align="center" sx={{
            mb: 8,
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem',
            color: 'text.secondary'
          }}>
            Algumas métricas que mostram minha jornada e impacto na área de tecnologia
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: 4
          }}>
            {stats.map((stat, index) => (
              <Parallax key={index} speed={isMobile ? 0 : index % 2 === 0 ? -5 : 5}>
                <StatCard>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <Counter target={stat.value} duration={2000} />
                  <Typography variant="h6" component="div" sx={{
                    fontWeight: 600,
                    color: 'text.primary'
                  }}>
                    {stat.label}
                  </Typography>
                </StatCard>
              </Parallax>
            ))}
          </Box>
        </Container>
      </ParallaxProvider>
    </Box>
  );
};

export default StatsSection;