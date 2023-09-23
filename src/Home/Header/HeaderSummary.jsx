import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { findID } from '../../util';

function HeaderSummary({ images, texts }) {
  const idImageLogo = '649e0f0de59b27af2756c89d';
  const imgLogo = images.find(findID(idImageLogo));
  const idTextLogo = '649f8b8fe527c66bfbf3f850';
  const textLogo = texts.find(findID(idTextLogo));

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
          paddingLeft: 5,
          paddingRight: 5,
          display: 'flex',
        }}
      >
        <Grid item xs sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            component="img"
            src={imgLogo.src}
            alt={imgLogo.alt}
            sx={{
              m: 1, borderRadius: 1, width: 60, height: 60,
            }}
          />
          <Typography component="h1" variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            {textLogo.name}
          </Typography>
        </Grid>
        <Grid item sx={{ display: 'flex' }}>
          <List sx={{ display: 'flex' }}>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Start
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Products
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Brands
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <Typography component="h1" variant="h6">
                Stores
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography component="h1" variant="h6">
                  Admin
                </Typography>
              </ListItemText>
            </ListItem>
          </List>

        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderSummary;
