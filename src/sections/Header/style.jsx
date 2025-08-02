import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { renderSocialLink } from "../../utils";

// Animations
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

export const blink = keyframes`
  from, to { opacity: 1; }
  50% { opacity: 0; }
`;

// Styled components
export const HeroContainer = styled(Box)({
  position: 'relative',
  height: '100dvh',
  minHeight: '800px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
});

export const VideoBackground = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
  opacity: 0.9,
});

export const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)',
  zIndex: 1,
});

export const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
  width: '85%',
  maxWidth: '1200px',
  textAlign: 'center',
  color: '#fff',
  padding: '2rem',
});

export const CTAButton = styled(Button)(({ theme }) => ({
  padding: '1rem 2.5rem',
  b: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  fontSize: '0.9rem',
  letterSpacing: '0.2rem',
  textTransform: 'uppercase',
  transition: 'all 0.4s ease',
  opacity: 0,
  animation: `${fadeIn} 1.5s ease-out 0.9s forwards`,
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  '&:hover': {
    color: theme.palette.primary.contrastText,
    background: 'transparent',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: theme.palette.primary.main,
    transition: 'all 0.4s ease',
    zIndex: -1,
  },
  '&:hover::before': {
    left: 0,
  },
}));

export const SocialLinksContainer = styled(Box)({
  position: 'absolute',
  bottom: '3rem',
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  zIndex: 3,
});

export const ScrollHint = styled(Box)({
  position: 'absolute',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#fff',
  fontSize: '0.8rem',
  letterSpacing: '0.1rem',
  textTransform: 'uppercase',
  opacity: 0.5,
  zIndex: 3,
  animation: `${pulse} 2s infinite`,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all ease 0.3s',
  '&:hover': {
    fontSize: '1.1rem'
  }
});

export const PlayButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 4,
  color: '#d4af37',
  fontSize: '3rem',
  opacity: 0.7,
  transition: 'all 0.3s',
  '&:hover': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1.1)',
    background: 'transparent',
  },
});

export const Cursor = styled('span')({
  display: 'inline-block',
  marginLeft: '2px',
  animation: `${blink} 0.7s infinite`,
});

export const SocialMediaIcon = styled(({ children, type, ...props }) => (
  <IconButton
    component="a"
    target="_blank"
    href={renderSocialLink(type)}
    {...props}
  >
    {children}
  </IconButton>
))(({ theme }) => ({
  color: '#fff',
  opacity: 0.7,
  transition: 'all 0.3s',
  '&:hover': {
    color: theme.palette.primary.main,
    opacity: 1,
    transform: 'translateY(-3px)'
  }
}));