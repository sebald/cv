import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Footer } from './Footer';

test('render correctly', () => {
  const wrapper = shallow(<Footer theme={theme}>Text</Footer>);
  expect(wrapper).toMatchSnapshot();
});
