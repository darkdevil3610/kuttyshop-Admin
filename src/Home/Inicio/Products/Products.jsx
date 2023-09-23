import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useToggle } from '../../../util';
import ProductPreview from './ProductsPreview';
import ProductDetails from './ProductsDetails';

function Products({ images, texts }) {
  const { open, handleChange } = useToggle();

  return (
    <Accordion expanded={open} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ProductPreview images={images} texts={texts} />
      </AccordionSummary>
      <AccordionDetails>
        <ProductDetails images={images} texts={texts} />
      </AccordionDetails>
    </Accordion>
  );
}

export default Products;
