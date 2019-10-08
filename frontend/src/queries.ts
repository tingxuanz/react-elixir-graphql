import gql from 'graphql-tag';

export const GET_USERINPUT = gql`
  {
    userInput @client
  }
`;
export const GET_LOCATION = gql`
  query getLocation($address: String!) {
    location(address: $address) {
      lat
      lon
    }
  }
`;