import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { IconLink } from './IconLink';

test('render correct', () => {
  const wrapper = shallow(<IconLink theme={theme} />);
  expect(wrapper).toMatchSnapshot();
});
