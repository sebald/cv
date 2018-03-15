import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Text } from './Text';

test('render correctly', () => {
  const wrapper = shallow(<Text theme={theme}>Text</Text>);
  expect(wrapper).toMatchSnapshot();
});
