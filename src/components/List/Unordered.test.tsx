import { shallow } from 'enzyme';
import * as React from 'react';

import { Unordered } from './Unordered';

test('render correct', () => {
  const wrapper = shallow(<Unordered />);
  expect(wrapper).toMatchSnapshot();
});
