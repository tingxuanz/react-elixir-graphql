import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, cleanup } from '@testing-library/react';

import { wait } from '../../testHelper';
import { GET_LOCATION } from '../../queries';
import Location from '../../components/Location';

const address = '70 Stephenson Street, Cremorne, VIC, Australia';

afterEach(cleanup);

it('should render Loading', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={[]}>
      <Location address={address} />
    </MockedProvider>
  );
  expect(getByTestId('loading')).toBeTruthy();
  await wait(0);
});

it('should render error', async () => {
  const mock = {
    request: {
      query: GET_LOCATION,
      variables: { address }
    },
    error: new Error('Error'),
  };
  const { container } = render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Location address={address} />
    </MockedProvider>
  );
  await wait(0);
  expect(container.textContent).toMatch('Error');
});

it('should render data', async () => {
  const mock = {
    request: {
      query: GET_LOCATION,
      variables: { address }
    },
    result: {
      data: { location: { lat: -37, lon: 144 } }
    },
  };
  const { container } = render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Location address={address} />
    </MockedProvider>
  );

  await wait(0);
  expect(container.textContent).toMatch('Latitude: -37');
  expect(container.textContent).toMatch('Longitude: 144');

});


