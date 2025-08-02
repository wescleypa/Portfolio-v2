import { Box, Button, TextField, Typography } from '@mui/material';

const NewslatterContact = () => {
  return (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Receba atualizações e conteúdos exclusivos
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          disabled
          fullWidth
          placeholder="Seu melhor email"
          variant="outlined"
          size="small"
          InputProps={{
            sx: { borderRadius: '8px' }
          }}
        />
        <Button
          disabled
          variant="contained"
          color="primary"
          sx={{
            borderRadius: '8px',
            fontWeight: 500,
            textTransform: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          Inativo temporariamente
        </Button>
      </Box>
    </>
  );
};

export default NewslatterContact;