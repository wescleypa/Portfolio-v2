import { Box, Button } from '@mui/material';
import React from 'react';

const CertificationFilters = ({ filter, setFilter }) => {

  const Filters = [
    { category: 'all', title: 'Todas' },
    { category: 'tech', title: 'Tecnologia' },
    { category: 'language', title: 'Idiomas' }
  ];

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 2,
      mb: 6
    }}>
      {Filters.map((item, index) => (
        <Button
          key={index}
          variant={filter === item.category ? 'contained' : 'outlined'}
          onClick={() => setFilter(item.category)}
          sx={{
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: 600
          }}
        >
          {item.title}
        </Button>
      ))}
    </Box>
  );
};

export default CertificationFilters;