import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
  Typography, Card, CardContent,
} from '@mui/material';
import { ImgRatio, findID } from '../../../util';

function ProductPreview({ images, texts }) {
  const img1 = images.find(findID('64b2ed9fabfda49049469e36'));
  const img2 = images.find(findID('64b2edb8abfda49049469e38'));
  const img3 = images.find(findID('64b2edcbabfda49049469e3a'));

  const txt1 = texts.find(findID('64b2ed41abfda49049469e34'));
  const txt2 = texts.find(findID('64b2edeeabfda49049469e3c'));
  const txt3 = texts.find(findID('64b2ee14abfda49049469e3e'));

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
            Products Top
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4', height: '100%' }}>
            <CardContent>
              <Box
                component="img"
                src={img1.src}
                alt={img1.alt}
                sx={{
                  m: 1, borderRadius: 1, width: '100%',
                }}
              />
              <Typography sx={{ fontSize: '1.5rem', mb: 3 }} color="text.primary" fontWeight="bold" textAlign="center">
                {txt1.name}
              </Typography>
              <Typography component="div" textAlign="center" color="text.secondary" fontSize="0.8rem">
                {txt1.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={4}
          >
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4' }}>
                <CardContent>
                  <Grid container columnSpacing={2}>
                    <Grid item xs={5}>
                      <ImgRatio
                        aspectRatio={4 / 3}
                        src={img2.src}
                        alt={img2.alt}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={7}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        sx={{ fontSize: '1.5rem', mb: 3 }}
                        color="text.primary"
                        fontWeight="bold"
                        textAlign="center"
                      >
                        {txt2.name}
                      </Typography>
                      <Typography
                        component="div"
                        textAlign="center"
                        color="text.secondary"
                        fontSize="0.8rem"
                      >
                        {txt2.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 6, bgcolor: '#f4f4f4' }}>
                <CardContent>
                  <Grid container columnSpacing={2}>
                    <Grid item xs={5}>
                      <ImgRatio
                        aspectRatio={4 / 3}
                        src={img3.src}
                        alt={img3.alt}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={7}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        sx={{ fontSize: '1.5rem', mb: 3 }}
                        color="text.primary"
                        fontWeight="bold"
                        textAlign="center"
                      >
                        {txt3.name}
                      </Typography>
                      <Typography
                        component="div"
                        textAlign="center"
                        color="text.secondary"
                        fontSize="0.8rem"
                      >
                        {txt3.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductPreview;
