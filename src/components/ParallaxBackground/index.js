import { Box, useTheme } from '@mui/material';
import { Parallax } from 'react-parallax';

const ParallaxBackground = ({ image }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1
    }}>
      <Parallax
        bgImage={image}
        strength={300}
        bgImageStyle={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: theme.palette.mode === 'dark' ? 0.15 : 0.7,
        }}
      >
        <Box sx={{ height: '100dvh' }} />
      </Parallax>
    </Box>
  );
};

export default ParallaxBackground;