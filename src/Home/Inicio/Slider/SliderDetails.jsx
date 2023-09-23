import React from 'react';
import { useMutation } from '@apollo/client';
import {
  FormBox, FormImage, findID, useForm,
} from '../../../util';
import { UPDATE_MODULE } from '../../Header/Mutation';

function SliderDetails({ images }) {
  const slide1 = images.find(findID('64adde3530e42997de6acbfc'));
  const slide2 = images.find(findID('64addd5330e42997de6acbf8'));
  const slide3 = images.find(findID('64adde7e30e42997de6acbfe'));
  const slide4 = images.find(findID('64addeff30e42997de6acc00'));
  const slide5 = images.find(findID('64addf4e30e42997de6acc02'));

  const [editModule, { loading }] = useMutation(UPDATE_MODULE);

  const [refSlide1, gdSlide1] = useForm();
  const [refSlide2, gdSlide2] = useForm();
  const [refSlide3, gdSlide3] = useForm();
  const [refSlide4, gdSlide4] = useForm();
  const [refSlide5, gdSlide5] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    editModule({
      variables: {
        images: [gdSlide1(), gdSlide2(), gdSlide3(), gdSlide4(), gdSlide5()],
        texts: [],
      },
    });
  };

  if (loading) return 'Submitting...';

  return (
    <FormBox handleSubmit={handleSubmit} changes={false}>
      <FormImage
        ref={refSlide1}
        img={slide1}
      />
      <FormImage
        ref={refSlide2}
        img={slide2}
      />
      <FormImage
        ref={refSlide3}
        img={slide3}
      />
      <FormImage
        ref={refSlide4}
        img={slide4}
      />
      <FormImage
        ref={refSlide5}
        img={slide5}
      />
    </FormBox>
  );
}

export default SliderDetails;
