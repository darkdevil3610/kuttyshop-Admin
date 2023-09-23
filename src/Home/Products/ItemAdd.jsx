import React from 'react';
import { useMutation } from '@apollo/client';
import Typography from '@mui/material/Typography';
import { FormBox, FormItem, useForm } from '../../util';
import { CREATE_ITEM } from '../../Operations/mutation';

function ItemAdd() {
  const [createItem, { loading, error }] = useMutation(CREATE_ITEM);
  const [refForm, gdForm] = useForm();

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const hangleSubmit = (e) => {
    e.preventDefault();
    createItem({
      variables: gdForm(),
    });
  };

  return (
    <>
      <Typography fontWeight="bold" fontSize="2rem">
        Add Item
      </Typography>
      <FormBox
        handleSubmit={hangleSubmit}
      >
        <FormItem
          ref={refForm}
        />
      </FormBox>
    </>
  );
}

export default ItemAdd;
