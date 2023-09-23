import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, Box, CircularProgress, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useQuery } from '@apollo/client';
import HeatherSummary from './HeaderSummary';
import HeatherDetails from './HeaderDetails';
import { QUERY_MODULE } from '../../Operations/query';

function HeaderIndex() {
  const { loading, data } = useQuery(QUERY_MODULE, {
    variables: {
      id: '64a4ced84c622ac3d7588672',
    },
  });
  const [subAcor1, setSubAcor1] = useState(false);

  const suBHangleChange = () => {
    setSubAcor1((n) => !n);
  };
  return (
    <>
      <Box display="flex" alignItems="center">
        <ViewInArIcon sx={{ m: 2 }} />
        <Typography variant="h5" component="h1" id="header">Header</Typography>
      </Box>
      <Accordion
        expanded={subAcor1}
        onChange={suBHangleChange}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          {loading
            ? <CircularProgress />
            : (
              <HeatherSummary
                images={data.findForModule.image}
                texts={data.findForModule.text}
              />
            )}
        </AccordionSummary>
        <AccordionDetails>
          {loading
            ? <CircularProgress />
            : (
              <HeatherDetails
                images={data.findForModule.image}
                texts={data.findForModule.text}
              />
            )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default HeaderIndex;
