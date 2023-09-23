import { gql } from '@apollo/client';

export const UPDATE_MODULE = gql`
mutation(
  $editImageId: String!,
  $src: String!,
  $alt: String!,
  $editTextId: String!,
  $name: String!,
  $description: String,
  $srcMobile: String,
  $imgLink: String,
  $textLink: String
  ){
  editImage(
    id: $editImageId,
    src: $src,
    alt: $alt,
    srcMobile: $srcMobile
    link: $imgLink
  ) {
    src
    id
    alt
  }
  editText(
    id: $editTextId,
    name: $name,
    description: $description,
    link: $textLink
    ) {
    name
    id
    description
  }
}
`;
