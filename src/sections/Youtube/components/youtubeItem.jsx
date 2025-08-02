import { Parallax } from 'react-scroll-parallax';
import { VideoCard } from '../style';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';

const YoutubeItem = ({ index, video }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Parallax
      key={index}
      speed={isMobile ? 0 : index % 2 === 0 ? -index : index}
      rotate={isMobile ? [0, 0] : [index % 3, -index % 3]}
      scale={[0.95, 1]}
    >
      <VideoCard>
        {/* Thumbnail */}
        <Box sx={{
          position: 'relative',
          paddingTop: '56.25%',
          bgcolor: theme.palette.grey[900],
          overflow: 'hidden'
        }}>
          <Box
            component="img"
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.8)'
            }}
          />

          {/* Overlay with play icon */}
          <Box className="play-icon" sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: theme.palette.error.main,
            opacity: 0.8,
            transition: 'all 0.3s ease',
            '& svg': {
              fontSize: '4rem'
            }
          }}>
            <PlayCircleOutline />
          </Box>
        </Box>

        {/* Video info */}
        <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {video.title}
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: theme.palette.text.secondary,
            fontSize: '0.9rem'
          }}>
            <span>{video.date}</span>
            <span>{video.views} visualizações</span>
          </Box>
        </Box>

        {/* Video link */}
        <Box
          component="a"
          href={`https://youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            opacity: 0
          }}
        />
      </VideoCard>
    </Parallax>
  )
};

export default YoutubeItem;