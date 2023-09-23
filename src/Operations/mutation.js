import { gql } from '@apollo/client';

export const LOGIN_ADMIN = gql`
  mutation($username: String!, $password: String!) {
    loginAdmin(username: $username, password: $password) {
      value
    }
  }
`;

export const EDIT_ITEM = gql`
mutation($id: String!, $name: String!, $cost: Int!, $src: String!, $stock: Int!, $description: String!, $brand: String!) {
  editItem(id: $id, name: $name, cost: $cost, src: $src, stock: $stock, description: $description, brand: $brand) {
    brand
    description
    id
    name
    src
    stock
    cost
  }
}
`;

export const CREATE_ITEM = gql`
mutation($cost: Int!, $src: String!, $stock: Int!, $name: String!, $description: String!, $brand: String!){
  createItem(, cost: $cost, src: $src, stock: $stock, name: $name, description: $description, brand: $brand) {
    brand
    description
    id
    name
    src
    stock
    cost
  }
}
`;

export const REMOVE_ITEM = gql`
mutation($id: String!) {
  removeItem(id: $id)
}
`;

export const UPDATE_SHOP = gql`
mutation EditShop($shops: [ShopInput]) {
  editShop(shops: $shops) {
    city
    name
    direcction
    phone
    workingHours
    email
    src
    id
  }
}
`;

export const UPDATE_BRAND = gql`
mutation EditShop($brands: [BrandInput]) {
  editBrand(brands: $brands) {
    src
    name
    id
  }
}
`;
