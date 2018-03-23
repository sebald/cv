import * as React from 'react';

import { mountWithTheme } from '../../test.utils';
import { Space } from './Space';

test('render correctly', () => {
  const wrapper = mountWithTheme(<Space />);
  expect(wrapper).toMatchSnapshot();
});

test('add "spacing" classNames to children', () => {
  const wrapper = mountWithTheme(
    <Space my={2} mx={1}>
      <div>Hello</div>
      <h2>there</h2>
    </Space>
  );
  expect(wrapper).toMatchSnapshot();
});
