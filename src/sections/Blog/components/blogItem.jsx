import { ExpandLess, ExpandMore, OpenInNew } from '@mui/icons-material';
import { Box, Button, CardContent, CardMedia, Chip, Collapse, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { ExpandableCard } from '../style';
import { useState } from 'react';

const BlogItem = ({ post }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedPost, setExpandedPost] = useState(null);
  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <Parallax key={post.id} speed={isMobile ? 0 : post.id % 2 === 0 ? 5 : -5}>
      <ExpandableCard>
        <CardMedia
          component="img"
          height="200"
          image={post.image}
          alt={post.title}
        />
        <CardContent sx={{
          bgcolor: 'background.paper',
          position: 'relative',
          pb: '60px !important'
        }}>
          <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
            {post.tags.map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  bgcolor: theme.palette.mode === 'dark'
                    ? theme.palette.primary.dark
                    : theme.palette.primary.light,
                  color: theme.palette.primary.contrastText
                }}
              />
            ))}
          </Box>

          <Typography variant="h5" component="h3" gutterBottom>
            {post.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {post.date} • 📈 {post.impressions} • 👥 {post.users}
          </Typography>

          <Collapse in={expandedPost === post.id} collapsedSize={70}>
            <div dangerouslySetInnerHTML={{ __html: expandedPost === post.id ? post.content : post.excerpt }} />
          </Collapse>

          <Box sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            display: 'flex',
            gap: 1
          }}>
            <Button
              size="small"
              onClick={() => toggleExpand(post.id)}
              endIcon={expandedPost === post.id ? <ExpandLess /> : <ExpandMore />}
              sx={{
                borderRadius: 50,
                px: 2
              }}
            >
              {expandedPost === post.id ? 'Menos' : 'Mais'}
            </Button>

            <Button
              variant="contained"
              size="small"
              href={post.url}
              target="_blank"
              rel="noopener"
              endIcon={<OpenInNew />}
              sx={{
                borderRadius: 50,
                px: 2,
                bgcolor: theme.palette.info.main,
                '&:hover': {
                  bgcolor: theme.palette.info.dark
                }
              }}
            >
              Ler
            </Button>
          </Box>
        </CardContent>
      </ExpandableCard>
    </Parallax>
  )
};

export default BlogItem;