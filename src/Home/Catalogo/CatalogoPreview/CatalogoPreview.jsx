import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/material';
import { ImgRatio, findID } from '../../../util';

function CatalogoPreview({ images, texts }) {
  const img1 = images.find(findID('64b4969ff62ec34fb6e17e05'));
  const img2 = images.find(findID('64b496b2f62ec34fb6e17e07'));
  const img3 = images.find(findID('64b496ddf62ec34fb6e17e09'));
  const img4 = images.find(findID('64b496faf62ec34fb6e17e0b'));
  const img5 = images.find(findID('64b49710f62ec34fb6e17e0d'));
  const img6 = images.find(findID('64b49728f62ec34fb6e17e0f'));

  const txt1 = texts.find(findID('64b495e0f62ec34fb6e17df9'));
  const txt2 = texts.find(findID('64b49608f62ec34fb6e17dfb'));
  const txt3 = texts.find(findID('64b49620f62ec34fb6e17dfd'));
  const txt4 = texts.find(findID('64b49635f62ec34fb6e17dff'));
  const txt5 = texts.find(findID('64b49648f62ec34fb6e17e01'));
  const txt6 = texts.find(findID('64b4965bf62ec34fb6e17e03'));
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
          p: 3,
        }}
        rowSpacing={4}
        columnSpacing={4}
      >
        <Grid item xs={12}>
          <Typography textAlign="center" fontWeight="bold" fontSize="3rem">
            Catalogo
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4', maxHeight: '330px' }}>
            <CardContent sx={{ m: 3, mb: 0, mt: 0 }}>
              <Grid container>
                <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography
                    sx={{ fontSize: '1.8rem', mb: 3 }}
                    color="text.primary"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    {txt1.name}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <ImgRatio
                    src={img1.src}
                    alt={img1.alt}
                    aspectRatio={3 / 4}
                  />
                </Grid>

              </Grid>

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4', maxHeight: '330px' }}>
            <CardContent sx={{ m: 2 }}>
              <Stack spacing={3} alignItems="center">
                <Box sx={{
                  width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <ImgRatio
                    src={img2.src}
                    alt={img2.alt}
                    aspectRatio={1}
                  />
                </Box>
                <Typography sx={{ fontSize: '1.8rem', mb: 3 }} color="text.primary" fontWeight="bold" textAlign="center">
                  {txt2.name}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4', maxHeight: '390px' }}>
            <CardContent>
              <Grid container>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '1.8rem', mb: 3 }} color="text.primary" fontWeight="bold" textAlign="center">
                    {txt3.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box m="-20px">
                    <ImgRatio
                      src={img3.src}
                      alt={img3.alt}
                      aspectRatio={21 / 9}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4', maxHeight: '390px' }}>
            <CardContent sx={{ m: 1 }}>
              <Stack spacing={3} alignItems="center">
                <Box sx={{
                  width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <ImgRatio
                    src={img4.src}
                    alt={img4.alt}
                    aspectRatio={1}
                  />
                </Box>
                <Typography sx={{ fontSize: '1.8rem', mb: 3 }} color="text.primary" fontWeight="bold" textAlign="center">
                  {txt4.name}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4', maxHeight: '390px' }}>
            <CardContent sx={{ m: 1 }}>
              <Stack spacing={3} alignItems="center">
                <Box sx={{
                  width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <ImgRatio
                    src={img5.src}
                    alt={img5.alt}
                    aspectRatio={1}
                  />
                </Box>
                <Typography sx={{ fontSize: '1.8rem', mb: 3 }} color="text.primary" fontWeight="bold" textAlign="center">
                  {txt5.name}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4', maxHeight: '390px' }}>
            <CardContent sx={{ m: 1 }}>
              <Stack spacing={3} alignItems="center">
                <Box sx={{
                  width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <ImgRatio
                    src={img6.src}
                    alt={img6.alt}
                    aspectRatio={1}
                  />
                </Box>
                <Typography sx={{ fontSize: '1.8rem', mb: 3 }} color="text.primary" fontWeight="bold" textAlign="center">
                  {txt6.name}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CatalogoPreview;
