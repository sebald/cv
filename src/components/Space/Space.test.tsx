import * as React from 'react';

import { mountWithTheme } from '../../test.utils';
import { Space } from './Space';

test('render correctly', () => {
  const wrapper = mountWithTheme(<Space />);
  expect(wrapper).toMatchSnapshot();
});

test('render children', () => {
  const wrapper = mountWithTheme(
    <Space>
      <div>Hello</div>
      <h2>there</h2>
    </Space>
  );
  expect(wrapper).toMatchSnapshot();
});

test('add "spacing" classNames to children', () => {
  const wrapper = mountWithTheme(
    <Space my={2} mx={1}>
      <div>Hello</div>
      <h2>there</h2>
    </Space>
  );
  const { className } = wrapper.find('div').props();
  expect(className).toBeTruthy();
  expect(wrapper.find('h2').props().className).toEqual(className);
});

test('merges with existing child classNames', () => {
  const wrapper = mountWithTheme(
    <Space mx={2}>
      <div className="beep">Hello</div>
      <h2>hi</h2>
    </Space>
  );
  expect(wrapper.find('div').props().className).toMatch('beep');
});
