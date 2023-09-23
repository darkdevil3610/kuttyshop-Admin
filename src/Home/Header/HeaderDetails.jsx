/* eslint-disable no-restricted-syntax */
import React from 'react';
import { useMutation } from '@apollo/client';
import {
  findID, FormImage, FormText, FormBox, useForm,
} from '../../util';
import { UPDATE_MODULE } from './Mutation';

function HeaderDetails({ images, texts }) {
  const imgLogo = images.find(findID('649e0f0de59b27af2756c89d'));
  const textLogo = texts.find(findID('649f8b8fe527c66bfbf3f850'));

  const [refImgLogo, gdImageLogo] = useForm();
  const [refTextLogo, gdTextLogo] = useForm();
  /*
  const [src, setSrc] = useState(imgLogo.src);
  const [alt, setAlt] = useState(imgLogo.alt);
  const [srcMobile, setSrcMobile] = useState(imgLogo.srcMobile);
  const [imgLink, setImgLink] = useState(imgLogo.link);

  const [name, setName] = useState(textLogo.name);
  const [description, setDescription] = useState(textLogo.description);
  const [textLink, setTextLink] = useState(textLogo.link);

  useEffect(() => {
    if (src !== imgLogo.src
      || alt !== imgLogo.alt
      || srcMobile !== imgLogo.srcMobile
      || imgLink !== imgLogo.link
      || name !== textLogo.name
      || description !== textLogo.description
      || textLink !== textLogo.link
    ) {
      setChanges(false);
    } else {
      setChanges(true);
    }
  }, [src, alt, srcMobile, imgLink, name, description, textLink]);
*/
  const [editModule, { loading }] = useMutation(UPDATE_MODULE);

  const handleSubmit = (event) => {
    event.preventDefault();
    editModule({
      variables: {
        images: [gdImageLogo()],
        texts: [gdTextLogo()],
      },
    });
    /*
    updateModule({
      variables: {
        editImageId: idImageLogo,
        src,
        alt,
        srcMobile,
        imgLink,
        editTextId: idTextLogo,
        name,
        description,
        textLink,
      },
    }); */
  };

  if (loading) return 'Submitting...';

  return (
    <FormBox handleSubmit={handleSubmit} changes={false}>
      <FormImage
        ref={refImgLogo}
        img={imgLogo}
      />
      <FormText
        ref={refTextLogo}
        text={textLogo}
      />
    </FormBox>
  );
}

export default HeaderDetails;
