import { gql } from '@apollo/client';

export const QUERY_STATIC_IMAGE = gql`
query findById($ID: ID!) {
  findSingleImage(id: $ID) {
    src
    alt
    link
    id
  }
}
`;

export const QUERY_MODULE = gql`
  query($id: String!){
    findForModule(id: $id) {
      image {
        id
        src
        alt
        srcMobile
        id
      }
      text {
        name
        id
        description
        id
      }
    }
  }
`;

export const QUERY_ONE_ITEM = gql`
query($id: String!) {
  findItemById(id: $id) {
    name
    src
    id
    cost
    brand
    description
    stock
    tags
  }
}
`;

export const QUERY_BRANDS = gql`
query{
  findBrands {
    id
    name
    src
  }
}
`;

export const QUERY_SHOPS = gql`
{
  findShops {
    name
    city
    src
    direcction
    email
    phone
    workingHours
    id
  }
}
`;

export const QUERY_ADMINDATA = gql`
{
  findAdminData {
    username
    id
  }
}
`;
