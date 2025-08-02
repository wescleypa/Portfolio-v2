import { Send } from '@mui/icons-material';
import { Button, Grid, TextField } from '@mui/material';

const ContactForm = () => {
  return (
    <form>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            disabled
            fullWidth
            label="Seu Nome"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: '12px' }
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            disabled
            fullWidth
            label="Seu Email"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: '12px' }
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            disabled
            fullWidth
            label="Assunto"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: '12px' }
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            disabled
            fullWidth
            label="Mensagem"
            multiline
            rows={4}
            variant="outlined"
            InputProps={{
              sx: { borderRadius: '16px' }
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            disabled
            variant="contained"
            color="primary"
            size="large"
            endIcon={<Send />}
            sx={{
              borderRadius: '12px',
              py: 1.5,
              px: 4,
              fontWeight: 600,
              textTransform: 'none'
            }}
          >
            Inativo temporariamente
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;