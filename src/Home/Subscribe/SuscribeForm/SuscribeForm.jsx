import React from 'react';
import { useMutation } from '@apollo/client';
import {
  FormBox, FormImage, FormText, findID, useForm,
} from '../../../util';
import { UPDATE_MODULE } from '../../Header/Mutation';

function SubscribeForm({ images, texts }) {
  const imageBg = images.find(findID('64b358146a48bf84a89365e0'));
  const text = texts.find(findID('64b357e76a48bf84a89365de'));

  const [refImageBg, gdImageBg] = useForm();
  const [refText, gdText] = useForm();

  const [editModule, { loading, error }] = useMutation(UPDATE_MODULE);

  if (loading) return 'Submitting...';
  if (error) { return `Submission error! ${error.message}`; }

  const handleSubmit = (e) => {
    e.preventDefault();
    editModule({
      variables: {
        images: [gdImageBg()],
        text: [gdText()],
      },
    });
  };

  return (
    <FormBox handleSubmit={handleSubmit} changes={false}>
      <FormImage
        ref={refImageBg}
        img={imageBg}
      />
      <FormText
        ref={refText}
        text={text}
      />
    </FormBox>
  );
}

export default SubscribeForm;
