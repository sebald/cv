import { shallow } from 'enzyme';
import * as React from 'react';

import { Item } from './Item';

test('render correct', () => {
  const wrapper = shallow(<Item />);
  expect(wrapper).toMatchSnapshot();
});
