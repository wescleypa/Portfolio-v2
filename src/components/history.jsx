'use client'
import {
  Box,
  Typography,
  Container,
  Stack
} from '@mui/material';
import React, { useEffect } from 'react';
import ApiService from '../services/request';
import Article from './components/article';
import { useConfig } from '../contexts/config';
import TitleSection from './components/titleSection';

export default function History() {
  const { config, setConfig } = useConfig();

  useEffect(() => {
    const start = async () => {
      await ApiService.post('/history/get')
        .then(res => {
          setConfig((prev) => {
            const newState = {
              ...prev,
              history: [
                ...(prev.history || []),
                ...(Array.isArray(res?.data) ? res.data : [])
              ]
            };

            return newState;
          });
        })
        .catch(err => {
          console.error(err);
        })
    };

    start();
  }, []);

  return (
    <Container maxWidth="lg">
      <Stack
        component={Box}
        textAlign="center"
        py={5}
      >
        <TitleSection title1={'Minha'} title2={'história'} />

        {config?.history?.map((i, index) => (
          <React.Fragment key={index}>
            <Article title={i?.title} description={i?.description} image={i?.image} index={index} />
          </React.Fragment>
        ))}

      </Stack>
    </Container>
  );
}