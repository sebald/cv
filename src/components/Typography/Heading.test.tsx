import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Heading } from './Heading';

test('render correctly', () => {
  const wrapper = shallow(<Heading theme={theme}>Text</Heading>);
  expect(wrapper).toMatchSnapshot();
});
