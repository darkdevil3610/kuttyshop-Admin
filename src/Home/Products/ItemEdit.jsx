import React from 'react';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import { FormBox, FormItem, useForm } from '../../util';
import QueryId from './QueryId';
import { EDIT_ITEM } from '../../Operations/mutation';

function ItemEdit({
  id, item, setId, setItem,
}) {
  const [edit, { loading, error }] = useMutation(EDIT_ITEM);
  const [refItem, gdItem] = useForm();

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...gdItem(),
      id,
    });
    edit({
      variables: {
        ...gdItem(),
        id,
      },
    });
  };

  return (
    <>
      <Typography fontWeight="bold" fontSize="2rem">
        Edit Item
      </Typography>
      <QueryId id={id} setId={setId} setItem={setItem} />
      <FormBox
        handleSubmit={handleSubmit}
      >
        <FormItem
          ref={refItem}
          edit={!!item?.name}
          item={item}
        />
      </FormBox>
    </>
  );
}

export default ItemEdit;
