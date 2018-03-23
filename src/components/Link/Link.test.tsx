import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Link } from './Link';

test('render correct', () => {
  const wrapper = shallow(<Link theme={theme} />);
  expect(wrapper).toMatchSnapshot();
});
