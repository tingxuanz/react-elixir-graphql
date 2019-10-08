import React from 'react';
import { shallow } from 'enzyme';
import ShowError from '../../components/ShowError';

it('render correctly', () => {
  const component = shallow(<ShowError />);
  expect(component.first().type()).toEqual('p');
  expect(component.first().text()).toEqual('Error, please try again');
});