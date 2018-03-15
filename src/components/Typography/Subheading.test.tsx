import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Subheading } from './Subheading';

test('render correctly', () => {
  const wrapper = shallow(<Subheading theme={theme}>Text</Subheading>);
  expect(wrapper).toMatchSnapshot();
});
