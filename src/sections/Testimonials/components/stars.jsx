import { Box } from "@mui/material";

const renderStars = ({ rating, theme }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component="span"
          sx={{
            color: i < rating ? theme.palette.warning.main : theme.palette.grey[400],
            fontSize: '1.5rem',
            lineHeight: 1,
            mx: 0.5
          }}
        >
          ★
        </Box>
      ))}
    </Box>
  );
};

export default renderStars;