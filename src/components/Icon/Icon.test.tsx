import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Icon } from './Icon';

test('render correct', () => {
  const wrapper = shallow(<Icon theme={theme} />);
  expect(wrapper).toMatchSnapshot();
});
