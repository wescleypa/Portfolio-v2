'use client'
import {
  Box,
  Typography,
  useTheme,
  styled,
} from '@mui/material';
import FadeInBox from './FadeInBox';

const GradientBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: theme.palette.mode === 'light'
    ? `radial-gradient(circle, ${theme.palette.warning.light} 1px, transparent 1px)`
    : `radial-gradient(circle, ${theme.palette.warning.dark} 1px, transparent 1px)`,
  backgroundSize: '20px 20px',
  opacity: 0.4,
  zIndex: 1
}));


const Article = ({ title, description, image, index }) => {
  const theme = useTheme();
  const isEven = index % 2 === 0;
  const animationDelay = 100;

  return (
    <FadeInBox delay={animationDelay} >
      <Box
        sx={{
          mt: { xs: 1, sm: 5 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          gap: 3
        }}
      >
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            order: { xs: 1, sm: isEven ? 1 : 2 }
          }}
        >
          <Box
            sx={{
              width: { xs: '200px', sm: '300px' },
              zIndex: 2,
              ml: { xs: 0, sm: '5%' },
              mt: '5%',
              position: 'relative',
            }}
          >
            <img
              src={image}
              alt={title}
              width={600}
              height={500}
              style={{
                borderRadius: theme.shape.borderRadius,
                objectFit: 'cover',
                width: '100%',
                height: 'auto'
              }}
            />
          </Box>
          <GradientBackground />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: { xs: 3, sm: 0 },
            order: { xs: 1, sm: isEven ? 2 : 1 }
          }}
        >

          <Typography variant="h4" component="h2" sx={{ mt: 1, fontWeight: 600, textAlign: 'left' }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: theme.palette.mode === 'light' ? 'text.secondary' : 'text.primary',
              fontSize: '1.125rem',
              textAlign: 'left'
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </FadeInBox>
  );
};

export default Article;