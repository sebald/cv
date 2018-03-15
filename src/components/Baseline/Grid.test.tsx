import { shallow } from 'enzyme';
import * as React from 'react';

import { BaselineGrid } from './Grid';

test('render nothing', () => {
  const wrapper = shallow(<BaselineGrid />);
  expect(wrapper).toMatchSnapshot();
});

test('render <SysmetricBaseline/>', () => {
  const wrapper = shallow(<BaselineGrid />);
  wrapper.setState({ show: true });
  expect(wrapper).toMatchSnapshot();
});
