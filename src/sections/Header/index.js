import {
  Box,
  Typography,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YoutubeIcon,
  KeyboardDoubleArrowDown,
} from '@mui/icons-material';
import {
  ContentWrapper,
  CTAButton,
  Cursor,
  fadeIn,
  HeroContainer,
  Overlay,
  PlayButton,
  ScrollHint,
  SocialLinksContainer,
  SocialMediaIcon,
  VideoBackground
} from './style';
import { useTypingEffect, useVideoEffect } from './effects';
import useScrollToSection from '../../hooks/useScrollToSection';


const Header = () => {
  const { displayText } = useTypingEffect();
  const { showPlayButton, handlePlayClick, videoRef } = useVideoEffect();
  const { scrollTo } = useScrollToSection();

  return (
    <HeroContainer id="header">
      <VideoBackground
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={`https://pub-e7b4528b45b44511bee5a4faba0e8528.r2.dev/bgheader.mp4`} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </VideoBackground>

      <Overlay />

      <ContentWrapper>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '3rem' },
            fontWeight: 500,
            letterSpacing: '0.5rem',
            textTransform: 'uppercase',
            mb: '1.5rem',
            opacity: 0,
            animation: `${fadeIn} 1.5s ease-out 0.3s forwards`,
          }}
        >
          Wescley Andrade
          <Box
            component="span"
            sx={{
              display: 'block',
              mt: '0.5rem',
              fontWeight: 600,
              color: 'primary.main',
              fontSize: { xs: '1.5rem', md: '2rem' },
              letterSpacing: '0.1rem',
              animation: `${fadeIn} 1.5s ease-out 0.6s forwards`,
              position: 'relative',
            }}
          >
            Analista Desenvolvedor de Sistemas
          </Box>
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '2rem' }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontWeight: 300,
              letterSpacing: '0.3rem',
              mb: '3rem',
              opacity: 0,
              animation: `${fadeIn} 1.5s ease-out 0.6s forwards`,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50px',
                height: '1px',
                bgcolor: 'primary.main',
              },
            }}
          >
            <Box component="span" sx={{ display: 'inline-block' }}>
              {displayText}
            </Box>
            <Cursor>|</Cursor>
          </Typography>

          <CTAButton
            variant="outlined"
            sx={{
              animation: `${fadeIn} 1.5s ease-out 0.9s forwards`,
            }}
            onClick={() => scrollTo('about')}
          >
            Explorar
          </CTAButton>
        </Box>
      </ContentWrapper>

      {showPlayButton && (
        <PlayButton onClick={handlePlayClick}>
          <PlayIcon fontSize="large" />
        </PlayButton>
      )}

      <SocialLinksContainer>
        <SocialMediaIcon type="github">
          <GitHubIcon />
        </SocialMediaIcon>
        <SocialMediaIcon type="linkedin">
          <LinkedInIcon />
        </SocialMediaIcon>
        <SocialMediaIcon type="youtube">
          <YoutubeIcon />
        </SocialMediaIcon>
      </SocialLinksContainer>

      <ScrollHint onClick={() => scrollTo('about')}>
        <KeyboardDoubleArrowDown />
        Role para explorar
      </ScrollHint>
    </HeroContainer>
  );
};

export default Header;