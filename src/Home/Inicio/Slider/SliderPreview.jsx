import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, Stack } from '@mui/material';
import { findID } from '../../../util';

function SliderPreview({ images }) {
  const slide1 = images.find(findID('64adde3530e42997de6acbfc'));
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
    >
      <Grid
        container
        maxWidth="lg"
        sx={{
          m: 2,
          borderRadius: 1,
          border: 1,
          width: '100%',
          display: 'flex',
        }}
      >
        <Grid item xs={12} sx={{ overflow: 'hidden', position: 'relative' }}>
          <Box
            component="img"
            src={slide1.src}
            alt={slide1.alt}
            width="100%"
          />
          <IconButton
            aria-label="nextImage"
            size="large"
            sx={{ position: 'absolute', top: '45%', left: '3%' }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            aria-label="nextImage"
            size="large"
            sx={{ position: 'absolute', top: '45%', left: '92%' }}
          >
            <ArrowBackIosNewIcon sx={{ transform: 'rotate(180deg)' }} />
          </IconButton>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ position: 'absolute', bottom: '5%', left: '48%' }}
          >
            <Box
              component="div"
              sx={{
                width: 10, height: 10, borderRadius: '50%', bgcolor: 'rgba(90, 90, 90, 0.452)',
              }}
            />
            <Box
              component="div"
              sx={{
                width: 10, height: 10, borderRadius: '50%', bgcolor: 'rgba(90, 90, 90, 0.452)',
              }}
            />
            <Box
              component="div"
              sx={{
                width: 10, height: 10, borderRadius: '50%', bgcolor: 'rgba(90, 90, 90, 0.452)',
              }}
            />
            <Box
              component="div"
              sx={{
                width: 10, height: 10, borderRadius: '50%', bgcolor: 'rgba(90, 90, 90, 0.452)',
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SliderPreview;
