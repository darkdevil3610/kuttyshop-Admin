import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useMutation, useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { QUERY_BRANDS } from '../../Operations/query';
import {
  FormBox, FormBrand, findID, useForm,
} from '../../util';
import { UPDATE_BRAND } from '../../Operations/mutation';

function Brands() {
  const { loading, data } = useQuery(QUERY_BRANDS);
  const [editBrand] = useMutation(UPDATE_BRAND);

  const [refBrand1, gdBrand1] = useForm();
  const [refBrand2, gdBrand2] = useForm();
  const [refBrand3, gdBrand3] = useForm();
  const [refBrand4, gdBrand4] = useForm();
  const [refBrand5, gdBrand5] = useForm();
  const [refBrand6, gdBrand6] = useForm();

  if (loading) return <p>Loading...</p>;

  const brand1 = data.findBrands.find(findID('64c2c0b05694f7a35317619a'));
  const brand2 = data.findBrands.find(findID('64c2c0b25694f7a35317619d'));
  const brand3 = data.findBrands.find(findID('64c2c0b25694f7a35317619f'));
  const brand4 = data.findBrands.find(findID('64c2c0b35694f7a3531761a1'));
  const brand5 = data.findBrands.find(findID('64c2c0b35694f7a3531761a5'));
  const brand6 = data.findBrands.find(findID('64c2c0b35694f7a3531761a7'));

  const handleSubmit = (e) => {
    e.preventDefault();
    editBrand({
      variables: {
        brands: [gdBrand1(), gdBrand2(), gdBrand3(), gdBrand4(), gdBrand5(), gdBrand6()],
      },
    });
  };
  return (
    <>
      <Box display="flex" alignItems="center">
        <ViewInArIcon sx={{ m: 2 }} />
        <Typography variant="h5" component="h1" id="marcas">Marcas</Typography>
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
              Marcas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormBox
              handleSubmit={handleSubmit}
            >
              <FormBrand
                ref={refBrand1}
                brand={brand1}
              />
              <FormBrand
                ref={refBrand2}
                brand={brand2}
              />
              <FormBrand
                ref={refBrand3}
                brand={brand3}
              />
              <FormBrand
                ref={refBrand4}
                brand={brand4}
              />
              <FormBrand
                ref={refBrand5}
                brand={brand5}
              />
              <FormBrand
                ref={refBrand6}
                brand={brand6}
              />
            </FormBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Brands;
