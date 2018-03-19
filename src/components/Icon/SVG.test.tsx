import { shallow } from 'enzyme';
import * as React from 'react';

import { Github, StackOverflow, Twitter } from './SVG';

test('render Github icon', () => {
  const wrapper = shallow(<Github />);
  expect(wrapper).toMatchSnapshot();
});

test('render StackOverflow icon', () => {
  const wrapper = shallow(<StackOverflow />);
  expect(wrapper).toMatchSnapshot();
});

test('render Twitter icon', () => {
  const wrapper = shallow(<Twitter />);
  expect(wrapper).toMatchSnapshot();
});
