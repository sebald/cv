import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Container } from './Container';

test('render correctly', () => {
  const wrapper = shallow(<Container theme={theme}>Text</Container>);
  expect(wrapper).toMatchSnapshot();
});
