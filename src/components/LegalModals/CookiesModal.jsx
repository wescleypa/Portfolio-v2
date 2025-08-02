import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import { Close, Cookie } from '@mui/icons-material';

const CookiesModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
        <Cookie color="primary" sx={{ mr: 1 }} />
        Política de Cookies
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            🍪 Cookies Utilizados
          </Typography>

          <Typography variant="body1" paragraph>
            Este site utiliza cookies para:
          </Typography>

          <ul>
            <li><Typography variant="body2">Garantir o funcionamento básico</Typography></li>
            <li><Typography variant="body2">Analisar tráfego de forma anônima</Typography></li>
            <li><Typography variant="body2">Melhorar a experiência do usuário</Typography></li>
          </ul>

          <Typography variant="body1" paragraph sx={{ mt: 3 }}>
            Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Entendi
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookiesModal;