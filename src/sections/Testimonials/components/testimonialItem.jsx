import { FormatQuote } from '@mui/icons-material';
import React from 'react';
import { TestimonialCard } from '../style';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import renderStars from './stars';

const TestimonialItem = ({
  testimonial,
  isMobile,
  index,
  activeIndex,
  setActiveIndex,
  sx
}) => {
  const theme = useTheme();

  return (
    <Box // Substitua Parallax por Box para melhor controle
      sx={{
        display: 'block', // Sempre visível
        width: '100%',
        transition: 'all 0.5s ease',
        opacity: activeIndex === index ? 1 : 0.7,
        transform: activeIndex === index ? 'scale(1.05)' : 'scale(0.9)',
        ...sx // Spread das props adicionais
      }}
    >
      <TestimonialCard
        active={activeIndex === index}
        onClick={() => !isMobile && setActiveIndex(index)}
      >
        <FormatQuote sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          fontSize: '4rem',
          color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          transform: 'rotate(180deg)'
        }} />
        {renderStars({ rating: testimonial.rating, theme })}
        <Typography variant="body1" paragraph sx={{
          fontStyle: 'italic',
          fontSize: '1.1rem',
          mb: 3,
          position: 'relative'
        }}>
          {testimonial.content}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={testimonial.avatar}
            alt={testimonial.name}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h6" component="div">
              {testimonial.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {testimonial.role}
            </Typography>
          </Box>
        </Box>
        <FormatQuote sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          fontSize: '4rem',
          color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
        }} />
      </TestimonialCard>
    </Box>
  )
};

export default TestimonialItem;