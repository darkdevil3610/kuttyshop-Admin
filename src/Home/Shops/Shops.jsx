import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { useMutation, useQuery } from '@apollo/client';
import {
  FormBox, FormShop, findID, useForm,
} from '../../util';
import { QUERY_SHOPS } from '../../Operations/query';
import { UPDATE_SHOP } from '../../Operations/mutation';

function Shops() {
  const { loading, data } = useQuery(QUERY_SHOPS);
  const [editShop] = useMutation(UPDATE_SHOP);

  const [refShop1, gdShop1] = useForm();
  const [refShop2, gdShop2] = useForm();
  const [refShop3, gdShop3] = useForm();
  const [refShop4, gdShop4] = useForm();
  const [refShop5, gdShop5] = useForm();
  const [refShop6, gdShop6] = useForm();

  if (loading) return 'Submitting...';

  const shop1 = data.findShops.find(findID('64c49ac3287f7a22bec4bcaa'));
  const shop2 = data.findShops.find(findID('64c49ac5287f7a22bec4bcad'));
  const shop3 = data.findShops.find(findID('64c49b056933386e5942adbf'));
  const shop4 = data.findShops.find(findID('64c49b25ffe3fd0302ee58fe'));
  const shop5 = data.findShops.find(findID('64c49b25ffe3fd0302ee5902'));
  const shop6 = data.findShops.find(findID('64c49b25ffe3fd0302ee5904'));

  const handleSubmit = (e) => {
    e.preventDefault();
    editShop({
      variables: {
        shops: [gdShop1(), gdShop2(), gdShop3(), gdShop4(), gdShop5(), gdShop6()],
      },
    });
  };

  return (
    <>
      <Box display="flex" alignItems="center">
        <ViewInArIcon sx={{ m: 2 }} />
        <Typography variant="h5" component="h1" id="tiendas">Tiendas</Typography>
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
              Tiendas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormBox
              handleSubmit={handleSubmit}
            >
              <FormShop
                ref={refShop1}
                shop={shop1}
              />
              <FormShop
                ref={refShop2}
                shop={shop2}
              />
              <FormShop
                ref={refShop3}
                shop={shop3}
              />
              <FormShop
                ref={refShop4}
                shop={shop4}
              />
              <FormShop
                ref={refShop5}
                shop={shop5}
              />
              <FormShop
                ref={refShop6}
                shop={shop6}
              />
            </FormBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Shops;
