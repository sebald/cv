import * as React from 'react';

import { shallowWithTheme } from '../../test.utils';
import { Item } from './Item';

test('render correct', () => {
  const wrapper = shallowWithTheme(<Item title="Title" />);
  expect(wrapper).toMatchSnapshot();
});

test('render with caption', () => {
  const wrapper = shallowWithTheme(<Item title="Title" caption="Caption" />);
  expect(wrapper).toMatchSnapshot();
});

test('render children', () => {
  const wrapper = shallowWithTheme(<Item title="Title">child</Item>);
  expect(wrapper).toMatchSnapshot();
});
