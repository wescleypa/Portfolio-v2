import {
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import testimonials from './testimonialsData';
import { ParallaxElement } from './style';
import TestimonialItem from './components/testimonialItem';
import useSlide from './hooks/useSlide';
import { SlideLeftButton, SlideRightButton } from './components/slideControllers';


const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { activeIndex, setActiveIndex, handlePrev, handleNext } = useSlide(testimonials);

  return (
    <ParallaxProvider>
      <Box id="testimonials" sx={{
        position: 'relative',
        py: 15,
        bgcolor: 'background.default',
        overflow: 'hidden'
      }}>
        {/* Parallax Element */}
        <Parallax speed={-10}>
          <ParallaxElement />
        </Parallax>

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h2" align="center" sx={{
            mb: 2,
            fontWeight: 800,
            color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark'
          }}>
            O que dizem sobre mim
          </Typography>

          <Typography variant="body1" align="center" sx={{
            mb: 8,
            maxWidth: 700,
            mx: 'auto',
            fontSize: '1.1rem',
            color: 'text.secondary'
          }}>
            Feedback de clientes, colegas e parceiros de trabalho
          </Typography>

          {/* Testimonial Slide */}
          <Box sx={{
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', // Adicione isso aqui
            width: '100%' // Garante largura total
          }}>
            <SlideLeftButton handlePrev={handlePrev} />

            <Box sx={{
              display: 'flex',
              width: !!isMobile ? '100%' : '60%',
              justifyContent: 'flex-start', // Mude para flex-start
              alignItems: 'center',
              gap: 4,
              px: isMobile ? 2 : 0,
              transform: `translateX(-${activeIndex * (100 / testimonials.length)}%)`, // Efeito deslizante
              transition: 'transform 0.5s ease'
            }}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={testimonial.id}
                  testimonial={testimonial}
                  isMobile={isMobile}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  sx={{
                    flex: '0 0 calc(50% - 32px)', // Mantém o tamanho mas permite rolagem
                    minWidth: isMobile ? '100%' : 'calc(50% - 32px)'
                  }}
                />
              ))}
            </Box>

            <SlideRightButton handleNext={handleNext} />
          </Box>

          {/* Mobile Indicators*/}
          {isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: activeIndex === index ? 'primary.main' : 'divider',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </ParallaxProvider>
  );
};

export default TestimonialsSection;