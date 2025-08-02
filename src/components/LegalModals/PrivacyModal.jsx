import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
  IconButton
} from '@mui/material';
import { Close, PrivacyTip } from '@mui/icons-material';

const PrivacyModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
        <PrivacyTip color="primary" sx={{ mr: 1 }} />
        Política de Privacidade
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
          <Typography variant="body1" paragraph>
            <strong>1. Informações Coletadas</strong><br />
            Coletamos apenas dados necessários para análise de tráfego e funcionamento do site:
          </Typography>

          <ul>
            <li><Typography variant="body2">Dados anônimos de acesso</Typography></li>
            <li><Typography variant="body2">Informações de dispositivo e navegador</Typography></li>
            <li><Typography variant="body2">Interações com o conteúdo</Typography></li>
          </ul>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" paragraph>
            <strong>2. Uso dos Dados</strong><br />
            Seus dados são usados exclusivamente para melhorar a experiência do usuário e análise de desempenho.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyModal;