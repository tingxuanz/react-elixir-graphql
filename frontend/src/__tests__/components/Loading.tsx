import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Loading from '../../components/Loading';
import CircularProgress from '@material-ui/core/CircularProgress';

it('render correctly', () => {
  const component: ShallowWrapper = shallow(<Loading />);
  expect(component.find(CircularProgress)).toHaveLength(1)
})