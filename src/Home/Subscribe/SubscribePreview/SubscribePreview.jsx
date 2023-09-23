import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Stack, Typography } from '@mui/material';
import { ImgRatio, findID } from '../../../util';

function SubscribePreview({ images, texts }) {
  const imageBg = images.find(findID('64b358146a48bf84a89365e0'));
  const text = texts.find(findID('64b357e76a48bf84a89365de'));

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
        <Grid item xs={6} bgcolor="#f5f5f5">
          <Stack p={7} spacing={3}>
            <Typography textAlign="center" fontWeight="bold" fontSize="1.3rem">
              {text.name.toUpperCase()}
            </Typography>
            <Grid container>
              <Grid item xs={10}>
                <Box
                  component="div"
                  sx={{
                    borderRadius: 6, boxShadow: '0 0 8px rgb(0 0 0 / 25%)', bgcolor: 'white', p: 1.6,
                  }}
                >
                  <Typography color="gray">
                    example@gmail.com
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="div"
                  sx={{
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgb(0 0 0 / 25%)',
                    bgcolor: 'white',
                    height: 50,
                    width: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ArrowForwardIcon />
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ position: 'relative' }}>
          <ImgRatio
            src={imageBg.src}
            alt={imageBg.alt}
            aspectRatio={5 / 2}
            h={300}
          />
          <Box
            component="div"
            sx={{
              width: '20%',
              height: '100%',
              background: 'linear-gradient(270deg, rgba(255, 125, 0, 0), #f5f5f5)',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </Grid>

      </Grid>
    </Box>
  );
}

export default SubscribePreview;
