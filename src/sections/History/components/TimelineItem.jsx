import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { CircleShape, TriangleShape } from "../style";

const TimelineItem = ({ item, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      position: 'relative',
      mb: 10,
      display: 'flex',
      flexDirection: isMobile ? 'column' : index % 2 === 0 ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: 4
    }}>
      {/* Parallax Element */}
      <Box sx={{ width: isMobile ? 150 : 250, height: isMobile ? 150 : 250, position: 'relative', flexShrink: 0 }}>
        <Parallax speed={isMobile ? 0 : index % 2 === 0 ? -5 : 5}>
          <Box sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Formas abstratas */}
            <CircleShape sx={{
              width: '100%',
              height: '100%',
              filter: 'blur(24px)',
              opacity: 0.15
            }} />

            <TriangleShape sx={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              filter: 'blur(30px)',
              opacity: 0.1
            }} />

            {/* Imagem com destaque */}
            <Box
              component="img"
              src={item.image}
              alt=""
              sx={{
                position: 'relative',
                width: '80%',
                height: '80%',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: theme.shadows[16],
                zIndex: 1,
                border: theme.palette.mode === 'dark' ? `2px solid ${theme.palette.background.paper}` : 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: theme.shadows[20]
                }
              }}
            />

            {/* Brithness */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle at center, 
                ${theme.palette.primary.light} 0%, 
                transparent 70%)`,
              opacity: 0.1,
              zIndex: 0,
              pointerEvents: 'none'
            }} />
          </Box>
        </Parallax>
      </Box>

      {/* Parallax Text */}
      <Parallax speed={isMobile ? 0 : index % 2 === 0 ? -2 : 2}>
        <Box sx={{
          maxWidth: 600,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: '10px',
          boxShadow: theme.shadows[3]
        }}>
          <Typography variant="h4" component="h3" gutterBottom sx={{
            color: theme.palette.primary.main,
            fontWeight: 700
          }}>
            {item.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{
            lineHeight: 1.8,
            fontSize: '1.1rem'
          }}>
            {item.description}
          </Typography>
        </Box>
      </Parallax>
    </Box>
  );
};

export default TimelineItem;