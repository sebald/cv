import { shallow } from 'enzyme';
import * as React from 'react';

import { theme } from '../../style';
import { Caption, Display, Heading, Subheading, Text } from './Typography';

test('render display', () => {
  const wrapper = shallow(<Display theme={theme}>Text</Display>);
  expect(wrapper).toMatchSnapshot();
});

test('render heading', () => {
  const wrapper = shallow(<Heading theme={theme}>Text</Heading>);
  expect(wrapper).toMatchSnapshot();
});

test('render subheading', () => {
  const wrapper = shallow(<Subheading theme={theme}>Text</Subheading>);
  expect(wrapper).toMatchSnapshot();
});

test('render caption', () => {
  const wrapper = shallow(<Caption theme={theme}>Text</Caption>);
  expect(wrapper).toMatchSnapshot();
});

test('render text', () => {
  const wrapper = shallow(<Text theme={theme}>Text</Text>);
  expect(wrapper).toMatchSnapshot();
});
