import * as React from 'react';

import { mountWithTheme } from '../../test.utils';
import { Divider } from './Divider';

test('render correctly', () => {
  const wrapper = mountWithTheme(<Divider />);
  expect(wrapper.find(Divider)).toMatchSnapshot();
});

test('render with custom width', () => {
  const wrapper = mountWithTheme(<Divider width={1 / 2} />);
  expect(wrapper.find(Divider)).toHaveStyleRule('width', '50%');
});
