import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLazyQuery } from '@apollo/client';
import { QUERY_ONE_ITEM } from '../../Operations/query';

function QueryId({ id, setId, setItem }) {
  const [queryId, { loading, data }] = useLazyQuery(QUERY_ONE_ITEM);

  useEffect(() => {
    if (!loading && data?.findItemById) {
      setItem(data.findItemById);
    }
  }, [loading, data]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={9.6}>
        <TextField
          margin="normal"
          fullWidth
          id="id"
          label="Id"
          name="id"
          multiline
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>
      <Grid item xs={2} display="flex" alignItems="center">
        <Button
          type="button"
          onClick={() => queryId({
            variables: {
              id,
            },
          })}
          fullWidth
          variant="contained"
        >
          <Typography component="h1" variant="h6" color="white">
            Preview
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default QueryId;
