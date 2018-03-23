import { shallow } from 'enzyme';
import * as React from 'react';

import { styled, theme } from '../../style';
import { aside } from './mixins';

test('render correctly', () => {
  const Component = styled('div')`
    ${aside};
  `;
  const wrapper = shallow(<Component theme={theme} />);
  expect(wrapper).toMatchSnapshot();
});
