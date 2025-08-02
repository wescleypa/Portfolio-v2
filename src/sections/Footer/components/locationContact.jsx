import { LocationOn } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

const LocationContact = () => {
  return (<>
    <Typography variant="body1" sx={{
      mb: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }}>
      <LocationOn color="action" /> {process.env.REACT_APP_CONTACT_LOCATION}
    </Typography>

    <Typography variant="body2" color="text.secondary">
      Atendimento remoto para clientes em todo o mundo
    </Typography>

    <Button
      href={`https://wa.me/${process.env.REACT_APP_CONTACT_WPP}?text=Olá vim do seu Portfólio`}
      target='_blank'
      variant="outlined"
      color="primary"
      size="small"
      sx={{
        mt: 3,
        borderRadius: '8px',
        fontWeight: 500,
        textTransform: 'none'
      }}
    >
      Agendar Chamada
    </Button>
  </>);
};

export default LocationContact;