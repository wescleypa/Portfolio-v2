import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import useCertificationModal from '../hooks/useCertificationModal';
import certifications from '../certificationsData';

const CertificationModal = ({ filteredCerts, selectedCert, setSelectedCert }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    handleClose,
    handlePrev,
    handleNext
  } = useCertificationModal({ certifications, selectedCert, setSelectedCert });

  return (
    <Dialog
      open={selectedCert !== null}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          bgcolor: 'background.paper'
        }
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative' }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 2,
            bgcolor: 'background.paper',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText'
            }
          }}
        >
          <Close />
        </IconButton>

        <Box sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          height: isMobile ? 'auto' : '500px'
        }}>
          <Box sx={{
            width: isMobile ? '100%' : '60%',
            height: isMobile ? '300px' : '100%',
            backgroundImage: `url(${filteredCerts[selectedCert]?.image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
            position: 'relative'
          }}>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText'
                }
              }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText'
                }
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>

          <Box sx={{
            width: isMobile ? '100%' : '40%',
            p: 4,
            overflowY: 'auto'
          }}>
            <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
              {filteredCerts[selectedCert]?.title}
            </Typography>
            <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
              {filteredCerts[selectedCert]?.issuer}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Emitido em: {filteredCerts[selectedCert]?.date} • Credencial: {filteredCerts[selectedCert]?.credential}
            </Typography>
            <Typography variant="body1" paragraph>
              {filteredCerts[selectedCert]?.description}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ borderRadius: '20px', textTransform: 'none' }}
        >
          Fechar
        </Button>
        <Button
          variant="outlined"
          onClick={() => window.open(filteredCerts[selectedCert]?.image, '_blank')}
          sx={{ borderRadius: '20px', textTransform: 'none' }}
        >
          Ver Certificado Completo
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CertificationModal;