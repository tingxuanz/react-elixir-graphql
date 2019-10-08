import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_LOCATION } from '../queries';
import Loading from './Loading';
import ShowError from './ShowError';

interface LocationProps {
  address: string;
}

interface LocationData {
  location: {
    lat: number;
    lon: number;
  }
}

const Location: React.FC<LocationProps> = ({ address }) => {
  const { loading, data, error } = useQuery<LocationData>(GET_LOCATION, { variables: { address } });
  if (loading) return <Loading />;
  if (error) return <ShowError />;
  return (
    <div>
      {
        data &&  
          (
            <Fragment>
              <p id="lat">Latitude: {data.location.lat}</p>
              <p id="lon">Longitude: {data.location.lon}</p>
            </Fragment>
          )
      }
    </div>
  );
}

export default Location;