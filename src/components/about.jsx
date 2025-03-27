'use client'
import {
  Container,
  Grid,
  Avatar,
  Box,
  Typography,
  Stack,
  Divider,
  Chip,
  useTheme,
  Button
} from '@mui/material';
import { useConfig } from '../contexts/config';
import ApiService from '../services/request';
import { useEffect } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          bgcolor: iconBg
        }}
      >
        {icon}
      </Avatar>
      <Typography fontWeight={600}>{text}</Typography>
    </Stack>
  );
};

export default function About() {
  const theme = useTheme();
  const { config, setConfig } = useConfig();

  useEffect(() => {
    const start = async () => {
      await ApiService.post('/metrics/get')
        .then(res => {
          setConfig((prev) => ({
            ...prev,
            metrics: [
              ...(prev.metrics || []), // Fallback para array vazio se metrics for undefined
              ...(res?.data ? res.data : []) // Adiciona somente se existir
            ]
          }));
        })
        .catch(err => {
          console.error(err);
        })
    };

    start();
  }, []);

  const goContact = (value) => {
    if (value) {
      if (value?.toString()?.includes('199')) {
        window.open(`https://wa.me/${value}`);
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Chip
        label="Sobre mim"
        color="error"
        sx={{
          alignSelf: 'flex-start',
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '0.75rem',
          px: 1,
          py: 0.5
        }}
      />
      <Grid container spacing={4} sx={{ mt: 4, display: 'flex', alignItems: 'start' }}>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography variant="h3" component="h1">
              Quem é {config?.name} ?
            </Typography>
            <Typography
              color="text.secondary"
              variant="body1"
              dangerouslySetInnerHTML={{ __html: config?.about || '' }}
            />
            <Button
              variant="outlined"
              color="error"
              size="large"
              css={`border-radius: 24px; padding: ${theme.spacing(1.5)} ${theme.spacing(4)};`}
              onClick={() => goContact(config?.contact)}
            >
              Entrar em contato&nbsp;<OpenInNewIcon />
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="feature image"
              sx={{
                borderRadius: 1,
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                boxShadow: 3
              }}
            />
          </Box>
          <Stack
            spacing={1}
            divider={
              <Divider sx={{ borderColor: theme.palette.divider }} />
            }
            mt={4}
          >
            {config?.metrics?.map((i, index) => (
              <Feature
                key={index}
                icon={i?.icon}
                iconBg={"transparent"}
                text={`+${i?.value} ${i?.name}`}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}