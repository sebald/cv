import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Caption } from './Caption';

test('render correctly', () => {
  const wrapper = shallow(<Caption theme={theme}>Text</Caption>);
  expect(wrapper).toMatchSnapshot();
});
