import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';
import { FormBox } from '../../util';
import { REMOVE_ITEM } from '../../Operations/mutation';

function ItemRemove() {
  const [id, setId] = useState('');
  const [removeItem] = useMutation(REMOVE_ITEM);
  const handleSubmit = (e) => {
    e.preventDefault();
    removeItem({
      variables: { id },
    });
    setId('');
  };
  return (
    <>
      <Typography fontWeight="bold" fontSize="2rem">
        Remove Item
      </Typography>
      <FormBox
        handleSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          fullWidth
          required
          id="id"
          label="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </FormBox>
    </>
  );
}

export default ItemRemove;
