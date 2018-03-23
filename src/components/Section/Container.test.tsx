import * as React from 'react';

import { shallowWithTheme } from '../../test.utils';
import { Container } from './Container';

test('render correct', () => {
  const wrapper = shallowWithTheme(<Container title="Title" />);
  expect(wrapper).toMatchSnapshot();
});

test('render children', () => {
  const wrapper = shallowWithTheme(<Container title="Title">child</Container>);
  expect(wrapper).toMatchSnapshot();
});
