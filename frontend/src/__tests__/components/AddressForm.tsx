import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter as Router } from 'react-router-dom';

import AddressForm from '../../components/AddressForm';
import TextField from '@material-ui/core/TextField';

let component: ReactWrapper;

beforeEach(() => {
  component = mount(
    <MockedProvider>
      <Router>
        <AddressForm />
      </Router>
    </MockedProvider>
  );
});


it('render 4 TextField', () => {
  expect(component.find(TextField)).toHaveLength(4);
});

it('first TextField has name address', () => {
  expect(component.find(TextField).at(0).props().name).toEqual("address");
});

it('second TextField has name suburb', () => {
  expect(component.find(TextField).at(1).props().name).toEqual("suburb");
});

it('third TextField has name state', () => {
  expect(component.find(TextField).at(2).props().name).toEqual("state");
});

it('fourth TextField has name country', () => {
  expect(component.find(TextField).at(3).props().name).toEqual("country");
});