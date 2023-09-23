import React from 'react';
import {
  CircularProgress, Box, Typography, Stack,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Background from './Background/Background';
import { QUERY_MODULE } from '../../Operations/query';
import Slider from './Slider/Slider';
import Products from './Products/Products';

function InicioIndex() {
  const { loading, data } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64a4dbacb464c4051e9b4a73',
    },
  });
  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh',
      }}
      >
        <CircularProgress size={60} />
      </div>
    );
  }

  const images = data.findForModule.image;
  const texts = data.findForModule.text;

  return (
    <>
      <Box display="flex" alignItems="center">
        <ViewInArIcon sx={{ m: 2 }} />
        <Typography variant="h5" component="h1" id="inicio">Inicio</Typography>
      </Box>
      <Stack spacing={3}>
        <Background images={images} texts={texts} />
        <Slider images={images} texts={texts} />
        <Products images={images} texts={texts} />
      </Stack>
    </>
  );
}

export default InicioIndex;
