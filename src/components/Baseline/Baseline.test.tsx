import { mount } from 'enzyme';
import * as React from 'react';

import { Baseline } from './Baseline';

test('render default', () => {
  const wrapper = mount(<Baseline />);
  expect(wrapper).toMatchSnapshot();
});
