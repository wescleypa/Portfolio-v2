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
import { Close, Gavel } from '@mui/icons-material';

const TermsModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
        <Gavel color="primary" sx={{ mr: 1 }} />
        Termos de Uso
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
            Ao acessar este portfólio, você concorda com os seguintes termos:
          </Typography>

          <Typography variant="body1" component="div" sx={{ mb: 3 }}>
            <ul>
              <li><strong>Uso Adequado:</strong> O conteúdo é para visualização pessoal/não-comercial</li>
              <li><strong>Propriedade Intelectual:</strong> Todos os projetos exibidos são de minha autoria ou possuo permissão para exibição</li>
              <li><strong>Isenção de Garantias:</strong> O site é fornecido "no estado em que se encontra"</li>
            </ul>
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" fontStyle="italic">
            Última atualização: {new Date().toLocaleDateString()}
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

export default TermsModal;