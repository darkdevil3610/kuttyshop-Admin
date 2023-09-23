import React from 'react';
import { useMutation } from '@apollo/client';
import {
  FormBox, FormImage, FormText, findID, useForm,
} from '../../../util';
import { UPDATE_MODULE } from '../../Header/Mutation';

function CatalogoForm({ images, texts }) {
  const img1 = images.find(findID('64b4969ff62ec34fb6e17e05'));
  const img2 = images.find(findID('64b496b2f62ec34fb6e17e07'));
  const img3 = images.find(findID('64b496ddf62ec34fb6e17e09'));
  const img4 = images.find(findID('64b496faf62ec34fb6e17e0b'));
  const img5 = images.find(findID('64b49710f62ec34fb6e17e0d'));
  const img6 = images.find(findID('64b49728f62ec34fb6e17e0f'));

  const txt1 = texts.find(findID('64b495e0f62ec34fb6e17df9'));
  const txt2 = texts.find(findID('64b49608f62ec34fb6e17dfb'));
  const txt3 = texts.find(findID('64b49620f62ec34fb6e17dfd'));
  const txt4 = texts.find(findID('64b49635f62ec34fb6e17dff'));
  const txt5 = texts.find(findID('64b49648f62ec34fb6e17e01'));
  const txt6 = texts.find(findID('64b4965bf62ec34fb6e17e03'));

  const [refImg1, gdImg1] = useForm();
  const [refImg2, gdImg2] = useForm();
  const [refImg3, gdImg3] = useForm();
  const [refImg4, gdImg4] = useForm();
  const [refImg5, gdImg5] = useForm();
  const [refImg6, gdImg6] = useForm();

  const [refTxt1, gdTxt1] = useForm();
  const [refTxt2, gdTxt2] = useForm();
  const [refTxt3, gdTxt3] = useForm();
  const [refTxt4, gdTxt4] = useForm();
  const [refTxt5, gdTxt5] = useForm();
  const [refTxt6, gdTxt6] = useForm();

  const [editModule, { loading, error }] = useMutation(UPDATE_MODULE);

  if (loading) return 'Submitting...';
  if (error) { return `Submission error! ${error.message}`; }

  const handleSubmit = (e) => {
    e.preventDefault();
    editModule({
      variables: {
        images: [gdImg1(), gdImg2(), gdImg3(), gdImg4(), gdImg5(), gdImg6()],
        texts: [gdTxt1(), gdTxt2(), gdTxt3(), gdTxt4(), gdTxt5(), gdTxt6()],
      },
    });
  };

  return (
    <FormBox handleSubmit={handleSubmit} changes={false}>
      <FormImage
        img={img1}
        ref={refImg1}
      />
      <FormText
        text={txt1}
        ref={refTxt1}
      />

      <FormImage
        img={img2}
        ref={refImg2}
      />
      <FormText
        text={txt2}
        ref={refTxt2}
      />

      <FormImage
        img={img3}
        ref={refImg3}
      />
      <FormText
        text={txt3}
        ref={refTxt3}
      />

      <FormImage
        img={img4}
        ref={refImg4}
      />
      <FormText
        text={txt4}
        ref={refTxt4}
      />

      <FormImage
        img={img5}
        ref={refImg5}
      />
      <FormText
        text={txt5}
        ref={refTxt5}
      />

      <FormImage
        img={img6}
        ref={refImg6}
      />
      <FormText
        text={txt6}
        ref={refTxt6}
      />
    </FormBox>
  );
}

export default CatalogoForm;
