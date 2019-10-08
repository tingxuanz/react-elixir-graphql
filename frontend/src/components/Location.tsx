import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_LOCATION, GET_USERINPUT } from '../queries';
import Loading from './Loading';

interface LocationData {
  location: {
    lat: number;
    lon: number;
  }
}

const Location: React.FC = () => {
  const result = useQuery(GET_USERINPUT);
  const userInput = result.data.userInput;
  const { loading, data, error } = useQuery<LocationData>(GET_LOCATION, { variables: { address: userInput } });
  if (loading) return <Loading />;
  if (error) return <p>Error, please try again</p>;
  return (
    <div>
      {
        data &&  
          (
            <Fragment>
              <p>Latitude: {data.location.lat}</p>
              <p>Longitude: {data.location.lon}</p>
            </Fragment>
          )
      }
    </div>
  );
}

export default Location;