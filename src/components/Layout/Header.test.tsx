import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Header } from './Header';

test('render correctly', () => {
  const wrapper = shallow(<Header theme={theme}>Text</Header>);
  expect(wrapper).toMatchSnapshot();
});
