import * as React from 'react';

import { mountWithTheme } from '../../test.utils';
import { Animate } from './Animate';

test('render correctly', () => {
  const wrapper = mountWithTheme(<Animate animation="fadeInUp" />);
  expect(wrapper).toMatchSnapshot();
});

test('add animation to children', () => {
  const wrapper = mountWithTheme(
    <Animate animation="fadeInUp" duration={1000}>
      <div>Hello</div>
      <h2>there</h2>
    </Animate>
  );
  expect(wrapper).toMatchSnapshot();
});
