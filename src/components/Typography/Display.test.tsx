import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Display } from './Display';

test('render correctly', () => {
  const wrapper = shallow(<Display theme={theme}>Text</Display>);
  expect(wrapper).toMatchSnapshot();
});
