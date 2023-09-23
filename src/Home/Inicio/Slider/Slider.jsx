import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useToggle } from '../../../util';
import SliderPreview from './SliderPreview';
import SliderDetails from './SliderDetails';

function Slider({ images }) {
  const { open, handleChange } = useToggle();
  return (
    <Accordion expanded={open} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <SliderPreview images={images} />
      </AccordionSummary>
      <AccordionDetails>
        <SliderDetails images={images} />
      </AccordionDetails>
    </Accordion>
  );
}

export default Slider;
