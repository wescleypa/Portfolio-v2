import { Email, Phone, WhatsApp } from '@mui/icons-material';
import { Box, Link } from '@mui/material';
import { phoneFormat } from '../../../utils';

const DirectContact = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Link href={`mailto:${process.env.REACT_APP_CONTACT_MAIL}`} sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        color: 'text.primary',
        textDecoration: 'none',
        '&:hover': {
          color: 'primary.main'
        }
      }}>
        <Email color="action" /> {process.env.REACT_APP_CONTACT_MAIL}
      </Link>

      <Link href="tel:+5511999999999" sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        color: 'text.primary',
        textDecoration: 'none',
        '&:hover': {
          color: 'primary.main'
        }
      }}>
        <Phone color="action" /> {phoneFormat(process.env.REACT_APP_CONTACT_WPP)}
      </Link>

      <Link href={`https://wa.me/${process.env.REACT_APP_CONTACT_WPP}?text=Olá vim do seu Portfólio`} target="_blank" sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        color: 'text.primary',
        textDecoration: 'none',
        '&:hover': {
          color: 'primary.main'
        }
      }}>
        <WhatsApp color="action" /> WhatsApp
      </Link>
    </Box>
  );
};

export default DirectContact;