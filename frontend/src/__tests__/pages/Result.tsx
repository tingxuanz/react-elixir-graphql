import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { wait } from '../../testHelper';
import { GET_USERINPUT } from '../../queries';
import Result from '../../pages/Result';

afterEach(cleanup);

it('should render correctly when userInpput is not provided', async () => {
  const mock = {
    request: {
      query: GET_USERINPUT,
    },
    result: {
      data: { userInput: '' }
    },
  };
  const { getByText } = render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Router>
        <Result />
      </Router>
    </MockedProvider>
  )

  await wait(0);
  expect(getByText('No address provided yet')).toBeTruthy();
});

it('should render correctly when userInpput is provided', async () => {
  const mock = {
    request: {
      query: GET_USERINPUT,
    },
    result: {
      data: { userInput: '70 Stephenson Street, Cremorne, VIC, Australia' }
    },
  };
  const { queryByText } = render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Router>
        <Result />
      </Router>
    </MockedProvider>
  )

  await wait(0);
  expect(queryByText('No address provided yet')).toBeNull();
});