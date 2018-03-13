import { mount } from 'enzyme';
import * as React from 'react';

import { BaselineGrid } from './Grid';

test('render nothing', () => {
  const wrapper = mount(<BaselineGrid />);
  expect(wrapper).toMatchSnapshot();
});

test('render <SysmetricBaseline/>', () => {
  const wrapper = mount(<BaselineGrid />);
  wrapper.setState({ show: true });
  expect(wrapper).toMatchSnapshot();
});
