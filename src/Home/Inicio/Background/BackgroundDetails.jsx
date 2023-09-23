import React from 'react';
import { useMutation } from '@apollo/client'; import {
  findID, FormBox, FormImage, FormText, useForm,
} from '../../../util';
import { UPDATE_MODULE } from '../../Header/Mutation';

function BackgroundDetails({ images, texts }) {
  const imageBg = images.find(findID('649b166f083daa9c8af6e139'));
  const textBg = texts.find(findID('64a39756de4fc89914038f06'));
  const title = texts.find(findID('649f8b8fe527c66bfbf3f850'));

  const [refImageBg, gdImageBg] = useForm();
  const [refTextBg, gdTextBg] = useForm();
  const [refTitle, gdTitle] = useForm();

  const [editModule, { loading }] = useMutation(UPDATE_MODULE);

  const handleSubmit = (event) => {
    event.preventDefault();
    editModule({
      variables: {
        images: [gdImageBg()],
        texts: [gdTextBg(), gdTitle()],
      },
    });
  };

  if (loading) return 'Submitting...';

  return (
    <FormBox handleSubmit={handleSubmit} changes={false}>
      <FormImage
        ref={refImageBg}
        img={imageBg}
      />
      <FormText
        ref={refTextBg}
        text={textBg}
      />
      <FormText
        ref={refTitle}
        text={title}
      />
    </FormBox>
  );
}

export default BackgroundDetails;
