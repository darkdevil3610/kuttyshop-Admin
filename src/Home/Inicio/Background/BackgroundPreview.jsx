/* eslint-disable react/no-array-index-key */
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { findID } from '../../../util';

function BackgroundPreview({ images, texts }) {
  const imageBg = images.find(findID('649b166f083daa9c8af6e139'));
  const textBg = texts.find(findID('64a39756de4fc89914038f06'));
  const title = texts.find(findID('649f8b8fe527c66bfbf3f850'));
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
        <Grid item xs={6} overflow="hidden" sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={imageBg.src}
            alt={imageBg.alt}
            sx={{
              m: 0,
              width: '150%',
              marginLeft: '-25%',
              height: 400,
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Box
            component="div"
            sx={{
              width: '20%',
              height: '100%',
              background: 'linear-gradient(90deg, rgba(255, 125, 0, 0), #f5f5f5)',
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Typography sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '80%',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
          >
            {textBg.description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
            {title.name.toUpperCase().split('').map((letter, n) => <span key={`649b166f083daa9c8af6e139${n}`}>{letter}</span>)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BackgroundPreview;
