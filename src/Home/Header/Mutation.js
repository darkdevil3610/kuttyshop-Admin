/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const UPDATE_MODULE = gql`
mutation EditModule($images: [ImageInput], $texts: [TextInput]) {
  editModule(images: $images, texts: $texts) {
    image {
      src
      alt
      id
    }
    text {
      description
      name
      id
    }
  }
}
`;
