import * as React from 'react';

import { shallowWithTheme } from '../../test.utils';
import { Main } from './Main';

test('render correctly', () => {
  const wrapper = shallowWithTheme(<Main>Text</Main>);
  expect(wrapper).toMatchSnapshot();
});
