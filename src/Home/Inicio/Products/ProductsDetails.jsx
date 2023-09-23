import React from 'react';
import { useMutation } from '@apollo/client';
import Divider from '@mui/material/Divider';
import {
  FormBox, FormImage, FormText, findID, useForm,
} from '../../../util';
import { UPDATE_MODULE } from '../../Header/Mutation';

function ProductDetails({ images, texts }) {
  const img1 = images.find(findID('64b2ed9fabfda49049469e36'));
  const img2 = images.find(findID('64b2edb8abfda49049469e38'));
  const img3 = images.find(findID('64b2edcbabfda49049469e3a'));

  const txt1 = texts.find(findID('64b2ed41abfda49049469e34'));
  const txt2 = texts.find(findID('64b2edeeabfda49049469e3c'));
  const txt3 = texts.find(findID('64b2ee14abfda49049469e3e'));

  const [refImg1, gdImg1] = useForm();
  const [refImg2, gdImg2] = useForm();
  const [refImg3, gdImg3] = useForm();

  const [refText1, gdText1] = useForm();
  const [refText2, gdText2] = useForm();
  const [refText3, gdText3] = useForm();

  const [editModule, { loading, error }] = useMutation(UPDATE_MODULE);

  const handleSubmit = (e) => {
    e.preventDefault();
    editModule({
      variables: {
        images: [gdImg1(), gdImg2(), gdImg3()],
        texts: [gdText1(), gdText2(), gdText3()],
      },
    });
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <FormBox handleSubmit={handleSubmit} changes={false}>
      <FormImage
        ref={refImg1}
        img={img1}
      />
      <Divider />
      <FormText
        ref={refText1}
        text={txt1}
      />
      <Divider />
      <FormImage
        ref={refImg2}
        img={img2}
      />
      <Divider />
      <FormText
        ref={refText2}
        text={txt2}
      />
      <FormImage
        ref={refImg3}
        img={img3}
      />
      <FormText
        ref={refText3}
        text={txt3}
      />
    </FormBox>
  );
}

export default ProductDetails;
