import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_USERINPUT = gql`
  {
    userInput @client
  }
`;
const GET_LOCATION = gql`
  query getLocation($address: String!) {
    location(address: $address) {
      lat
      lon
    }
  }
`;

const Location: React.FC = () => {
  const result = useQuery(GET_USERINPUT);
  const userInput = result.data.userInput;
  const { loading, data, error } = useQuery(GET_LOCATION, { variables: { address: userInput } });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>
  return (
    <div>
      <p>Latitude: {data.location.lat}</p>
      <p>Longitude: {data.location.lon}</p>
      <p>location</p>
    </div>
  ) 
}

export default Location;