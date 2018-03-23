import * as React from 'react';

import { shallowWithTheme } from '../../test.utils';
import { SectionHeading } from './SectionHeading';

test('render correct', () => {
  const wrapper = shallowWithTheme(<SectionHeading />);
  expect(wrapper).toMatchSnapshot();
});

test('render children', () => {
  const wrapper = shallowWithTheme(<SectionHeading>child</SectionHeading>);
  expect(wrapper).toMatchSnapshot();
});
