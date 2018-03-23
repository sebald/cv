import * as React from 'react';

import { shallowWithTheme } from '../../test.utils';
import { Item } from './Item';

test('render correct', () => {
  const wrapper = shallowWithTheme(<Item />);
  expect(wrapper).toMatchSnapshot();
});
