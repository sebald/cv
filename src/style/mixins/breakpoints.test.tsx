import { shallow } from 'enzyme';
import * as React from 'react';

import { styled, theme } from '..';
import { breakpoints, media } from './breakpoints';

test('breakpoints', () => {
  expect(breakpoints({ theme })).toMatchSnapshot();
});

test('media', () => {
  const Component = styled('div')`
    ${media('small')`color: red;`};
  `;
  const wrapper = shallow(<Component theme={theme} />);
  expect(wrapper).toMatchSnapshot();
});

test('media with media type', () => {
  const Component = styled('div')`
    ${media('medium', 'screen')`color: red;`};
  `;
  const wrapper = shallow(<Component theme={theme} />);
  expect(wrapper).toMatchSnapshot();
});