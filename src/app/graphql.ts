import { UserRegistration } from './interfaces/registration';
import gql from 'graphql-tag';
// 1
export const CREATE_USER_MUTATION = gql`
# 2
  mutation UserRegistrationMutation($firstName: String!, $lastName: String!,
  $email: String!, $businessAddress: String!, $homeAddress: String!,
  $gender: String!, $state: String!, $lga: String!, $loanCategory: String!,
  $pin: String!, $status: String!, $loanStatus: String!, $phone: String!, $password: String!, $passwordString: String!) {
    createUser(
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      businessAddress: $businessAddress,
      homeAddress: $homeAddress,
      gender: $gender,
      state: $state,
      lga: $lga,
      loanCategory: $loanCategory,
      pin: $pin,
      status: $status,
      loanStatus: $loanStatus,
      phone: $phone,
      password: $password,
      passwordString: $passwordString,
    ) {
      pin
    }
  }
`;

export const GET_USER_MAIL = gql`
  query UserMailQuery($phone: String!) {
    getUser(
      phone: $phone
    ) {
      email
      id
    }
  }
`;

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    tokenAuth(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`;


// 3
export interface CreateLinkMutationResponse {
    createLink: UserRegistration;
    loading: boolean;
}
