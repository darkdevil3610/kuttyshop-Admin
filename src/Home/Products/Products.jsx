import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Typography from '@mui/material/Typography';
import Item from './Item/Item';
import ItemAdd from './ItemAdd';
import ItemEdit from './ItemEdit';
import ItemRemove from './ItemRemove';

function Products() {
  const [id, setId] = useState('');
  const [item, setItem] = useState({});

  // const [editItem] = useMutation();

  return (
    <>
      <Box display="flex" alignItems="center">
        <ViewInArIcon sx={{ m: 2 }} />
        <Typography variant="h5" component="h1" id="products">Products</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bgcolor: 'white',
      }}
      >
        <Grid
          container
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
              Products
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Item
              name={item.name || 'Readdragon Fizz Pro'}
              src={item.src || 'https://redragon.es/content/uploads/2021/04/INVADER.png'}
              brand={item.brand || 'redragon'}
              cost={item.cost || '1200'}
              id={item.id || '1231231231'}
            />
          </Grid>
          <Grid item xs={9}>
            <ItemAdd />

            <hr style={{ margin: '20px', visibility: 'hidden' }} />

            <ItemEdit id={id} item={item} setId={setId} setItem={setItem} />

            <hr style={{ margin: '20px', visibility: 'hidden' }} />

            <ItemRemove />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Products;
